import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Linkedin, Mail, Phone, TrendingUp, Target, BarChart3, Zap, DollarSign, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-primary/5 overflow-hidden">
      {/* Marketing Icons Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Marketing Icons */}
        <div className="absolute top-20 left-10 animate-float">
          <TrendingUp className="h-8 w-8 text-primary/20" />
        </div>
        <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Target className="h-6 w-6 text-accent/20" />
        </div>
        <div className="absolute top-40 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <BarChart3 className="h-10 w-10 text-chart-secondary/20" />
        </div>
        <div className="absolute bottom-40 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
          <Zap className="h-7 w-7 text-success/20" />
        </div>
        <div className="absolute bottom-32 left-16 animate-float" style={{ animationDelay: '1.5s' }}>
          <DollarSign className="h-8 w-8 text-primary/20" />
        </div>
        <div className="absolute top-1/2 right-1/4 animate-float" style={{ animationDelay: '3s' }}>
          <Users className="h-6 w-6 text-accent/20" />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-accent/10 to-success/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary shadow-elegant mb-8 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">AS</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
              Aashish Sharma
            </h1>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge variant="secondary" className="text-base px-4 py-2">
                Performance Marketing
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                3+ Years Experience
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                ROAS Expert
              </Badge>
            </div>
          </div>

          {/* Tagline */}
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Proven Digital Marketing Strategist | Scaling Brands with Data-Driven ROAS
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              Trusted by Fortune 500 companies and growing startups to deliver measurable growth through performance marketing
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto my-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">20+ Lakhs</div>
              <div className="text-sm text-muted-foreground">Monthly Ad Budget</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3x-5x+</div>
              <div className="text-sm text-muted-foreground">Average ROAS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Brands Helped</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white px-8 py-6 text-lg font-semibold shadow-elegant">
              Work With Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex gap-3">
              <Button variant="outline" size="lg" className="p-3" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="p-3" asChild>
                <a href="mailto:aarav3071@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="p-3" asChild>
                <a href="tel:+919625064045">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
      </div>
    </section>
  );
};