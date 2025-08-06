import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Music, 
  Play, 
  Pause, 
  Heart, 
  MoreVertical,
  Clock,
  Search,
  Plus
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  coverUrl?: string;
  isLiked?: boolean;
}

interface PlaylistProps {
  className?: string;
}

export const Playlist: React.FC<PlaylistProps> = ({ className }) => {
  const [currentTrack, setCurrentTrack] = useState<string>('1');
  const [isPlaying, setIsPlaying] = useState(false);

  const tracks: Track[] = [
    {
      id: '1',
      title: 'Neon Dreams',
      artist: 'CyberSynth',
      album: 'Future Sounds 2050',
      duration: '3:45',
      isLiked: true
    },
    {
      id: '2',
      title: 'Digital Horizon',
      artist: 'VirtualBeats',
      album: 'Quantum Vibes',
      duration: '4:12',
      isLiked: false
    },
    {
      id: '3',
      title: 'Holographic Love',
      artist: 'ChromaWave',
      album: 'Synthetic Emotions',
      duration: '3:28',
      isLiked: true
    },
    {
      id: '4',
      title: 'Binary Sunset',
      artist: 'DataStream',
      album: 'Code Symphony',
      duration: '5:03',
      isLiked: false
    },
    {
      id: '5',
      title: 'Cyberpunk Rain',
      artist: 'NeonPulse',
      album: 'Electric Dreams',
      duration: '3:56',
      isLiked: true
    },
    {
      id: '6',
      title: 'Quantum Entanglement',
      artist: 'WaveFunction',
      album: 'Particle Dance',
      duration: '4:31',
      isLiked: false
    }
  ];

  const togglePlay = (trackId: string) => {
    if (currentTrack === trackId) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(trackId);
      setIsPlaying(true);
    }
  };

  const toggleLike = (trackId: string) => {
    // Toggle like functionality
  };

  return (
    <Card className={cn(
      "relative overflow-hidden bg-gradient-to-br from-background/80 via-background/40 to-background/20",
      "backdrop-blur-xl border border-primary/20 shadow-2xl",
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:via-secondary/5 before:to-accent/5",
      className
    )}>
      {/* Header */}
      <div className="p-6 border-b border-primary/10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">Now Playing</h2>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="hover:bg-primary/10">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-primary/10">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{tracks.length} songs</span>
          <span>•</span>
          <span>24 min</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Heart className="w-3 h-3 fill-current text-primary" />
            {tracks.filter(t => t.isLiked).length} liked
          </span>
        </div>
      </div>

      {/* Track List */}
      <ScrollArea className="h-96">
        <div className="p-2">
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className={cn(
                "group flex items-center gap-4 p-3 rounded-lg transition-all duration-200",
                "hover:bg-primary/5 hover:backdrop-blur-sm",
                currentTrack === track.id && "bg-primary/10 shadow-lg"
              )}
            >
              {/* Track Number / Play Button */}
              <div className="w-8 h-8 flex items-center justify-center relative">
                <span className={cn(
                  "text-sm text-muted-foreground group-hover:opacity-0 transition-opacity",
                  currentTrack === track.id && "opacity-0"
                )}>
                  {index + 1}
                </span>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "absolute inset-0 w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity",
                    "hover:bg-primary/10 hover:text-primary",
                    currentTrack === track.id && "opacity-100"
                  )}
                  onClick={() => togglePlay(track.id)}
                >
                  {currentTrack === track.id && isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </Button>
              </div>

              {/* Album Art */}
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center overflow-hidden">
                {track.coverUrl ? (
                  <img 
                    src={track.coverUrl} 
                    alt={track.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Music className="w-5 h-5 text-primary" />
                )}
              </div>

              {/* Track Info */}
              <div className="flex-1 min-w-0">
                <h4 className={cn(
                  "font-medium truncate transition-colors",
                  currentTrack === track.id ? "text-primary" : "text-foreground"
                )}>
                  {track.title}
                </h4>
                <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
              </div>

              {/* Album */}
              <div className="hidden md:block min-w-0 flex-1">
                <p className="text-sm text-muted-foreground truncate">{track.album}</p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-8 h-8 p-0 hover:bg-primary/10"
                  onClick={() => toggleLike(track.id)}
                >
                  <Heart className={cn(
                    "w-4 h-4 transition-colors",
                    track.isLiked ? "fill-primary text-primary" : "text-muted-foreground"
                  )} />
                </Button>
                
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-primary/10">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>{track.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </Card>
  );
};