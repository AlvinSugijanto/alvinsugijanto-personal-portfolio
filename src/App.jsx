import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Skills from './section/Skills'
import Projects from './section/Projects'
import WorkExperience from './section/WorkExperience'
import SocialMedia from './components/SocialMedia'

import { useTheme } from './ThemeProvider'
import { useEffect, useRef, useState } from 'react'


function App() {
  const { darkMode, toggleMode, themeClass } = useTheme();
  const [classNames, setClassNames] = useState({
    loader: 'block',
    element: 'invisible'
  });

  // useEffect(() => {
  //   const checkOverflow = () => {
  //     document.querySelectorAll('*').forEach((el) => {
  //       if (el.offsetWidth > document.documentElement.offsetWidth) {
  //         console.log('Found the worst element ever: ', el);
  //       }
  //     });
  //   };
  //   checkOverflow();

  // }, []);

  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const experienceRef = useRef();
  const projectsRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      const temp = {
        loader: 'hidden',
        element: 'visible'
      }

      setClassNames(temp);
    }, 3000)
  }, [])


  return (
    <>
      <div className={`flex justify-center items-center h-screen w-full ${classNames.loader}`}>

        <p className='text-3xl font-sans tracking-wide'>Wait a second . . .</p>
      </div>
      <div className={`${themeClass.backgroundPrimary} w-full min-h-screen ${classNames.element}`} ref={homeRef}>
        <SocialMedia />
        <div className='min-h-screen flex flex-col'>
          <Navbar
            homeRef={homeRef}
            aboutRef={aboutRef}
            skillsRef={skillsRef}
            experienceRef={experienceRef}
            projectsRef={projectsRef}
          />
          <Hero />
        </div>
        <About aboutRef={aboutRef} />
        <Skills skillsRef={skillsRef} />
        <WorkExperience experienceRef={experienceRef} />
        <Projects projectsRef={projectsRef} />
      </div>
    </>
  )
}

export default App
