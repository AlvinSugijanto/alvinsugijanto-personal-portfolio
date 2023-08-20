import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import { useTheme } from './ThemeProvider'

function App() {
  const { darkMode, toggleMode, themeClass } = useTheme();
  return (
      <div className={`${themeClass.backgroundPrimary} w-full`}>
        <div className="min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <WorkExperience/>
        </div>
      </div>
  )
}

export default App
