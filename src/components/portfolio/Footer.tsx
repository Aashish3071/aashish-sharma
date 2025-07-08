import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Aashish Sharma</h3>
              <p className="text-white/70 text-sm">
                Performance-Driven Digital Marketing Expert
              </p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                <Badge variant="secondary" className="text-xs">
                  Google Ads
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Meta Ads
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  ROAS Expert
                </Badge>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="text-center">
              <h4 className="font-semibold mb-4">Quick Contact</h4>
              <div className="space-y-2">
                <a 
                  href="mailto:aarav3071@gmail.com" 
                  className="flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  aarav3071@gmail.com
                </a>
                <a 
                  href="tel:+919625064045" 
                  className="flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  +91 96250 64045
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex justify-center md:justify-end gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:aarav3071@gmail.com" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">
                © 2024 Aashish Sharma. All rights reserved.
              </p>
              <p className="text-white/60 text-sm flex items-center gap-1">
                Made with <Heart className="h-4 w-4 text-red-400" /> for growth-focused brands
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};