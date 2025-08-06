import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Shuffle, 
  Repeat,
  Music,
  Heart,
  MoreVertical
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  coverUrl?: string;
  audioUrl?: string;
}

interface MusicPlayerProps {
  className?: string;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ className }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const [currentTrack, setCurrentTrack] = useState<Track>({
    id: '1',
    title: 'Neon Dreams',
    artist: 'CyberSynth',
    album: 'Future Sounds 2050',
    duration: '3:45',
    coverUrl: '/placeholder.svg'
  });

  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <Card className={cn(
      "relative overflow-hidden bg-gradient-to-br from-background/80 via-background/40 to-background/20",
      "backdrop-blur-xl border border-primary/20 shadow-2xl",
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:via-secondary/5 before:to-accent/5",
      "after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_30%_40%,rgba(var(--primary),0.1),transparent_70%)]",
      className
    )}>
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 p-6">
        {/* Track Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative group">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center overflow-hidden">
              {currentTrack.coverUrl ? (
                <img 
                  src={currentTrack.coverUrl} 
                  alt={currentTrack.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Music className="w-8 h-8 text-primary" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl opacity-0 group-hover:opacity-20 transition-opacity blur-sm" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground truncate">{currentTrack.title}</h3>
            <p className="text-sm text-muted-foreground truncate">{currentTrack.artist}</p>
            <p className="text-xs text-muted-foreground/70 truncate">{currentTrack.album}</p>
          </div>

          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-primary/10">
              <Heart className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-primary/10">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2 mb-6">
          <Slider
            value={[currentTime]}
            max={duration || 100}
            step={1}
            className="w-full"
            onValueChange={(value) => setCurrentTime(value[0])}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{formatTime(currentTime)}</span>
            <span>{currentTrack.duration}</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary"
          >
            <Shuffle className="w-5 h-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary"
          >
            <SkipBack className="w-5 h-5" />
          </Button>
          
          <Button 
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-gradient-primary hover:opacity-90 shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-primary-foreground" />
            ) : (
              <Play className="w-6 h-6 text-primary-foreground ml-1" />
            )}
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary"
          >
            <SkipForward className="w-5 h-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary"
          >
            <Repeat className="w-5 h-5" />
          </Button>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-3">
          <Volume2 className="w-4 h-4 text-muted-foreground" />
          <Slider
            value={[volume]}
            max={100}
            step={1}
            className="flex-1"
            onValueChange={(value) => setVolume(value[0])}
          />
          <span className="text-xs text-muted-foreground w-8 text-right">{volume}</span>
        </div>

        {/* Visualizer Effect */}
        <div className="flex justify-center gap-1 mt-6 h-12 items-end">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-1 bg-gradient-to-t from-primary via-secondary to-accent rounded-full transition-all duration-300",
                isPlaying ? "animate-pulse" : "opacity-30"
              )}
              style={{
                height: isPlaying ? `${Math.random() * 100 + 20}%` : '20%',
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${0.5 + Math.random() * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
    </Card>
  );
};