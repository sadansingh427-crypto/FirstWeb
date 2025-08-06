import React from 'react';
import { FuturisticCard } from './FuturisticCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Eye, Heart, Star } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  imageUrl?: string;
  category?: string;
  rating?: number;
  reviews?: number;
  isNew?: boolean;
  isSale?: boolean;
  variant?: 'default' | 'glow' | 'premium' | 'floating';
  onAddToCart?: () => void;
  onQuickView?: () => void;
  onWishlist?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  originalPrice,
  imageUrl,
  category,
  rating,
  reviews,
  isNew,
  isSale,
  variant = 'default',
  onAddToCart,
  onQuickView,
  onWishlist
}) => {
  return (
    <FuturisticCard
      imageUrl={imageUrl}
      title={name}
      subtitle={category}
      variant={variant}
      className="max-w-sm animate-slide-in"
    >
      {/* Badges */}
      <div className="flex gap-2 mb-3">
        {isNew && (
          <Badge className="bg-accent/20 text-accent border-accent/30">
            NEW
          </Badge>
        )}
        {isSale && (
          <Badge className="bg-destructive/20 text-destructive border-destructive/30">
            SALE
          </Badge>
        )}
      </div>

      {/* Rating */}
      {rating && (
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating 
                    ? 'text-accent fill-accent' 
                    : 'text-muted-foreground/30'
                }`}
              />
            ))}
          </div>
          {reviews && (
            <span className="text-sm text-muted-foreground">
              ({reviews} reviews)
            </span>
          )}
        </div>
      )}

      {/* Price */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold text-primary">
          {price}
        </span>
        {originalPrice && (
          <span className="text-lg text-muted-foreground line-through">
            {originalPrice}
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        {onQuickView && (
          <Button 
            variant="outline" 
            size="sm" 
            className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary"
            onClick={onQuickView}
          >
            <Eye className="w-4 h-4" />
          </Button>
        )}
        
        {onWishlist && (
          <Button 
            variant="outline" 
            size="sm" 
            className="border-secondary/30 text-secondary hover:bg-secondary/10 hover:border-secondary"
            onClick={onWishlist}
          >
            <Heart className="w-4 h-4" />
          </Button>
        )}
        
        {onAddToCart && (
          <Button 
            size="sm" 
            className="flex-1 bg-gradient-primary text-primary-foreground hover:opacity-90"
            onClick={onAddToCart}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        )}
      </div>
    </FuturisticCard>
  );
};