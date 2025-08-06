import React from 'react';
import { FuturisticCard } from './FuturisticCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Calendar, Users } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  technologies?: string[];
  status?: 'completed' | 'in-progress' | 'planned';
  teamSize?: number;
  duration?: string;
  variant?: 'default' | 'glow' | 'premium' | 'floating';
  onViewProject?: () => void;
  onViewCode?: () => void;
  githubUrl?: string;
  liveUrl?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  technologies = [],
  status = 'completed',
  teamSize,
  duration,
  variant = 'default',
  onViewProject,
  onViewCode,
  githubUrl,
  liveUrl
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'in-progress':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'planned':
        return 'bg-secondary/20 text-secondary border-secondary/30';
      default:
        return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  return (
    <FuturisticCard
      imageUrl={imageUrl}
      title={title}
      description={description}
      variant={variant}
      className="max-w-sm animate-slide-in"
    >
      {/* Status Badge */}
      <div className="mb-3">
        <Badge className={getStatusColor()}>
          {status.replace('-', ' ').toUpperCase()}
        </Badge>
      </div>

      {/* Project Info */}
      <div className="space-y-2 mb-4">
        {duration && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{duration}</span>
          </div>
        )}
        
        {teamSize && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4 text-secondary" />
            <span>{teamSize} team member{teamSize > 1 ? 's' : ''}</span>
          </div>
        )}
      </div>

      {/* Technologies */}
      {technologies.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {technologies.slice(0, 3).map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline"
                className="text-xs bg-accent/10 text-accent border-accent/30 hover:bg-accent/20"
              >
                {tech}
              </Badge>
            ))}
            {technologies.length > 3 && (
              <Badge variant="outline" className="text-xs text-primary border-primary/30">
                +{technologies.length - 3}
              </Badge>
            )}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2">
        {githubUrl && (
          <Button 
            variant="outline" 
            size="sm" 
            className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary"
            onClick={() => window.open(githubUrl, '_blank')}
          >
            <Github className="w-4 h-4" />
          </Button>
        )}
        
        {liveUrl && (
          <Button 
            variant="outline" 
            size="sm" 
            className="border-secondary/30 text-secondary hover:bg-secondary/10 hover:border-secondary"
            onClick={() => window.open(liveUrl, '_blank')}
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        )}
        
        {onViewProject && (
          <Button 
            size="sm" 
            className="flex-1 bg-gradient-primary text-primary-foreground hover:opacity-90"
            onClick={onViewProject}
          >
            View Details
          </Button>
        )}
      </div>
    </FuturisticCard>
  );
};