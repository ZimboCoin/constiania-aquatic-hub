import { ArrowRight, Fish, Wrench, Users, Trophy, Waves, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-fish-farm.jpg";
import fishSupplies from "@/assets/fish-supplies.jpg";
import pondConstruction from "@/assets/pond-construction.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  })
};

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
      title: "Equipment & Testing",
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
      title: "Consultancy",
      description: "Expert guidance on fish farming techniques and aquaculture best practices.",
      image: fishSupplies
    }
  ];

  const stats = [
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Fish farming facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(345,60%,22%)/0.92] via-[hsl(345,55%,32%)/0.8] to-[hsl(345,45%,45%)/0.6]" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 opacity-10">
          <Waves className="w-64 h-64 text-primary-foreground" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm border border-accent/30">
                Gweru's Premier Aquaculture Partner
              </span>
            </motion.div>
            
            <motion.h1
              initial="hidden" animate="visible" variants={fadeUp} custom={1}
              className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Constiania<br />
              <span className="text-gradient">Tradings</span>
            </motion.h1>
            
            <motion.p
              initial="hidden" animate="visible" variants={fadeUp} custom={2}
              className="text-xl md:text-2xl text-primary-foreground/80 mb-10 leading-relaxed max-w-2xl"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Your one-stop partner for quality fisheries products and fish farming solutions in Gweru and beyond
            </motion.p>
            
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6 rounded-xl shadow-lg">
                <Link to="/products">
                  View Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6 rounded-xl backdrop-blur-sm">
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-border">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="py-6 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Products & Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for successful fish farming and aquaculture operations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={index + 1}
              >
                <Card className="group overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardHeader className="text-center pb-2">
                    <div className="mx-auto bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-3 -mt-10 relative z-10 border-4 border-card shadow-md group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={0}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Leading Aquaculture Solutions in Zimbabwe
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Based in Gweru, Constiania Tradings has been serving the aquaculture industry with dedication and expertise. 
                We provide comprehensive solutions for fish farming operations of all sizes.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { icon: Trophy, text: "Quality guaranteed products" },
                  { icon: Users, text: "Expert consultation services" },
                  { icon: Fish, text: "Complete aquaculture solutions" },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    variants={fadeUp} custom={i + 1}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
              <Button asChild size="lg" className="rounded-xl px-8">
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={2}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl -rotate-3" />
              <img 
                src={heroImage} 
                alt="Fish farming facility" 
                className="relative rounded-2xl shadow-elegant w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>5+</div>
                <div className="text-sm text-primary-foreground/80">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(345,60%,22%)] via-[hsl(345,55%,32%)] to-[hsl(345,45%,45%)]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Start Your Fish Farming Journey?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Contact us today for personalized recommendations and competitive pricing on all our products and services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6 rounded-xl">
                <Link to="/contact">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6 rounded-xl">
                <Link to="/gallery">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
