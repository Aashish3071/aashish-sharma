import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  TrendingUp, 
  BarChart3, 
  Brain, 
  Database, 
  Code 
} from "lucide-react";

export const AboutSection = () => {
  const skills = [
    { name: "Google Ads", category: "Advertising", icon: Target },
    { name: "Meta Ads", category: "Advertising", icon: Target },
    { name: "LinkedIn Ads", category: "Advertising", icon: Target },
    { name: "Analytics", category: "Analytics", icon: BarChart3 },
    { name: "ChatGPT/Claude", category: "AI Tools", icon: Brain },
    { name: "Excel", category: "Analytics", icon: Database },
    { name: "SQL", category: "Analytics", icon: Database },
    { name: "Tableau", category: "Analytics", icon: BarChart3 },
    { name: "Python", category: "Programming", icon: Code },
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

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed">
                <p className="mb-6">
                  With <span className="font-semibold text-primary">3+ years of experience</span> in the digital marketing industry, I specialize in executing and managing high-impact ad campaigns.
                </p>
                <p className="mb-6">
                  I manage a monthly ad budget of over <span className="font-semibold text-primary">20+ lakhs</span> across multiple accounts, consistently achieving a <span className="font-semibold text-primary">ROAS of 3x–5x and above</span>.
                </p>
                <p>
                  My expertise spans across performance marketing, SEM, and paid social ads, with a proven track record of delivering measurable results for leading brands across various industries.
                </p>
              </div>

              {/* Key Metrics Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="border-l-4 border-l-primary shadow-card">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-8 w-8 text-primary" />
                      <div>
                        <div className="text-2xl font-bold text-foreground">11.11x</div>
                        <div className="text-sm text-muted-foreground">Peak ROAS</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-accent shadow-card">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="h-8 w-8 text-accent" />
                      <div>
                        <div className="text-2xl font-bold text-foreground">4%</div>
                        <div className="text-sm text-muted-foreground">Avg CVR</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Skills Grid */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Core Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="group hover:scale-105 transition-transform duration-200"
                  >
                    <Badge 
                      variant="outline" 
                      className="w-full p-3 justify-start gap-2 text-sm hover:bg-primary/10 hover:border-primary/30"
                    >
                      <skill.icon className="h-4 w-4 text-primary" />
                      {skill.name}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};