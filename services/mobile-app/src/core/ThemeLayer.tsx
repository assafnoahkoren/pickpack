import { createTheme, MantineProvider, DirectionProvider } from '@mantine/core';
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
  defaultRadius: 'md',
  radius: {
    md: '12px',
  },
  
  components: {
	Button: {
		defaultProps: {
			radius: 'xl',
		}
	}
  }
});

const ThemeLayer = ({ children }: ThemeLayerProps) => {
  return (
    <DirectionProvider>
      <MantineProvider theme={theme}>
        {children}
      </MantineProvider>
    </DirectionProvider>
  );
};

export default ThemeLayer;
