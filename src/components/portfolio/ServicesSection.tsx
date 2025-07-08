import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Target,
  BarChart3,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      title: "Performance Marketing Audit",
      price: "₹25,000",
      duration: "1 Week",
      description:
        "Comprehensive analysis of your current digital marketing performance with actionable recommendations.",
      icon: Target,
      features: [
        "Full funnel analysis",
        "Competitor benchmarking",
        "Audience insights",
        "Technical setup review",
        "30-page detailed report",
        "1-hour strategy call",
      ],
      bestFor: [
        "New businesses",
        "Underperforming campaigns",
        "Pre-scaling audit",
      ],
    },
    {
      title: "Full-Service Management",
      price: "₹75,000/month",
      duration: "3 Months Min.",
      description:
        "End-to-end management of your digital marketing campaigns across multiple platforms.",
      icon: BarChart3,
      features: [
        "Campaign strategy & setup",
        "Daily optimization",
        "Creative direction",
        "Weekly reporting",
        "A/B testing",
        "Competitor tracking",
      ],
      bestFor: ["E-commerce brands", "SaaS companies", "Service businesses"],
    },
    {
      title: "Growth Accelerator",
      price: "₹1,50,000/month",
      duration: "6 Months Min.",
      description:
        "Advanced scaling strategy for businesses ready to significantly increase their market presence.",
      icon: TrendingUp,
      features: [
        "Multi-channel strategy",
        "Custom audience building",
        "Advanced analytics setup",
        "Creative optimization",
        "24/7 monitoring",
        "Monthly strategy sessions",
      ],
      bestFor: ["Funded startups", "Enterprise clients", "High-growth brands"],
    },
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Services & Packages
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored solutions to help you achieve your digital marketing
              goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="relative group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary transform origin-left transition-transform group-hover:scale-x-100"></div>

                <CardHeader className="space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {service.title}
                  </CardTitle>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">
                      {service.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {service.duration}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-center">
                    {service.description}
                  </p>

                  <div className="space-y-4">
                    <div className="font-semibold">What's Included:</div>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="font-semibold">Best For:</div>
                    <div className="flex flex-wrap gap-2">
                      {service.bestFor.map((item, itemIndex) => (
                        <Badge key={itemIndex} variant="secondary">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-primary text-white mt-6"
                    size="lg"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Need a custom solution? Let's discuss your specific requirements.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
