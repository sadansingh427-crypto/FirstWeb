import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FuturisticCardProps {
  imageUrl?: string;
  title: string;
  subtitle?: string;
  description?: string;
  variant?: 'default' | 'glow' | 'premium' | 'floating';
  className?: string;
  children?: React.ReactNode;
}

export const FuturisticCard: React.FC<FuturisticCardProps> = ({
  imageUrl,
  title,
  subtitle,
  description,
  variant = 'default',
  className,
  children
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'glow':
        return 'shadow-neon border-primary/30 hover:shadow-glow animate-glow';
      case 'premium':
        return 'bg-gradient-primary shadow-glass border-secondary/50 hover:scale-105';
      case 'floating':
        return 'animate-float shadow-glass border-accent/40 hover:shadow-neon';
      default:
        return 'shadow-glass border-primary/20 hover:border-primary/50 hover:shadow-neon';
    }
  };

  return (
    <Card className={cn(
      "relative overflow-hidden bg-gradient-glass backdrop-blur-md border-2 transition-all duration-500 group cursor-pointer",
      getVariantStyles(),
      className
    )}>
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      
      {/* Image Section */}
      {imageUrl && (
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 relative">
        {/* Title with Neon Effect */}
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-sm text-primary/80 mb-3 font-medium">
            {subtitle}
          </p>
        )}

        {/* Description */}
        {description && (
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>
        )}

        {/* Custom Children */}
        {children}

        {/* Animated Border */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-primary w-0 group-hover:w-full transition-all duration-500" />
      </div>

      {/* Corner Accents */}
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />
    </Card>
  );
};