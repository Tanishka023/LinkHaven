
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <Input type="text" placeholder="Your Name" required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <Input type="email" placeholder="your@email.com" required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <Textarea placeholder="Write your message here..." required />
        </div>

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
}
