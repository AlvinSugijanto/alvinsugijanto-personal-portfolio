import React, { useEffect, useRef, useState } from "react"
import { useTheme } from '../ThemeProvider';

import { motion, useInView, useAnimate, stagger } from 'framer-motion';

import FeStack from "../components/FeStack";
import BeStack from "../components/BeStack";


function Skills({ skillsRef }) {

    const [skillSection, setSkillSection] = useState('fe')
    const { themeClass } = useTheme();

    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)

    useEffect(() => {
        if (isInView) {
            animate("div", { x: [-20, 0], opacity: [0, 1] }, { delay: stagger(0.05), duration: 0.5 })
        }
    }, [isInView, skillSection])

    return (

        <div className='flex flex-col gap-24 py-28' ref={skillsRef}>
            <div className="relative text-center">
                <div className="absolute -top-8 w-full opacity-20 -z-1">
                    <p className='bg-clip-text text-transparent bg-gradient-to-t from-slate-300 to-slate-950 lg:text-6xl sm:text-5xl text-4xl font-extrabold'>My Skills</p>
                </div>
                <p className={`z-1 lg:text-5xl sm:text-4xl text-3xl font-extrabold font-bricolage ${themeClass.textPrimary}`}>My Skills</p>
            </div>
            <div className="flex lg:flex-row flex-col justify-center items-center gap-12">
                <div className="lg:text-right text-center lg:order-2">
                    <p className={`font-bricolage text-3xl max-w-s ${themeClass.textPrimary}`}>Tech Stack⚙️ & Tools🛠️</p>
                    <p className={`text-xl ${themeClass.textPrimary} mt-4 lg:max-w-xs`}>Here are some tech stack and tools that I have learned</p>
                </div>
                <div className={`${themeClass.backgroundSecondary} rounded-xl sm:py-12 py-6 lg:px-12 sm:px-12 px-4`}>
                    <div className="flex justify-center gap-8">
                        <div className={`flex items-center gap-2 hover:text-sky-500 cursor-pointer ${skillSection === 'fe' ? 'text-sky-500' : themeClass.textPrimary} `} onClick={() => setSkillSection('fe')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                            </svg>
                            <p className={`font-sans font-semibold text-clamp`}>Frontend Stack</p>
                        </div>

                        <div className={`flex items-center gap-2 hover:text-sky-500 cursor-pointer ${skillSection === 'be' ? 'text-sky-500' : themeClass.textPrimary} `} onClick={() => setSkillSection('be')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                            </svg>
                            <p className={`font-sans font-semibold text-clamp`}>Backend Stack</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-items-center sm:gap-24 gap-8 sm:mt-12 mt-6" ref={scope}>
                        {skillSection === 'fe' && <FeStack />}
                        {skillSection === 'be' && <BeStack />}
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Skills