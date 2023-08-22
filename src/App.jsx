import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Skills from './section/Skills'
import Projects from './section/Projects'
import WorkExperience from './section/WorkExperience'
import SocialMedia from './components/SocialMedia'

import { useTheme } from './ThemeProvider'


function App() {
  const { darkMode, toggleMode, themeClass } = useTheme();
  return (
    <div className={`${themeClass.backgroundPrimary} w-full min-h-screen`}>
      <SocialMedia />
      <Navbar />
      <Hero />
      <About />
      {/* <Section> */}
        <Skills />
      {/* </Section> */}
      <WorkExperience />
      <Projects />
    </div>
  )
}

export default App
