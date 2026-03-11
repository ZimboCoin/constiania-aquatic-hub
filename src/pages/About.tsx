import { Award, Users, Target, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-fish-farm.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
};

const About = () => {
  const values = [
    { icon: Award, title: "Quality Excellence", description: "We maintain the highest standards in all our products and services." },
    { icon: Users, title: "Customer-Centric", description: "Our customers are at the heart of everything we do." },
    { icon: Target, title: "Innovation", description: "We continuously seek innovative solutions for aquaculture." },
    { icon: Heart, title: "Sustainability", description: "Committed to sustainable aquaculture practices." },
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
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              About Constiania Tradings
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Pioneering aquaculture solutions in Zimbabwe with dedication, expertise, and innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Journey</span>
              <h2 className="text-4xl font-bold text-primary mt-3 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Founded in Gweru, Zimbabwe, Constiania Tradings emerged from a passion for advancing aquaculture practices in our region.</p>
                <p>Over the years, we have grown from a small local supplier to a trusted partner for aquaculture operations across Zimbabwe.</p>
                <p>Today, we continue to expand our services and product offerings, always staying true to our core mission.</p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl -rotate-3" />
              <img src={heroImage} alt="Our fish farming facility" className="relative rounded-2xl shadow-elegant w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Our Mission", text: "To provide comprehensive, high-quality aquaculture solutions that empower fish farmers to achieve sustainable growth and profitability." },
              { title: "Our Vision", text: "To be the leading aquaculture solutions provider in Zimbabwe, recognized for our innovation, quality, and commitment." },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="p-8 border-0 shadow-card h-full">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-center leading-relaxed">{item.text}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Principles</span>
            <h2 className="text-4xl font-bold text-primary mt-3 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                <Card className="text-center border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 h-full">
                  <CardHeader>
                    <div className="mx-auto bg-accent/15 w-14 h-14 rounded-xl flex items-center justify-center mb-3">
                      <value.icon className="h-7 w-7 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(345,60%,22%)] via-[hsl(345,55%,32%)] to-[hsl(345,45%,45%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Commitment to Excellence
          </h2>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            At Constiania Tradings, we provide not just products, but complete solutions. Our team works closely with each customer to ensure success in their aquaculture ventures.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
