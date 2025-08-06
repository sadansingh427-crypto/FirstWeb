import React from 'react';
import { FuturisticCard } from './FuturisticCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Mail, MapPin, Star } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  role?: string;
  imageUrl?: string;
  email?: string;
  location?: string;
  rating?: number;
  skills?: string[];
  variant?: 'default' | 'glow' | 'premium' | 'floating';
  onContact?: () => void;
  onViewProfile?: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role = "Professional",
  imageUrl,
  email,
  location,
  rating,
  skills = [],
  variant = 'default',
  onContact,
  onViewProfile
}) => {
  return (
    <FuturisticCard
      imageUrl={imageUrl}
      title={name}
      subtitle={role}
      variant={variant}
      className="max-w-sm animate-slide-in"
    >
      {/* Contact Info */}
      <div className="space-y-2 mb-4">
        {email && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="w-4 h-4 text-primary" />
            <span>{email}</span>
          </div>
        )}
        
        {location && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-secondary" />
            <span>{location}</span>
          </div>
        )}

        {rating && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span>{rating}/5.0</span>
          </div>
        )}
      </div>

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {skills.slice(0, 3).map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="text-xs bg-secondary/20 text-secondary border-secondary/30 hover:bg-secondary/30"
              >
                {skill}
              </Badge>
            ))}
            {skills.length > 3 && (
              <Badge variant="outline" className="text-xs text-primary border-primary/30">
                +{skills.length - 3} more
              </Badge>
            )}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2">
        {onViewProfile && (
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary"
            onClick={onViewProfile}
          >
            <User className="w-4 h-4 mr-1" />
            View Profile
          </Button>
        )}
        
        {onContact && (
          <Button 
            size="sm" 
            className="flex-1 bg-gradient-primary text-primary-foreground hover:opacity-90"
            onClick={onContact}
          >
            <Mail className="w-4 h-4 mr-1" />
            Contact
          </Button>
        )}
      </div>
    </FuturisticCard>
  );
};