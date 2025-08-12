import { Fish, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Fish className="h-8 w-8" />
              <span className="text-xl font-bold">Constiania Tradings</span>
            </div>
            <p className="text-primary-foreground/80">
              Your one-stop partner for quality fisheries products and fish farming solutions in Gweru and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-gold transition-colors">Home</Link>
              <Link to="/about" className="block hover:text-gold transition-colors">About Us</Link>
              <Link to="/products" className="block hover:text-gold transition-colors">Products & Services</Link>
              <Link to="/gallery" className="block hover:text-gold transition-colors">Gallery</Link>
              <Link to="/contact" className="block hover:text-gold transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+263 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@constianiatradings.co.zw</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Gweru, Zimbabwe</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <div>
                  <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p>Sat: 8:00 AM - 1:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 Constiania Tradings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;