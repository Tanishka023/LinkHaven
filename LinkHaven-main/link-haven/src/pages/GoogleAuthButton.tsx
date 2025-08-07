'use client';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Session, User } from '@supabase/supabase-js';

export default function GoogleAuthButton() {
  const supabase = createClientComponentClient();
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setUser(session?.user || null);
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <div>
      {!user ? (
        <button onClick={handleLogin}>
          Sign in with Google
        </button>
      ) : (
        <div>
          <p>Welcome, {user.user_metadata.name}</p>
          <img
            src={user.user_metadata.picture}
            alt="Profile"
            width={50}
            height={50}
          />
          <button onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
