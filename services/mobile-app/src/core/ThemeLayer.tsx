import { createTheme, MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';
import '@mantine/core/styles.css';

interface ThemeLayerProps {
  children: ReactNode;
}


const theme = createTheme({
  primaryColor: 'blue',
  fontFamily: 'Heebo, sans-serif',
  colors: {
    
  },
});

const ThemeLayer = ({ children }: ThemeLayerProps) => {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  );
};

export default ThemeLayer;
