import React, { useState } from 'react'
import { useTheme } from '../ThemeProvider';

function Navbar() {
    const { darkMode, toggleMode, themeClass } = useTheme();

    const [toggleHamburger, setToggleHamburger] = useState(false);

    const animationClasses = toggleHamburger ? 'translate-y-0' : '-translate-y-full';

    return (
        <div className={`fixed top-0 z-50 py-4 w-full flex justify-around items-center font-bricolage ${themeClass.navbarColor} backdrop-blur-md shadow-md`}>
            <p className='font-bricolage font-bold text-3xl text-sky-500'>Alvin Sugijanto</p>
            <ul className={`lg:flex xl:gap-10 lg:gap-10 text-md hidden ${themeClass.textPrimary}`}>
                <li className='hover:text-sky-500 cursor-pointer'>About</li>
                <li className='hover:text-sky-500 cursor-pointer'>Skills</li>
                <li className='hover:text-sky-500 cursor-pointer'>Education</li>
                <li className='hover:text-sky-500 cursor-pointer'>Experience</li>
                <li className='hover:text-sky-500 cursor-pointer'>Contact</li>
            </ul>
            <div className={`border p-3 rounded-full drop-shadow  cursor-pointer ${darkMode ? "bg-slate-300 hover:bg-slate-400" : "bg-sky-200 hover:bg-sky-600"}`} onClick={toggleMode}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
            </div>
            <div className='border rounded p-1 bg-sky-600 lg:hidden z-50' onClick={() => setToggleHamburger(!toggleHamburger)}>
                <svg className="w-8 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" strokeWidth={0.7} stroke="white" fill="rgba(0,0,0,0)" strokeLinecap="round">
                    <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
                        <animate dur="0.2s" attributeName="d" values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" fill="freeze" begin="start.begin" />
                        <animate dur="0.2s" attributeName="d" values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" fill="freeze" begin="reverse.begin" />
                    </path>
                    <rect width="10" height="10" stroke="none">
                        <animate dur="2s" id="reverse" attributeName="width" begin="click" />
                    </rect>
                    <rect width="10" height="10" stroke="none">
                        <animate dur="0.2s" id="start" attributeName="width" values="10;0" fill="freeze" begin="click" />
                        <animate dur="0.2s" attributeName="width" values="0;10" fill="freeze" begin="reverse.begin" />
                    </rect>
                </svg>
            </div>

            <div className={`bg-sky-400 fixed z-40 top-0 left-0 flex w-screen h-screen transition-all ease-out duration-300  ${animationClasses}`}>
                <ul className={`m-auto flex flex-col gap-12 text-xl font-semibold text-slate-800 ${themeClass.textPrimary}`}>
                    <li className='hover:text-sky-500 cursor-pointer text-center '>About</li>
                    <li className='hover:text-sky-500 cursor-pointer text-center '>Skills</li>
                    <li className='hover:text-sky-500 cursor-pointer text-center '>Education</li>
                    <li className='hover:text-sky-500 cursor-pointer text-center '>Experience</li>
                    <li className='hover:text-sky-500 cursor-pointer text-center '>Contact</li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar