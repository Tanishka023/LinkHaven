import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          if (credentialResponse.credential) {
            const decoded = jwtDecode(credentialResponse.credential);
            console.log('Decoded Token:', decoded);
          } else {
            console.log('No credential found');
          }
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
};

export default Login;
