import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MusicVisualizerProps {
  isPlaying?: boolean;
  className?: string;
}

export const MusicVisualizer: React.FC<MusicVisualizerProps> = ({ 
  isPlaying = false, 
  className 
}) => {
  const [audioData, setAudioData] = useState<number[]>(Array(64).fill(0));

  useEffect(() => {
    if (!isPlaying) {
      setAudioData(Array(64).fill(0));
      return;
    }

    const interval = setInterval(() => {
      const newData = Array.from({ length: 64 }, () => Math.random() * 100);
      setAudioData(newData);
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <Card className={cn(
      "relative overflow-hidden bg-gradient-to-br from-background/80 via-background/40 to-background/20",
      "backdrop-blur-xl border border-primary/20 shadow-2xl",
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:via-secondary/5 before:to-accent/5",
      className
    )}>
      {/* Radial Visualizer */}
      <div className="relative p-8 h-80 flex items-center justify-center">
        <div className="relative w-60 h-60">
          {/* Center Circle */}
          <div className={cn(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            "w-16 h-16 rounded-full bg-gradient-to-r from-primary via-secondary to-accent",
            "shadow-lg transition-all duration-300",
            isPlaying && "shadow-primary/50 animate-pulse"
          )} />
          
          {/* Audio Bars in Circle */}
          {audioData.map((height, index) => {
            const angle = (index / audioData.length) * 360;
            const normalizedHeight = isPlaying ? Math.max(height, 10) : 5;
            
            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 origin-bottom"
                style={{
                  transform: `translate(-50%, -100%) rotate(${angle}deg)`,
                  transformOrigin: '50% 120px'
                }}
              >
                <div
                  className={cn(
                    "w-1 bg-gradient-to-t transition-all duration-100 ease-out rounded-full",
                    index % 4 === 0 && "from-primary to-primary/50",
                    index % 4 === 1 && "from-secondary to-secondary/50", 
                    index % 4 === 2 && "from-accent to-accent/50",
                    index % 4 === 3 && "from-primary to-secondary"
                  )}
                  style={{
                    height: `${normalizedHeight}px`,
                    opacity: isPlaying ? 0.8 : 0.3
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Orbital Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute border rounded-full transition-all duration-1000",
                isPlaying ? "border-primary/30" : "border-primary/10",
                isPlaying && "animate-spin"
              )}
              style={{
                width: `${140 + i * 40}px`,
                height: `${140 + i * 40}px`,
                animationDuration: `${10 + i * 5}s`,
                animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom Wave Visualizer */}
      <div className="absolute bottom-0 left-0 right-0 h-20 flex items-end justify-center gap-1 px-4 pb-4">
        {Array.from({ length: 40 }).map((_, index) => {
          const height = isPlaying ? Math.random() * 60 + 10 : 5;
          return (
            <div
              key={index}
              className={cn(
                "w-1 bg-gradient-to-t rounded-full transition-all duration-200",
                index % 3 === 0 && "from-primary/60 to-primary",
                index % 3 === 1 && "from-secondary/60 to-secondary",
                index % 3 === 2 && "from-accent/60 to-accent"
              )}
              style={{
                height: `${height}px`,
                animationDelay: `${index * 50}ms`
              }}
            />
          );
        })}
      </div>

      {/* Particle Effects */}
      {isPlaying && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Glow Effect */}
      <div className={cn(
        "absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-lg blur-xl transition-opacity",
        isPlaying ? "opacity-50" : "opacity-0"
      )} />
    </Card>
  );
};