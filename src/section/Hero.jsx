import React from 'react'
import { useTheme } from '../ThemeProvider';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Mesh from '../assets/mesh';
import { Canvas } from '@react-three/fiber';


function Hero() {
    const { darkMode, toggleMode, themeClass } = useTheme();

    return (
        <>
            <div className="px-16 py-20 grid lg:grid-cols-2 place-items-center lg:gap-0 gap-16">
                <motion.div className='text-lg text-center' variants={{
                    hidden: { opacity: 0, x: -150 },
                    visible: { opacity: 1, x: 0 },
                }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
                >

                    <p className={`${themeClass.textPrimary} font-bold`}>Hi There, My Name Is</p>
                    <p className='font-bricolage font-bold text-5xl text-sky-500 mt-3 mb-4'>Alvin Sugijanto</p>
                    <div className={`text-bricolage font-bold ${themeClass.textPrimary}`}>
                        <TypeAnimation
                            sequence={[
                                'Frontend Engineer',
                                500,
                                'Backend Engineer',
                                500,
                            ]}
                            speed={40}
                            repeat={Infinity}
                        />
                    </div>

                    <button className='bg-sky-500 text-white py-3 px-6 border rounded-xl font-bold inline-flex mt-8'>Download CV
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </button>

                </motion.div>

                <motion.div variants={{
                    hidden: { opacity: 0, x: 150 },
                    visible: { opacity: 1, x: 0 },
                }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}

                >
                    <div className='max-w-sm sm:block hidden'>
                        <img src={"./avatar.png"} alt="" className='drop-shadow-navbar border-transparent object-cover w-full' />
                    </div>
                </motion.div>

            </div>

        </>
    )
}

export default Hero