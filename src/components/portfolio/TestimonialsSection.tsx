import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "Paula's Choice India",
      image: "/testimonials/sarah.jpg",
      quote:
        "Aashish transformed our digital marketing strategy. His data-driven approach helped us achieve a consistent 5x+ ROAS, far exceeding our expectations.",
      metrics: "5x ROAS increase in 3 months",
    },
    {
      name: "Rajiv Mehta",
      role: "CEO",
      company: "Hazoorilal Legacy",
      image: "/testimonials/rajiv.jpg",
      quote:
        "Working with Aashish was a game-changer for our luxury jewelry brand. His understanding of high-end customer acquisition is unmatched.",
      metrics: "20% CTR improvement",
    },
    {
      name: "Emma Williams",
      role: "Growth Lead",
      company: "Le Creuset",
      image: "/testimonials/emma.jpg",
      quote:
        "Aashish's strategic approach to our social media campaigns resulted in significant follower growth and, more importantly, actual sales conversion.",
      metrics: "10% follower growth with 4% conversion rate",
    },
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Client Success Stories
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it - here's what my clients have to
              say about our collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <CardContent className="p-6 relative">
                  <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />

                  <div className="mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <div className="text-sm font-medium text-primary">
                      Key Achievement: {testimonial.metrics}
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
