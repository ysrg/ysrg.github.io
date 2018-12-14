import React from 'react';

export const themes = {
  light: {
    background: '#ffffff',
    style: 'light'
  },
  dark: {
    background: '#10161E',
    style: 'dark'
  },
};

export const ThemeContext = React.createContext({
  theme: themes.light, // default value
  toggleTheme: () => {},
});
