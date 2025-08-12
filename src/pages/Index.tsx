import { ArrowRight, Fish, Wrench, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-fish-farm.jpg";
import fishSupplies from "@/assets/fish-supplies.jpg";
import pondConstruction from "@/assets/pond-construction.jpg";

const Index = () => {
  const services = [
    {
      icon: Fish,
      title: "Fish Feed & Fingerlings",
      description: "Premium quality fish feed and healthy fingerlings for optimal growth and development.",
      image: fishSupplies
    },
    {
      icon: Wrench,
      title: "Equipment & Testing Kits",
      description: "Professional aeration equipment, water testing kits, and pond maintenance tools.",
      image: pondConstruction
    },
    {
      icon: Users,
      title: "Pond Construction",
      description: "Complete fish pond construction services from design to installation.",
      image: pondConstruction
    },
    {
      icon: Trophy,
      title: "Consultancy Services",
      description: "Expert guidance on fish farming techniques and aquaculture best practices.",
      image: fishSupplies
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-primary to-primary-dark">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Constiania Tradings
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in">
              Your one-stop partner for quality fisheries products and fish farming solutions in Gweru and beyond
            </p>
            <div className="space-x-4">
              <Button asChild size="lg" variant="secondary" className="animate-scale-in">
                <Link to="/products">
                  View Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary animate-scale-in">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Products & Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for successful fish farming and aquaculture operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Leading Aquaculture Solutions in Zimbabwe
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Based in Gweru, Constiania Tradings has been serving the aquaculture industry with dedication and expertise. 
                We provide comprehensive solutions for fish farming operations of all sizes.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Trophy className="h-5 w-5 text-gold mr-3" />
                  <span>Quality guaranteed products</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-gold mr-3" />
                  <span>Expert consultation services</span>
                </li>
                <li className="flex items-center">
                  <Fish className="h-5 w-5 text-gold mr-3" />
                  <span>Complete aquaculture solutions</span>
                </li>
              </ul>
              <Button asChild size="lg">
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Fish farming facility" 
                className="rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
