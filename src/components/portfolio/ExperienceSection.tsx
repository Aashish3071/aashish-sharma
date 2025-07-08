import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Target, 
  Users, 
  DollarSign, 
  BarChart3,
  Eye 
} from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      company: "PR Pundit Havas Red",
      clients: ["Paula's Choice", "Le Creuset", "MoroccanOil India"],
      metrics: [
        { label: "ROAS", value: "5x+", detail: "Paula's Choice average" },
        { label: "Peak ROAS", value: "11.11x", detail: "Best performance" },
        { label: "Conversion Rate", value: "4%", detail: "Average CVR" },
        { label: "Growth", value: "10%", detail: "Le Creuset follower growth" }
      ],
      color: "primary"
    },
    {
      company: "Iris Worldwide",
      clients: ["BOSCH SDS", "SAFT", "Triveni Turbines", "UK NIVEA"],
      metrics: [
        { label: "Budget Managed", value: "$30,000+", detail: "Monthly ad spend" },
        { label: "Platforms", value: "LinkedIn", detail: "Ads strategy" },
        { label: "Google Ads", value: "Copywriting", detail: "Ad copy optimization" },
        { label: "Campaign Types", value: "B2B", detail: "Industrial sectors" }
      ],
      color: "accent"
    },
    {
      company: "The Communications Council",
      clients: ["Hazoorilal Legacy", "See Love", "Babyforest"],
      metrics: [
        { label: "CTR Increase", value: "↑ 20%", detail: "Click-through rate" },
        { label: "CPC Reduction", value: "↓ 15%", detail: "Cost per click" },
        { label: "Engagement", value: "↑ 25%", detail: "Overall engagement" },
        { label: "Brands", value: "3", detail: "Luxury & lifestyle" }
      ],
      color: "chart-secondary"
    },
    {
      company: "Yellow Studio",
      clients: ["OYO", "Belvilla", "Make My Trip", "Club Mahindra", "Zee5", "Hotstar"],
      metrics: [
        { label: "Engagement", value: "↑ 30%", detail: "Social engagement boost" },
        { label: "CPC", value: "↓ 15%", detail: "Cost optimization" },
        { label: "Meta Partnership", value: "Managed", detail: "Strategic partnerships" },
        { label: "Channels", value: "Multi", detail: "SEO, Email, Social" }
      ],
      color: "success"
    },
    {
      company: "Sarvvid.ai",
      clients: ["AI/Tech Startup"],
      metrics: [
        { label: "ORM", value: "↑ 20%", detail: "Online reputation" },
        { label: "Website Traffic", value: "↑ 10%", detail: "Organic growth" },
        { label: "Engagement", value: "↑ 15%", detail: "Social metrics" },
        { label: "Sector", value: "AI/Tech", detail: "Emerging technology" }
      ],
      color: "chart-accent"
    }
  ];

  const getMetricIcon = (label: string) => {
    switch (label) {
      case "ROAS":
      case "Peak ROAS":
        return TrendingUp;
      case "CTR Increase":
      case "Engagement":
        return Eye;
      case "Budget Managed":
      case "CPC":
      case "CPC Reduction":
        return DollarSign;
      case "Conversion Rate":
        return Target;
      case "Growth":
        return BarChart3;
      default:
        return Users;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Brands I've Helped Grow
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From startups to Fortune 500 companies, I've delivered measurable results across diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-l-4 shadow-card"
                style={{ borderLeftColor: `hsl(var(--${exp.color}))` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground mb-3">
                    {exp.company}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {exp.clients.map((client, clientIndex) => (
                      <Badge 
                        key={clientIndex} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {client}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {exp.metrics.map((metric, metricIndex) => {
                    const IconComponent = getMetricIcon(metric.label);
                    return (
                      <div 
                        key={metricIndex} 
                        className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: `hsl(var(--${exp.color}) / 0.1)` }}
                          >
                            <IconComponent 
                              className="h-4 w-4" 
                              style={{ color: `hsl(var(--${exp.color}))` }}
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground text-sm">
                              {metric.label}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {metric.detail}
                            </div>
                          </div>
                        </div>
                        <div 
                          className="font-bold text-lg"
                          style={{ color: `hsl(var(--${exp.color}))` }}
                        >
                          {metric.value}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};