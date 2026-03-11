import { Fish, Wrench, Droplets, Building, Users, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import fishSupplies from "@/assets/fish-supplies.jpg";
import pondConstruction from "@/assets/pond-construction.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
};

const Products = () => {
  const productCategories = [
    {
      icon: Fish, title: "Fish Feed & Fingerlings", description: "Premium quality fish feed and healthy fingerlings", image: fishSupplies,
      products: [
        { name: "Premium Fish Feed Pellets", description: "High-protein feed for optimal growth", badge: "Popular" },
        { name: "Tilapia Fingerlings", description: "Healthy tilapia fingerlings ready for stocking", badge: "In Stock" },
        { name: "Catfish Fingerlings", description: "Fast-growing catfish fingerlings", badge: "Limited" },
        { name: "Specialized Growth Feed", description: "Enhanced feed for rapid development", badge: "Premium" },
      ]
    },
    {
      icon: Wrench, title: "Equipment & Testing Kits", description: "Professional equipment for optimal pond conditions", image: pondConstruction,
      products: [
        { name: "Water Quality Testing Kits", description: "Complete pH, oxygen, and ammonia testing", badge: "Essential" },
        { name: "Aeration Systems", description: "High-efficiency pond aerators", badge: "Popular" },
        { name: "Water Pumps", description: "Reliable water circulation pumps", badge: "Durable" },
        { name: "Pond Thermometers", description: "Accurate temperature monitoring", badge: "Precise" },
      ]
    },
    {
      icon: Droplets, title: "Water Treatment", description: "Solutions for water quality and fish health", image: fishSupplies,
      products: [
        { name: "Water Conditioners", description: "Remove chlorine and harmful chemicals", badge: "Safe" },
        { name: "Beneficial Bacteria", description: "Maintain healthy pond ecosystem", badge: "Natural" },
        { name: "Algae Control", description: "Prevent excessive algae growth", badge: "Effective" },
        { name: "pH Adjusters", description: "Balance water pH levels", badge: "Balanced" },
      ]
    },
    {
      icon: Building, title: "Pond Construction", description: "Complete pond construction and installation", image: pondConstruction,
      products: [
        { name: "Concrete Pond Construction", description: "Durable concrete pond installation", badge: "Professional" },
        { name: "Liner Pond Setup", description: "Flexible pond liner systems", badge: "Flexible" },
        { name: "Drainage Systems", description: "Efficient pond drainage solutions", badge: "Reliable" },
        { name: "Filtration Systems", description: "Advanced water filtration setup", badge: "Advanced" },
      ]
    },
  ];

  const consultancyServices = [
    { title: "Farm Setup Consultation", description: "Complete guidance for setting up new fish farming operations" },
    { title: "Production Optimization", description: "Improve existing farm productivity and efficiency" },
    { title: "Disease Management", description: "Expert advice on fish health and disease prevention" },
    { title: "Market Strategy", description: "Guidance on marketing and selling fish products" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(345,60%,22%)] via-[hsl(345,55%,32%)] to-[hsl(345,45%,45%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold tracking-wide uppercase mb-6 border border-accent/30">
              What We Offer
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Products & Services
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Complete aquaculture solutions for successful fish farming operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {productCategories.map((category, ci) => (
            <motion.div key={ci} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-accent/15 w-14 h-14 rounded-xl flex items-center justify-center">
                  <category.icon className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>{category.title}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.products.map((product, pi) => (
                  <motion.div key={pi} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={pi + 1}>
                    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 h-full">
                      <div className="aspect-video overflow-hidden">
                        <img src={category.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-base flex-1">{product.name}</CardTitle>
                          <Badge className="ml-2 bg-accent/15 text-accent border-0 text-xs">{product.badge}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4 text-sm">{product.description}</CardDescription>
                        <Button variant="outline" size="sm" className="w-full rounded-lg">
                          <Phone className="h-4 w-4 mr-2" />
                          Get Quote
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Consultancy */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Expert Guidance</span>
            <div className="flex items-center justify-center gap-3 mt-3">
              <h2 className="text-4xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>Consultancy Services</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {consultancyServices.map((service, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                <Card className="p-6 border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                    <Button variant="outline" className="rounded-lg">Learn More</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(345,60%,22%)] via-[hsl(345,55%,32%)] to-[hsl(345,45%,45%)]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Start Your Fish Farming Journey?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Contact us today for personalized recommendations and competitive pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 rounded-xl text-base">
              <Phone className="h-5 w-5 mr-2" />
              Call: +263 773606044
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
