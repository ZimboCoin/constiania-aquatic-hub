import { Award, Users, Target, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-fish-farm.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in all our products and services, ensuring customer satisfaction and optimal results."
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Our customers are at the heart of everything we do. We provide personalized solutions and ongoing support."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously seek innovative solutions and technologies to advance the aquaculture industry in Zimbabwe."
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "We are committed to sustainable aquaculture practices that benefit both our customers and the environment."
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
              About Constiania Tradings
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Pioneering aquaculture solutions in Zimbabwe with dedication, expertise, and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in Gweru, Zimbabwe, Constiania Tradings emerged from a passion for advancing 
                  aquaculture practices in our region. Our journey began with a simple vision: to provide 
                  local fish farmers with access to high-quality products and expert knowledge.
                </p>
                <p>
                  Over the years, we have grown from a small local supplier to a trusted partner for 
                  aquaculture operations across Zimbabwe. Our commitment to excellence and customer 
                  satisfaction has made us a leader in the fisheries and fish farming industry.
                </p>
                <p>
                  Today, we continue to expand our services and product offerings, always staying 
                  true to our core mission of supporting sustainable aquaculture development 
                  throughout the region.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Our fish farming facility" 
                className="rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-center leading-relaxed">
                  To provide comprehensive, high-quality aquaculture solutions that empower fish farmers 
                  to achieve sustainable growth and profitability while contributing to food security 
                  in Zimbabwe.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-center leading-relaxed">
                  To be the leading aquaculture solutions provider in Zimbabwe, recognized for our 
                  innovation, quality, and commitment to advancing sustainable fish farming practices 
                  across the region.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and relationships with customers and partners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
              At Constiania Tradings, we are committed to providing not just products, but complete solutions. 
              Our team of experts works closely with each customer to understand their unique needs and provide 
              tailored recommendations that ensure success in their aquaculture ventures.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;