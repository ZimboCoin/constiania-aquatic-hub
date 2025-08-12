import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-fish-farm.jpg";
import fishSupplies from "@/assets/fish-supplies.jpg";
import pondConstruction from "@/assets/pond-construction.jpg";
import teamPond1 from "@/assets/team-pond-1.jpg";
import pondLiner from "@/assets/pond-liner.jpg";
import teamPond2 from "@/assets/team-pond-2.jpg";
import teamPond3 from "@/assets/team-pond-3.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Real gallery items from Constiania Tradings projects
  const galleryItems = [
    {
      id: 1,
      image: teamPond1,
      title: "Professional Team at Work",
      category: "Team",
      description: "Our expert team collaborating on pond construction project"
    },
    {
      id: 2,
      image: pondLiner,
      title: "Pond Liner Installation",
      category: "Construction",
      description: "Professional pond liner installation for fish farming"
    },
    {
      id: 3,
      image: teamPond2,
      title: "Project Implementation",
      category: "Projects",
      description: "Team working together on fish farming solution implementation"
    },
    {
      id: 4,
      image: teamPond3,
      title: "Construction Process",
      category: "Construction",
      description: "Professional pond construction team at work site"
    },
    {
      id: 5,
      image: pondConstruction,
      title: "Advanced Pond Construction",
      category: "Construction",
      description: "Professional installation of modern pond systems"
    },
    {
      id: 6,
      image: fishSupplies,
      title: "Quality Fish Supplies",
      category: "Products",
      description: "Premium fish feed and aquaculture supplies"
    },
    {
      id: 7,
      image: heroImage,
      title: "Fish Farming Excellence",
      category: "Facilities",
      description: "Modern fish farming facility with healthy stock"
    },
    {
      id: 8,
      image: pondConstruction,
      title: "Professional Installation",
      category: "Equipment",
      description: "Expert installation of pond equipment and systems"
    }
  ];

  const categories = ["All", "Team", "Construction", "Projects", "Products", "Facilities", "Equipment"];

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Project Gallery
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Showcasing our successful projects, quality products, and satisfied customers
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "bg-background text-foreground hover:bg-primary/10 border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                Gallery images will be added soon. Please check back later.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-primary flex-1">
                        {item.title}
                      </h3>
                      <Badge variant="secondary" className="ml-2">
                        {item.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Upload Notice */}
      <section className="py-12 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-primary/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              More Photos Coming Soon
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              We're constantly updating our gallery with new projects, products, and success stories. 
              Visit our social media pages for the latest updates and behind-the-scenes content.
            </p>
            <div className="flex justify-center space-x-4">
              <Badge variant="outline" className="px-4 py-2">
                Facebook: Constiania Tradings
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
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