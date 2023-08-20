import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [themeClass, setThemeClass] = useState(lightThemeClass);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    if(darkMode === false)
    {
        setThemeClass(darkThemeClass);
    }else{
        setThemeClass(lightThemeClass);
    }
  };

 

  return (
    <ThemeContext.Provider value={{ darkMode, toggleMode, themeClass }}>
      {children}
    </ThemeContext.Provider>
  );
};

const lightThemeClass = () => {
    return {
        backgroundPrimary : 'bg-[#F1F5F9]',
        backgroundSecondary : 'bg-white',
        textPrimary : 'text-slate-950',
    }
}

const darkThemeClass = () => {
    return {
        backgroundPrimary : 'bg-[#0E1B31]',
        backgroundSecondary : 'bg-[#132347]',
        textPrimary : 'text-slate-50',
    }
}
