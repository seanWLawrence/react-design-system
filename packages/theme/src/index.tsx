import React, { FC, createContext, useState, ReactChildren } from 'react';

interface Theme {}

let defaultTheme: Theme = {};

export let ThemeContext = createContext(defaultTheme);

interface ThemeProviderProps {
  children: ReactChildren;
  theme?: Theme;
}

export let ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme = defaultTheme,
}) => {
  let [customTheme] = useState(theme);

  return (
    <ThemeContext.Provider value={customTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
