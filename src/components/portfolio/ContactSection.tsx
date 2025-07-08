import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  Linkedin,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Clock,
  Target,
} from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aarav3071@gmail.com",
      href: "mailto:aarav3071@gmail.com",
      color: "primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 96250 64045",
      href: "tel:+919625064045",
      color: "accent",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/aashish-sharma-6b3b17185/",
      color: "chart-secondary",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Quick Response",
      description: "Get a response within 24 hours",
    },
    {
      icon: Target,
      title: "Free Strategy",
      description: "Initial marketing audit & recommendations",
    },
    {
      icon: CheckCircle2,
      title: "No Commitment",
      description: "Free consultation with no strings attached",
    },
  ];

  return (
    <section id="contact-section" className="py-20 bg-secondary/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-accent/5 to-success/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Grow Your Business Together
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to scale your digital marketing efforts? Let's discuss how I
              can help you achieve your ROAS goals and drive meaningful growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <Input placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Company</label>
                        <Input placeholder="Your company" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="you@company.com" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Monthly Ad Budget
                      </label>
                      <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                        <option>Select your budget range</option>
                        <option>₹50,000 - ₹2,00,000</option>
                        <option>₹2,00,000 - ₹5,00,000</option>
                        <option>₹5,00,000 - ₹10,00,000</option>
                        <option>₹10,00,000+</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <Textarea
                        placeholder="Tell me about your goals and challenges..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <Button
                      size="lg"
                      className="w-full bg-gradient-primary text-white"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Benefits */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactInfo.map((contact, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-6 flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: `hsl(var(--${contact.color}) / 0.1)`,
                        }}
                      >
                        <contact.icon
                          className="h-6 w-6"
                          style={{ color: `hsl(var(--${contact.color}))` }}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {contact.label}
                        </h3>
                        <a
                          href={contact.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Benefits */}
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Why Work With Me?</h3>
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {benefit.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Calendar CTA */}
              <Card className="bg-gradient-primary text-white border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Calendar className="h-8 w-8" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Prefer a Quick Chat?
                      </h3>
                      <p className="text-sm text-white/90">
                        Book a free 30-minute discovery call
                      </p>
                    </div>
                    <Button
                      variant="secondary"
                      className="ml-auto bg-white text-primary hover:bg-white/90"
                    >
                      Schedule Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
