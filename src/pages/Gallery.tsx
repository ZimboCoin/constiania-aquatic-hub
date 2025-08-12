import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-fish-farm.jpg";
import fishSupplies from "@/assets/fish-supplies.jpg";
import pondConstruction from "@/assets/pond-construction.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Placeholder gallery items - you can replace with actual images
  const galleryItems = [
    {
      id: 1,
      image: heroImage,
      title: "Modern Fish Farming Facility",
      category: "Facilities",
      description: "State-of-the-art fish farming operation with advanced aeration systems"
    },
    {
      id: 2,
      image: fishSupplies,
      title: "Premium Fish Feed",
      category: "Products",
      description: "High-quality fish feed pellets for optimal growth"
    },
    {
      id: 3,
      image: pondConstruction,
      title: "Pond Construction Project",
      category: "Construction",
      description: "Professional pond construction with modern filtration systems"
    },
    {
      id: 4,
      image: heroImage,
      title: "Healthy Fish Stock",
      category: "Fish",
      description: "Thriving tilapia in our demonstration ponds"
    },
    {
      id: 5,
      image: pondConstruction,
      title: "Equipment Installation",
      category: "Equipment",
      description: "Professional installation of aeration and monitoring systems"
    },
    {
      id: 6,
      image: fishSupplies,
      title: "Water Testing Kits",
      category: "Products",
      description: "Comprehensive water quality testing equipment"
    },
    {
      id: 7,
      image: heroImage,
      title: "Commercial Fish Farm",
      category: "Facilities",
      description: "Large-scale commercial aquaculture operation"
    },
    {
      id: 8,
      image: pondConstruction,
      title: "Concrete Pond System",
      category: "Construction",
      description: "Durable concrete pond construction for long-term operations"
    }
  ];

  const categories = ["All", "Facilities", "Products", "Construction", "Equipment", "Fish"];

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
                WhatsApp: +263 123 456 789
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