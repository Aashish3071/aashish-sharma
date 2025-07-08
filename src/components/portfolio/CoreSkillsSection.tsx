import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  BarChart3,
  Brain,
  Database,
  Code,
  LineChart,
  Search,
  Users,
  Zap,
  Share2,
  TagIcon,
  Lightbulb,
} from "lucide-react";

export const CoreSkillsSection = () => {
  const skillCategories = [
    {
      title: "Advertising Platforms",
      description: "Expert in managing and optimizing paid campaigns",
      color: "text-blue-500",
      skills: [
        { name: "Google Ads", icon: Search },
        { name: "Meta Ads", icon: Share2 },
        { name: "LinkedIn Ads", icon: Users },
      ],
    },
    {
      title: "Performance Analytics",
      description: "Data-driven decision making and optimization",
      color: "text-green-500",
      skills: [
        { name: "Google Analytics", icon: LineChart },
        { name: "Data Studio", icon: BarChart3 },
        { name: "A/B Testing", icon: Target },
      ],
    },
    {
      title: "Technical Skills",
      description: "Tools for advanced campaign optimization",
      color: "text-purple-500",
      skills: [
        { name: "GTM", icon: TagIcon },
        { name: "SQL", icon: Database },
        { name: "Python", icon: Code },
      ],
    },
    {
      title: "Growth Tools",
      description: "Modern tools for campaign enhancement",
      color: "text-orange-500",
      skills: [
        { name: "AI/ML Tools", icon: Brain },
        { name: "CRO", icon: Zap },
        { name: "Marketing Automation", icon: Lightbulb },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Core Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leveraging cutting-edge tools and platforms to deliver exceptional
              performance marketing results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <Card
                key={idx}
                className="border-2 border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3
                    className={`text-xl font-semibold mb-2 ${category.color}`}
                  >
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    {category.description}
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {category.skills.map((skill, skillIdx) => (
                      <div
                        key={skillIdx}
                        className="group hover:scale-105 transition-transform duration-200"
                      >
                        <Badge
                          variant="outline"
                          className="w-full p-3 justify-center gap-2 text-sm hover:bg-primary/10 hover:border-primary/30 flex flex-col items-center"
                        >
                          <skill.icon className={`h-5 w-5 ${category.color}`} />
                          <span className="text-center">{skill.name}</span>
                        </Badge>
                      </div>
                    ))}
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
