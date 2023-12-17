import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Skills from './section/Skills'
import Projects from './section/Projects'
import WorkExperience from './section/WorkExperience'
import SocialMedia from './components/SocialMedia'

import { useTheme } from './ThemeProvider'
import { useEffect, useRef } from 'react'


function App() {
  const { darkMode, toggleMode, themeClass } = useTheme();


  useEffect(() => {
    const checkOverflow = () => {
      document.querySelectorAll('*').forEach((el) => {
        if (el.offsetWidth > document.documentElement.offsetWidth) {
          console.log('Found the worst element ever: ', el);
        }
      });
    };
    checkOverflow();

  }, []);
  return (
    <div className={`${themeClass.backgroundPrimary} w-full min-h-screen`}>
      <SocialMedia />
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Skills />
      <WorkExperience />
      <Projects />
    </div>
  )
}

export default App
