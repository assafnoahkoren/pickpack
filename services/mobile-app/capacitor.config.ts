import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.pickpack.app',
  appName: 'PickPack',
  webDir: 'dist',
  server: {
    url: ' http://10.0.0.7:5173',
    cleartext: true
  }
};

export default config;
