import { Search, Smartphone, Cloud, Tag, Zap, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Search",
      description: "Find any link instantly with AI-powered search across titles, descriptions, and content.",
    },
    {
      icon: Tag,
      title: "Intelligent Tagging",
      description: "Auto-categorize links with smart tags and create custom collections for better organization.",
    },
    {
      icon: Cloud,
      title: "Cloud Sync",
      description: "Your links are automatically synced across all devices with real-time updates.",
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Save and access links on the go with our responsive design and mobile apps.",
    },
    {
      icon: Zap,
      title: "Quick Save",
      description: "Save links with one click using our browser extension or bookmarklet.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is encrypted and secure. We never share your personal information.",
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Everything you need to{" "}
            <span className="gradient-text">organize the web</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make link management effortless and intuitive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-gradient-card rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;