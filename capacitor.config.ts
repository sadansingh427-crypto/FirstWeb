import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.b6352a22469246d0b08f3c50aa967fcf',
  appName: 'hi-buddy-chat-tool',
  webDir: 'dist',
  server: {
    url: 'https://b6352a22-4692-46d0-b08f-3c50aa967fcf.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;