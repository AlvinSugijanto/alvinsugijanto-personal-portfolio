import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WorkExperience from './components/WorkExperience'
import SocialMedia from './components/SocialMedia'

import { useTheme } from './ThemeProvider'

function App() {
  const { darkMode, toggleMode, themeClass } = useTheme();
  return (
      <div className={`${themeClass.backgroundPrimary} w-full`}>
        <div className="min-h-screen">
          <SocialMedia/>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <WorkExperience/>
          <Projects/>
        </div>
      </div>
  )
}

export default App
