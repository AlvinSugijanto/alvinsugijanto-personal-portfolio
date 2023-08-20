import React, { useState } from "react"
import { useTheme } from '../ThemeProvider';

function Skills() {

    const frontendStack = [
        {
            nama: 'HTML',
            image: './frontend/html.png',
        },
        {
            nama: 'CSS',
            image: './frontend/css.png',
        },
        {
            nama: 'Vanilla JS',
            image: './frontend/javascript.png',
        },
        {
            nama: 'React JS',
            image: './frontend/reactjs.png',
        },
        {
            nama: 'Vue JS',
            image: './frontend/vuejs.png',
        },
        {
            nama: 'TailWind CSS',
            image: './frontend/tailwind.png',
        },
        {
            nama: 'Bootstrap',
            image: './frontend/bootstrap.png',
        },
        {
            nama: 'Vite',
            image: './frontend/vite.png',
        },
    ]
    const backendStack = [
        {
            nama: 'PHP',
            image: './frontend/php.png'
        },
        {
            nama: 'Laravel',
            image: './frontend/laravel.png'
        },
        {
            nama: 'Laravel Livewire',
            image: './frontend/livewire.png'
        },
        {
            nama: 'Lumen',
            image: './frontend/lumen.png'
        },
        {
            nama: 'CodeIgniter',
            image: './frontend/codeigniter.png'
        },
        {
            nama: 'Node JS',
            image: './frontend/nodejs.png'
        },
        {
            nama: 'Express JS',
            image: './frontend/expressjs.png'
        },
        {
            nama: 'MySQL',
            image: './frontend/mysql.png'
        },
    ]
    const [skillSection, setSkillSection] = useState('fe')
    const { darkMode, toggleMode, themeClass } = useTheme();

    return (

        <div className='flex flex-col gap-24 py-24'>
            <div className="relative text-center">
                <div className="absolute -top-8 w-full opacity-20 -z-1">
                    <p className='bg-clip-text text-transparent bg-gradient-to-t from-slate-300 to-slate-950 text-6xl font-extrabold'>My Skills</p>
                </div>
                <p className={`z-1 text-5xl font-extrabold font-bricolage ${themeClass.textPrimary}`}>My Skills</p>
            </div>
            <div className="flex lg:flex-row flex-col justify-center items-center gap-12">
                <div className="lg:text-right text-center lg:order-2">
                    <p className="font-bricolage text-3xl max-w-s">Tech Stack⚙️ & Tools🛠️</p>
                    <p className={`text-xl ${themeClass.textPrimary} mt-4 max-w-xs`}>Here are some tech stack and tools that I have learned</p>
                </div>
                <div className={`${themeClass.backgroundSecondary} rounded-xl py-12 lg:px-12 sm:px-12 px-4`}>
                    <div className="flex justify-center gap-8">
                        <div className={`flex items-center gap-2 hover:text-sky-500 cursor-pointer ${skillSection === 'fe' ? 'text-sky-500' : ''} `} onClick={() => setSkillSection('fe')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                            </svg>
                            <p className={`font-bricolage font-semibold text-lg`}>Frontend Stack</p>
                        </div>

                        <div className={`flex items-center gap-2 hover:text-sky-500 cursor-pointer ${skillSection === 'be' ? 'text-sky-500' : ''} `} onClick={() => setSkillSection('be')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                            </svg>
                            <p className={`font-bricolage font-semibold text-lg`}>Backend Stack</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-items-center xl:gap-24 sm:gap-12 gap-4 mt-12 ">
                        {skillSection === 'fe' ? (
                            <>
                                {frontendStack.map((items) => (
                                    <div key={items.nama} className=" w-24">
                                        <div className="drop-shadow-custom border rounded-full p-6 bg-slate-100" >
                                            <img src={`./${items.image}`} alt="" className="w-12 h-12 object-contain" />
                                        </div>
                                        <p className={`text-center font-bricolage text-lg font-md mt-5 ${themeClass.textPrimary}`}>{items.nama}</p>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <>
                                {backendStack.map((items) => (
                                    <div key={items.nama} className="w-24">
                                        <div className="drop-shadow-custom border rounded-full p-6 bg-slate-100" >
                                            <img src={`./${items.image}`} alt="" className="w-12 h-12 object-contain" />
                                        </div>
                                        <p className={`text-center font-bricolage text-lg font-md mt-5 ${themeClass.textPrimary}`}>{items.nama}</p>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Skills