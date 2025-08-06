import React, { useState } from 'react';
import { FuturisticCard } from './FuturisticCard';
import { ProfileCard } from './ProfileCard';
import { ProductCard } from './ProductCard';
import { ProjectCard } from './ProjectCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, Camera } from 'lucide-react';

export const CardShowcase: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 animate-slide-in">
          Futuristic Cards 2050
        </h1>
        <p className="text-2xl text-muted-foreground mb-8 animate-slide-in">
          Glassmorphic design with neon effects, animations & modern aesthetics
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="neon" size="lg" className="animate-glow">
            <Camera className="w-5 h-5 mr-2" />
            Get Started
          </Button>
          <Button variant="glass" size="lg">
            Documentation
          </Button>
        </div>
      </div>

      {/* Image Upload Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Upload Your Image
          </h2>
          <p className="text-lg text-muted-foreground">
            Add your own photos to see them in futuristic cards
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Upload Area */}
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-primary/30 rounded-xl bg-gradient-glass backdrop-blur-md hover:border-primary/60 transition-all duration-300 cursor-pointer group"
            >
              <Upload className="w-12 h-12 text-primary/60 group-hover:text-primary mb-4" />
              <span className="text-lg text-muted-foreground group-hover:text-foreground">
                Click to upload your image
              </span>
              <span className="text-sm text-muted-foreground mt-2">
                PNG, JPG, WEBP up to 10MB
              </span>
            </label>
          </div>

          {/* Preview Card */}
          <ProfileCard
            name="Your Name"
            role="Your Role"
            imageUrl={uploadedImage || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"}
            email="your@email.com"
            location="Your Location"
            rating={5}
            skills={["Skill 1", "Skill 2", "Skill 3"]}
            variant="premium"
            onContact={() => console.log('Contact clicked')}
            onViewProfile={() => console.log('View profile clicked')}
          />
        </div>
      </section>

      {/* Card Variants Showcase */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Card Variants
          </h2>
          <p className="text-lg text-muted-foreground">
            Different styles for different purposes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FuturisticCard
            title="Default Card"
            subtitle="Standard variant"
            description="Clean and professional look with subtle animations."
            variant="default"
          />
          
          <FuturisticCard
            title="Glow Card"
            subtitle="Neon variant"
            description="Bright neon effects with pulsing animations."
            variant="glow"
          />
          
          <FuturisticCard
            title="Premium Card"
            subtitle="Gradient variant"
            description="Rich gradients with premium glass effects."
            variant="premium"
          />
          
          <FuturisticCard
            title="Floating Card"
            subtitle="Animated variant"
            description="Smooth floating animation with hover effects."
            variant="floating"
          />
        </div>
      </section>

      {/* Examples Gallery */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Example Cards
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready-to-use card templates for various use cases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Profile Examples */}
          <ProfileCard
            name="John Doe"
            role="Full Stack Developer"
            imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
            email="john@example.com"
            location="London, UK"
            rating={4.9}
            skills={["React", "Node.js", "Python", "AWS"]}
            variant="glow"
          />

          {/* Product Examples */}
          <ProductCard
            name="Holographic Display"
            price="$1,299"
            originalPrice="$1,599"
            imageUrl="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&h=300&fit=crop"
            category="Technology"
            rating={5}
            reviews={256}
            isNew={true}
            variant="premium"
          />

          {/* Project Examples */}
          <ProjectCard
            title="Space Station UI"
            description="Next-generation interface for space exploration vehicles with AI integration."
            imageUrl="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop"
            technologies={["React", "Three.js", "WebGL", "AI"]}
            status="completed"
            teamSize={6}
            duration="8 months"
            variant="floating"
          />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FuturisticCard
            title="🎨 Glassmorphism"
            description="Modern glass-like effects with backdrop blur and transparency."
            variant="default"
          />
          
          <FuturisticCard
            title="⚡ Neon Effects"
            description="Vibrant neon glows and shadows for futuristic aesthetics."
            variant="glow"
          />
          
          <FuturisticCard
            title="🌈 Gradients"
            description="Beautiful color gradients that capture the 2050 vibe."
            variant="premium"
          />
          
          <FuturisticCard
            title="🔄 Animations"
            description="Smooth transitions, hover effects, and floating animations."
            variant="floating"
          />
          
          <FuturisticCard
            title="📱 Responsive"
            description="Perfect display on all devices from mobile to desktop."
            variant="default"
          />
          
          <FuturisticCard
            title="🎯 TypeScript"
            description="Fully typed components for better development experience."
            variant="premium"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 border-t border-primary/20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Use These Cards?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Copy the components and start building your futuristic UI today!
          </p>
          <Button variant="neon" size="lg" className="animate-glow">
            Download Components
          </Button>
        </div>
      </footer>
    </div>
  );
};