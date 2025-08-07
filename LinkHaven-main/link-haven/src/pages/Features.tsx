import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "🔖 Bookmark Smarter",
    description: "Save your favorite links with one click. No more cluttered browsers or lost tabs.",
    bg: "bg-gradient-to-r from-pink-400 to-purple-500",
  },
  {
    title: "⚡ Fast Access",
    description: "Instantly access your saved links from any device with lightning-fast load times.",
    bg: "bg-gradient-to-r from-yellow-400 to-orange-500",
  },
  {
    title: "🎯 Categorize Efficiently",
    description: "Use tags and categories to organize bookmarks your way.",
    bg: "bg-gradient-to-r from-green-400 to-emerald-500",
  },
  
  {
    title: "🔐 Privacy First",
    description: "Your data stays yours. We value privacy and never compromise on security.",
    bg: "bg-gradient-to-r from-red-400 to-rose-500",
  },
];

const FeatureCard = ({ title, description, bg }: { title: string; description: string; bg: string }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${bg} text-white p-6 rounded-2xl shadow-lg mb-8`}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-base">{description}</p>
    </motion.div>
  );
};

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3] px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">✨ Features That Shine</h2>
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </div>
  );
}
