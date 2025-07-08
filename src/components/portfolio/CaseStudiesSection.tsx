import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Target,
  BarChart3,
  DollarSign,
  CheckCircle2,
  Zap,
  Users,
  ShoppingCart,
} from "lucide-react";

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "E-commerce Revenue Growth",
      industry: "Beauty & Skincare",
      duration: "6 months",
      metrics: [
        {
          label: "ROAS",
          value: "4.8x",
          icon: TrendingUp,
          color: "text-green-500",
        },
        {
          label: "Revenue",
          value: "+312%",
          icon: DollarSign,
          color: "text-blue-500",
        },
        { label: "CPA", value: "-45%", icon: Target, color: "text-purple-500" },
      ],
      achievements: [
        "Scaled monthly revenue from ₹12L to ₹48L",
        "Reduced customer acquisition cost by 45%",
        "Improved conversion rate by 2.8x",
        "Built automated retargeting system",
      ],
    },
    {
      title: "Lead Generation Campaign",
      industry: "B2B SaaS",
      duration: "3 months",
      metrics: [
        { label: "CPL", value: "-62%", icon: Target, color: "text-green-500" },
        { label: "Leads", value: "+285%", icon: Users, color: "text-blue-500" },
        { label: "CVR", value: "12.4%", icon: Zap, color: "text-purple-500" },
      ],
      achievements: [
        "Generated 1200+ qualified leads",
        "Reduced cost per lead from ₹2,800 to ₹980",
        "Achieved 12.4% landing page conversion",
        "Implemented multi-channel attribution",
      ],
    },
    {
      title: "D2C Brand Scaling",
      industry: "Fashion & Apparel",
      duration: "12 months",
      metrics: [
        {
          label: "ROAS",
          value: "3.2x",
          icon: TrendingUp,
          color: "text-green-500",
        },
        {
          label: "AOV",
          value: "+75%",
          icon: ShoppingCart,
          color: "text-blue-500",
        },
        {
          label: "Scale",
          value: "5x",
          icon: BarChart3,
          color: "text-purple-500",
        },
      ],
      achievements: [
        "Scaled monthly ad spend from ₹1L to ₹5L",
        "Maintained consistent 3.2x ROAS",
        "Increased average order value by 75%",
        "Built cross-platform remarketing",
      ],
    },
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Performance Marketing Results
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results and metrics from successful performance marketing
              campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <Card
                key={idx}
                className="border-2 border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {study.title}
                      </h3>
                      <div className="flex gap-2 mb-4">
                        <Badge variant="secondary">{study.industry}</Badge>
                        <Badge variant="outline">{study.duration}</Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {study.metrics.map((metric, metricIdx) => (
                        <div key={metricIdx} className="text-center">
                          <metric.icon
                            className={`h-5 w-5 mx-auto mb-2 ${metric.color}`}
                          />
                          <div className={`font-bold ${metric.color}`}>
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      {study.achievements.map((achievement, achievementIdx) => (
                        <div
                          key={achievementIdx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
