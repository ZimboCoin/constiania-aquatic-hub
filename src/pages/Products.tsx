import { Fish, Wrench, Droplets, Building, Users, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import fishSupplies from "@/assets/fish-supplies.jpg";
import pondConstruction from "@/assets/pond-construction.jpg";

const Products = () => {
  const productCategories = [
    {
      icon: Fish,
      title: "Fish Feed & Fingerlings",
      description: "Premium quality fish feed and healthy fingerlings for all fish species",
      image: fishSupplies,
      products: [
        { name: "Premium Fish Feed Pellets", description: "High-protein feed for optimal growth", badge: "Popular" },
        { name: "Tilapia Fingerlings", description: "Healthy tilapia fingerlings ready for stocking", badge: "In Stock" },
        { name: "Catfish Fingerlings", description: "Fast-growing catfish fingerlings", badge: "Limited" },
        { name: "Specialized Growth Feed", description: "Enhanced feed for rapid development", badge: "Premium" }
      ]
    },
    {
      icon: Wrench,
      title: "Equipment & Testing Kits",
      description: "Professional equipment for maintaining optimal pond conditions",
      image: pondConstruction,
      products: [
        { name: "Water Quality Testing Kits", description: "Complete pH, oxygen, and ammonia testing", badge: "Essential" },
        { name: "Aeration Systems", description: "High-efficiency pond aerators", badge: "Popular" },
        { name: "Water Pumps", description: "Reliable water circulation pumps", badge: "Durable" },
        { name: "Pond Thermometers", description: "Accurate temperature monitoring", badge: "Precise" }
      ]
    },
    {
      icon: Droplets,
      title: "Water Treatment",
      description: "Solutions for maintaining water quality and fish health",
      image: fishSupplies,
      products: [
        { name: "Water Conditioners", description: "Remove chlorine and harmful chemicals", badge: "Safe" },
        { name: "Beneficial Bacteria", description: "Maintain healthy pond ecosystem", badge: "Natural" },
        { name: "Algae Control", description: "Prevent excessive algae growth", badge: "Effective" },
        { name: "pH Adjusters", description: "Balance water pH levels", badge: "Balanced" }
      ]
    },
    {
      icon: Building,
      title: "Pond Construction",
      description: "Complete pond construction and installation services",
      image: pondConstruction,
      products: [
        { name: "Concrete Pond Construction", description: "Durable concrete pond installation", badge: "Professional" },
        { name: "Liner Pond Setup", description: "Flexible pond liner systems", badge: "Flexible" },
        { name: "Drainage Systems", description: "Efficient pond drainage solutions", badge: "Reliable" },
        { name: "Filtration Systems", description: "Advanced water filtration setup", badge: "Advanced" }
      ]
    }
  ];

  const consultancyServices = [
    {
      title: "Farm Setup Consultation",
      description: "Complete guidance for setting up new fish farming operations"
    },
    {
      title: "Production Optimization",
      description: "Improve existing farm productivity and efficiency"
    },
    {
      title: "Disease Management",
      description: "Expert advice on fish health and disease prevention"
    },
    {
      title: "Market Strategy",
      description: "Guidance on marketing and selling fish products"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Products & Services
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Complete aquaculture solutions for successful fish farming operations
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {productCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                      <category.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-3xl font-bold text-primary">{category.title}</h2>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.products.map((product, productIndex) => (
                    <Card key={productIndex} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                          <img 
                            src={category.image} 
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg flex-1">{product.name}</CardTitle>
                          <Badge variant="secondary" className="ml-2">{product.badge}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4">
                          {product.description}
                        </CardDescription>
                        <Button variant="outline" size="sm" className="w-full">
                          <Phone className="h-4 w-4 mr-2" />
                          Get Quote
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultancy Services */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-12 w-12 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Consultancy Services</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert guidance and support for all aspects of fish farming
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultancyServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg mb-4">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Fish Farming Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today for personalized recommendations and competitive pricing on all our products and services.
          </p>
          <div className="space-x-4">
            <Button variant="secondary" size="lg">
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Request Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;