import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Calendar, ArrowRight } from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aarav3071@gmail.com",
      href: "mailto:aarav3071@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 96250 64045",
      href: "tel:+919625064045",
      color: "accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "#",
      color: "chart-secondary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Grow Your Business Together
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to scale your digital marketing efforts? Let's discuss how I can help you achieve your ROAS goals and drive meaningful growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 shadow-card"
              >
                <CardContent className="p-6 text-center">
                  <div 
                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `hsl(var(--${contact.color}) / 0.1)` }}
                  >
                    <contact.icon 
                      className="h-8 w-8" 
                      style={{ color: `hsl(var(--${contact.color}))` }}
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {contact.label}
                  </h3>
                  <a 
                    href={contact.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {contact.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-gradient-primary text-white shadow-elegant border-0">
              <CardContent className="p-8">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Start Your Growth Journey?
                  </h3>
                  <p className="text-white/90 mb-6">
                    Book a free 30-minute discovery call to discuss your marketing goals and see how I can help you achieve them.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      variant="secondary"
                      className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule a Discovery Call
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold"
                    >
                      Download Portfolio
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};