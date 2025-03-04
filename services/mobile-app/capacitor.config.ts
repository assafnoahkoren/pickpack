import type { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize, KeyboardStyle } from '@capacitor/keyboard';

const config: CapacitorConfig = {
  appId: 'io.pickpack.app',
  appName: 'PickPack',
  webDir: 'dist',
  server: {
    url: ' http://10.0.0.7:5173',
    cleartext: true
  },
  plugins: {
    Keyboard: {
      resize: KeyboardResize.Body,
      resizeOnFullScreen: true,
    },
    StatusBar: {
      overlaysWebView: true,
      style: 'LIGHT'
    }
  }
};

export default config;
