import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pondConstruction1 from "@/assets/pond-construction-1.jpg";
import teamWork1 from "@/assets/team-work-1.jpg";
import fishFarmFacility from "@/assets/fish-farm-facility.jpg";
import linerInstallation from "@/assets/liner-installation.jpg";
import fishProducts from "@/assets/fish-products.jpg";
import constructionTeam from "@/assets/construction-team.jpg";
import equipmentSetup from "@/assets/equipment-setup.jpg";
import projectSuccess from "@/assets/project-success.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const galleryItems = [
    { id: 1, image: pondConstruction1, title: "Professional Pond Construction", category: "Construction", description: "Our expert team working on concrete pond installation" },
    { id: 2, image: linerInstallation, title: "Pond Liner Installation", category: "Construction", description: "Professional pond liner installation for fish farming" },
    { id: 3, image: teamWork1, title: "Expert Team Consultation", category: "Team", description: "Aquaculture experts providing professional guidance" },
    { id: 4, image: constructionTeam, title: "Construction Team at Work", category: "Team", description: "Professional construction team building quality ponds" },
    { id: 5, image: fishFarmFacility, title: "Modern Fish Farming Facility", category: "Facilities", description: "State-of-the-art aquaculture facility with multiple ponds" },
    { id: 6, image: fishProducts, title: "Quality Fish Supplies", category: "Products", description: "Premium fish feed and aquaculture supplies" },
    { id: 7, image: equipmentSetup, title: "Equipment Installation", category: "Equipment", description: "Professional installation of aquaculture equipment" },
    { id: 8, image: projectSuccess, title: "Successful Project Completion", category: "Projects", description: "Completed fish farming project with healthy stock" },
  ];

  const categories = ["All", "Team", "Construction", "Projects", "Products", "Facilities", "Equipment"];

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(345,60%,22%)] via-[hsl(345,55%,32%)] to-[hsl(345,45%,45%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold tracking-wide uppercase mb-6 border border-accent/30">
              Our Work
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Project Gallery
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Showcasing our successful projects, quality products, and satisfied customers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-cream border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-background text-muted-foreground hover:bg-secondary border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card className="group overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground flex-1">
                          {item.title}
                        </h3>
                        <Badge className="ml-2 bg-accent/15 text-accent border-0 text-xs">
                          {item.category}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-background rounded-2xl p-10 shadow-card border">
            <h3 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              More Photos Coming Soon
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We're constantly updating our gallery with new projects and success stories.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="px-5 py-2.5 text-sm rounded-xl">
                Facebook: Constiania Tradings
              </Badge>
              <Badge variant="outline" className="px-5 py-2.5 text-sm rounded-xl">
                WhatsApp: +263 773606044
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
