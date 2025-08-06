import React from 'react';
import { ProfileCard } from '@/components/ProfileCard';
import { ProductCard } from '@/components/ProductCard';
import { ProjectCard } from '@/components/ProjectCard';
import { FuturisticCard } from '@/components/FuturisticCard';
import { Button } from '@/components/ui/button';
import { Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Sample data for cards
  const sampleProfiles = [
    {
      name: "Alex Johnson",
      role: "Frontend Developer",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      email: "alex@example.com",
      location: "San Francisco, CA",
      rating: 4.8,
      skills: ["React", "TypeScript", "Node.js", "Python", "GraphQL"]
    },
    {
      name: "Sarah Chen",
      role: "UI/UX Designer",
      imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b9c906f4?w=400&h=400&fit=crop&crop=face",
      email: "sarah@example.com",
      location: "New York, NY", 
      rating: 4.9,
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"]
    }
  ];

  const sampleProducts = [
    {
      name: "Quantum Headphones",
      price: "$299",
      originalPrice: "$399",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      category: "Electronics",
      rating: 5,
      reviews: 128,
      isNew: true,
      isSale: true
    },
    {
      name: "Neural Watch Pro",
      price: "$599", 
      imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      category: "Wearables",
      rating: 4,
      reviews: 89,
      isNew: true
    }
  ];

  const sampleProjects = [
    {
      title: "AI Dashboard",
      description: "Modern dashboard with real-time analytics and machine learning insights for business intelligence.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      technologies: ["React", "Python", "TensorFlow", "PostgreSQL"],
      status: "completed" as const,
      teamSize: 4,
      duration: "3 months",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Crypto Trading Bot",
      description: "Automated trading system with advanced algorithms and risk management for cryptocurrency markets.",
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
      technologies: ["Node.js", "WebSocket", "Redis", "Docker"],
      status: "in-progress" as const,
      teamSize: 2,
      duration: "2 months"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Quick Access to Music Player */}
      <div className="fixed top-4 right-4 z-50">
        <Link to="/">
          <Button className="bg-gradient-primary hover:opacity-90 shadow-lg">
            <Music className="w-4 h-4 mr-2" />
            2050 Music Player
          </Button>
        </Link>
      </div>
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 animate-slide-in">
          Futuristic Cards 2050
        </h1>
        <p className="text-xl text-muted-foreground animate-slide-in">
          Modern, glassmorphic cards with neon effects and animations
        </p>
        <div className="flex gap-4 justify-center mt-6">
          <Button variant="neon" className="animate-glow">
            Get Started
          </Button>
          <Button variant="glass">
            Learn More
          </Button>
        </div>
      </div>

      {/* Profile Cards Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          Profile Cards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {sampleProfiles.map((profile, index) => (
            <ProfileCard
              key={index}
              {...profile}
              variant={index % 2 === 0 ? "glow" : "floating"}
              onContact={() => console.log(`Contact ${profile.name}`)}
              onViewProfile={() => console.log(`View ${profile.name}'s profile`)}
            />
          ))}
          
          {/* Custom Profile Card */}
          <FuturisticCard
            title="Add Your Photo"
            subtitle="Upload your image"
            variant="premium"
            className="max-w-sm"
          >
            <div className="w-full h-32 border-2 border-dashed border-primary/30 rounded-lg flex items-center justify-center mb-4 hover:border-primary/60 transition-colors cursor-pointer">
              <span className="text-muted-foreground">Click to upload image</span>
            </div>
            <Button variant="outline" className="w-full">
              Upload Photo
            </Button>
          </FuturisticCard>
        </div>
      </section>

      {/* Product Cards Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          Product Cards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {sampleProducts.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              variant={index % 2 === 0 ? "premium" : "glow"}
              onAddToCart={() => console.log(`Add ${product.name} to cart`)}
              onQuickView={() => console.log(`Quick view ${product.name}`)}
              onWishlist={() => console.log(`Add ${product.name} to wishlist`)}
            />
          ))}
        </div>
      </section>

      {/* Project Cards Section */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          Project Cards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {sampleProjects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              variant={index % 2 === 0 ? "floating" : "premium"}
              onViewProject={() => console.log(`View ${project.title} details`)}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-16 py-8 border-t border-primary/20">
        <p className="text-muted-foreground">
          Built with React, TypeScript, and Tailwind CSS ✨
        </p>
      </footer>
    </div>
  );
};

export default Index;
