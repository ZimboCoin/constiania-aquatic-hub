import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  })
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: Phone, title: "Phone", details: ["+263 773606044"], description: "Call us during business hours" },
    { icon: Mail, title: "Email", details: ["info@constianiatradings.co.zw"], description: "Send us an email anytime" },
    { icon: MapPin, title: "Location", details: ["Gweru, Zimbabwe"], description: "Visit our office" },
    { icon: Clock, title: "Hours", details: ["Mon-Fri: 8AM-5PM", "Sat: 8AM-1PM"], description: "When we're available" },
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
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Get in touch with our aquaculture experts for personalized solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="text-center border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 h-full">
                  <CardHeader>
                    <div className="mx-auto bg-accent/15 w-14 h-14 rounded-xl flex items-center justify-center mb-3">
                      <info.icon className="h-7 w-7 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                    <CardDescription>{info.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((d, di) => (
                      <p key={di} className="text-foreground font-medium text-sm">{d}</p>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <Card className="p-8 border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>Send us a Message</CardTitle>
                  <CardDescription>We'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Your full name" className="rounded-lg" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="Your phone number" className="rounded-lg" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" className="rounded-lg" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" name="subject" required value={formData.subject} onChange={handleInputChange} placeholder="What is this regarding?" className="rounded-lg" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" name="message" required value={formData.message} onChange={handleInputChange} placeholder="Tell us about your needs..." rows={5} className="rounded-lg" />
                    </div>
                    <Button type="submit" size="lg" className="w-full rounded-xl bg-accent text-accent-foreground hover:bg-accent/90">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <Card className="p-8 border-0 shadow-card h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>Visit Our Location</CardTitle>
                  <CardDescription>Find us in Gweru, Zimbabwe.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-cream rounded-xl flex items-center justify-center mb-6">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <p className="text-lg font-medium text-primary">Gweru, Zimbabwe</p>
                      <p className="text-muted-foreground text-sm">Interactive map coming soon</p>
                    </div>
                  </div>
                  <div className="bg-cream p-5 rounded-xl mb-4">
                    <h4 className="font-semibold text-primary mb-2">Directions</h4>
                    <p className="text-muted-foreground text-sm">Located in the heart of Gweru. Detailed directions provided upon booking.</p>
                  </div>
                  <Button variant="outline" className="w-full rounded-xl">
                    <Phone className="h-4 w-4 mr-2" />
                    Call: +263 773606044
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(345,60%,22%)] via-[hsl(345,55%,32%)] to-[hsl(345,45%,45%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Need Immediate Assistance?
          </h3>
          <p className="text-primary-foreground/80 mb-8">For urgent inquiries, contact us directly.</p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 rounded-xl text-base">
            <Phone className="h-5 w-5 mr-2" />
            Call: +263 773606044
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
