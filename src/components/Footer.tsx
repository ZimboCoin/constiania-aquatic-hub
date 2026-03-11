import { Fish, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(345,60%,22%)] via-[hsl(345,55%,28%)] to-[hsl(345,50%,18%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-foreground/10 w-10 h-10 rounded-xl flex items-center justify-center">
                <Fish className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xl font-bold text-primary-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Constiania
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60 -mt-1">
                  Tradings
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Your one-stop partner for quality fisheries products and fish farming solutions in Gweru and beyond.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider">Quick Links</h3>
            <div className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Products & Services" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="block text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-sm">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider">Contact Info</h3>
            <div className="space-y-3">
              {[
                { icon: Phone, text: "+263 773606044" },
                { icon: Mail, text: "info@constianiatradings.co.zw" },
                { icon: MapPin, text: "Gweru, Zimbabwe" },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-primary-foreground/70 text-sm">
                  <item.icon className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider">Business Hours</h3>
            <div className="flex items-start space-x-3 text-primary-foreground/70 text-sm">
              <Clock className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
              <div className="space-y-1">
                <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                <p>Sat: 8:00 AM - 1:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Constiania Tradings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
