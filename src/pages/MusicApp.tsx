import React, { useState } from 'react';
import { MusicPlayer } from '@/components/MusicPlayer';
import { Playlist } from '@/components/Playlist';
import { MusicVisualizer } from '@/components/MusicVisualizer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Music, 
  ListMusic, 
  Radio, 
  TrendingUp, 
  Heart,
  Settings,
  Menu
} from 'lucide-react';

import { Link } from "react-router-dom"

export default function MusicApp() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('player');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90">
      
      <div className="fixed top-4 right-4 z-50">
        <Link to="/music">
          <Button className="bg-gradient-primary hover:opacity-90 shadow-lg">
            <Music className="w-4 h-4 mr-2" />
            2050 Card
          </Button>
        </Link>
      </div>
      
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-primary/10 backdrop-blur-xl bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Music className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">
                Future<span className="text-primary">Beats</span> 2050
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                Discover
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                Library
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                Radio
              </Button>
            </nav>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="md:hidden hover:bg-primary/10">
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          {/* Tab Navigation */}
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 bg-background/50 backdrop-blur-sm border border-primary/20">
            <TabsTrigger value="player" className="data-[state=active]:bg-primary/10">
              <Music className="w-4 h-4 mr-2" />
              Player
            </TabsTrigger>
            <TabsTrigger value="playlist" className="data-[state=active]:bg-primary/10">
              <ListMusic className="w-4 h-4 mr-2" />
              Queue
            </TabsTrigger>
            <TabsTrigger value="visualizer" className="data-[state=active]:bg-primary/10">
              <Radio className="w-4 h-4 mr-2" />
              Visual
            </TabsTrigger>
            <TabsTrigger value="trending" className="data-[state=active]:bg-primary/10">
              <TrendingUp className="w-4 h-4 mr-2" />
              Trends
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <div className="grid gap-6">
            <TabsContent value="player" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <MusicPlayer className="w-full" />
                </div>
                <div>
                  <MusicVisualizer 
                    isPlaying={isPlaying} 
                    className="w-full h-full"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="playlist" className="mt-0">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2">
                  <Playlist className="w-full" />
                </div>
                <div className="space-y-6">
                  <MusicPlayer className="w-full" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="visualizer" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <MusicVisualizer 
                  isPlaying={isPlaying} 
                  className="w-full h-96"
                />
                <MusicPlayer className="w-full" />
              </div>
            </TabsContent>

            <TabsContent value="trending" className="mt-0">
              <div className="text-center py-20">
                <TrendingUp className="w-16 h-16 mx-auto text-primary/50 mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Trending Coming Soon</h3>
                <p className="text-muted-foreground">
                  Discover the hottest tracks of 2050
                </p>
              </div>
            </TabsContent>
          </div>
        </Tabs>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Songs Played', value: '1,247', icon: Music },
            { label: 'Playlists', value: '23', icon: ListMusic },
            { label: 'Favorites', value: '156', icon: Heart },
            { label: 'Hours Listened', value: '847', icon: Radio }
          ].map((stat, index) => (
            <div
              key={index}
              className="relative p-4 rounded-xl bg-gradient-to-br from-background/80 via-background/40 to-background/20 backdrop-blur-xl border border-primary/20 text-center group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
              
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-primary/10 backdrop-blur-xl bg-background/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-muted-foreground">
            FutureBeats 2050 - The Future of Music is Here
          </div>
        </div>
      </footer>
    </div>
  );
}