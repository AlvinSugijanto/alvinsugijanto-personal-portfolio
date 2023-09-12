import React from 'react'
import { useTheme } from '../ThemeProvider';

function Navbar() {
    const { darkMode, toggleMode, themeClass } = useTheme();

    const handleClickSection = (e) => {

    }
    return (
        <div className={`sticky top-0 z-50 py-4 flex justify-around items-center font-bricolage ${themeClass.navbarColor} backdrop-blur-md shadow-md`}>
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
            <div className='border rounded p-2 bg-sky-600 lg:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>

            </div>
        </div>
    )
}

export default Navbar