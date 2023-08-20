import React from 'react'
import { useTheme } from '../ThemeProvider';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
    const { darkMode, toggleMode, themeClass } = useTheme();

    return (
        <div className="px-16 py-16 grid lg:grid-cols-2 justify-items-center items-center lg:gap-0 gap-16">
            <div className='text-lg text-center'>
                <p className='text-gray-400 font-bold'>Hi There,</p>
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

                <p className={`mt-3 ${themeClass.textPrimary}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere minima fuga eius corrupti incidunt aliquam.</p>
                <button className='bg-sky-500 text-white py-3 px-6 border rounded-xl font-bold inline-flex mt-8'>Download CV
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </button>

            </div>
            <div className='relative sm:block hidden max-w-md'>
                <img src={"./blob.png"} alt="" className='w-auto' />
                <div className="absolute top-[5%] left-[15%]">
                    <img src={"./profile.png"} alt="" className='border rounded-full border-transparent object-cover sm:w-[80%] w-[70%] h-auto' />
                </div>
            </div>

        </div>
    )
}

export default Hero