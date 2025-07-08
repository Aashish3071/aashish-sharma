import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, BarChart3, Target, Users, Zap } from "lucide-react";

export const AboutSection = () => {
  const achievements = [
    {
      icon: TrendingUp,
      title: "Proven ROAS Expert",
      description:
        "Consistently delivering 3x-5x+ return on ad spend across diverse industries",
    },
    {
      icon: Target,
      title: "Data-Driven Approach",
      description:
        "Using advanced analytics and A/B testing to optimize campaign performance",
    },
    {
      icon: Users,
      title: "Client Success Focus",
      description:
        "Helping brands scale from ₹1L to ₹50L+ monthly revenue through strategic marketing",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed">
                <p className="mb-6">
                  With over 3 years of experience in performance marketing, I
                  specialize in helping brands achieve exceptional growth
                  through data-driven digital advertising strategies. My
                  approach combines deep analytical insights with creative
                  optimization to maximize ROAS and scale revenue predictably.
                </p>
                <p>
                  I've managed monthly budgets exceeding ₹20 Lakhs across
                  Google, Meta, and LinkedIn platforms, consistently delivering
                  results that exceed industry benchmarks. My expertise lies in
                  creating scalable, profitable campaigns that drive measurable
                  business growth.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="border-2 border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <achievement.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
