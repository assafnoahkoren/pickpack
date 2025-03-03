import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';

// Theme colors - you can customize these
const BACKGROUND_COLOR = '#ffffff'; // Example: Google Blue
const TEXT_STYLE = Style.Light; // Light text for dark backgrounds

/**
 * Initializes the status bar with custom styling
 */
export const initializeStatusBar = async (): Promise<void> => {
  if (Capacitor.isNativePlatform()) {
    try {
      // Set the background color
      await StatusBar.setBackgroundColor({ color: BACKGROUND_COLOR });
      
      // Set text color style (Light or Dark)
      await StatusBar.setStyle({ style: TEXT_STYLE });
      
      // Optional: You can make the status bar translucent
      // await StatusBar.setOverlaysWebView({ overlay: true });
      
      console.log('Status bar configured successfully');
    } catch (error) {
      console.error('Error configuring status bar:', error);
    }
  }
};

/**
 * Shows the status bar
 */
export const showStatusBar = async (): Promise<void> => {
  if (Capacitor.isNativePlatform()) {
    await StatusBar.show();
  }
};

/**
 * Hides the status bar
 */
export const hideStatusBar = async (): Promise<void> => {
  if (Capacitor.isNativePlatform()) {
    await StatusBar.hide();
  }
}; 