import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [themeClass, setThemeClass] = useState(lightThemeClass);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    if (darkMode === false) {
      setThemeClass(darkThemeClass);
    } else {
      setThemeClass(lightThemeClass);
    }
  };



  return (
    <ThemeContext.Provider value={{ darkMode, toggleMode, themeClass }}>
      {children}
    </ThemeContext.Provider>
  );
};

const lightThemeClass = {

  backgroundPrimary: 'bg-[#F1F5F9]',
  backgroundSecondary: 'bg-white',
  textPrimary: 'text-slate-950',
  navbarColor: 'bg-transparent',
  borderColor: 'border-black'

}

const darkThemeClass = {

  backgroundPrimary: 'bg-[#0E1B31]',
  backgroundSecondary: 'bg-[#132347]',
  textPrimary: 'text-slate-50',
  navbarColor: 'bg-slate-50/10',
  borderColor: 'border-white'

}
