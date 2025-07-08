import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen } from "lucide-react";

export const EducationSection = () => {
  const education = [
    {
      degree: "Master's in Marketing",
      institution: "NMIMS (Narsee Monjee Institute of Management Studies)",
      status: "Pursuing",
      type: "Graduate",
      icon: GraduationCap,
      color: "primary"
    },
    {
      degree: "B.Tech in Bio-Technology",
      institution: "AKTU (Dr. A.P.J. Abdul Kalam Technical University)",
      status: "Completed",
      type: "Undergraduate",
      icon: BookOpen,
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground">
              Combining technical expertise with marketing excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 shadow-card"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `hsl(var(--${edu.color}) / 0.1)` }}
                    >
                      <edu.icon 
                        className="h-6 w-6" 
                        style={{ color: `hsl(var(--${edu.color}))` }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge 
                          variant={edu.status === "Pursuing" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {edu.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {edu.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground leading-tight">
                        {edu.degree}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground font-medium">
                    {edu.institution}
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