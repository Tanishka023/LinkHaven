import { BadgeCheck, Link2, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#faf5ff] text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
          About LinkHaven
        </h1>

        <p className="text-lg text-center mb-10 max-w-2xl mx-auto text-gray-700">
          LinkHaven is your personalized bookmark manager that helps you save, organize, and access links in the most efficient way possible. Whether you're a developer, student, or professional — we’ve built LinkHaven to make your digital life easier.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-all">
            <CardContent className="p-6 text-center">
              <BadgeCheck className="mx-auto text-indigo-500 mb-4" size={36} />
              <h2 className="text-xl font-semibold mb-2 text-indigo-600">Save Instantly</h2>
              <p className="text-gray-600">
                Quickly save links with one click. Add titles, tags, and categorize them with ease.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-all">
            <CardContent className="p-6 text-center">
              <Link2 className="mx-auto text-purple-500 mb-4" size={36} />
              <h2 className="text-xl font-semibold mb-2 text-purple-600">Organize Efficiently</h2>
              <p className="text-gray-600">
                Group links into folders or categories. Never lose an important URL again.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-all">
            <CardContent className="p-6 text-center">
              <Users className="mx-auto text-pink-500 mb-4" size={36} />
              <h2 className="text-xl font-semibold mb-2 text-pink-600">Collaborate Easily</h2>
              <p className="text-gray-600">
                Share folders with teammates, classmates, or friends. Boost productivity together.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          Made with ❤️ by the LinkHaven team. Designed to simplify your digital world.
        </div>
      </div>
    </div>
  );
}
