import React from "react";
import { useTheme } from "../ThemeProvider";
import SwiperComponent from "../Swiper";


function WorkExperience() {

    const { darkMode, toggleMode, themeClass } = useTheme();

    return (
        <>
            <div className="flex flex-col gap-24 py-24">
                <div className="relative text-center">
                    <div className="absolute -top-8 w-full opacity-20 -z-1">
                        <p className='bg-clip-text text-transparent bg-gradient-to-t from-slate-300 to-slate-950 text-6xl font-extrabold'>Experience & Education</p>
                    </div>
                    <p className={`z-1 text-5xl font-extrabold font-bricolage ${themeClass.textPrimary}`}>Experience & Education</p>
                </div>
                <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-12 sm:gap-6 gap-4">
                    <div className="lg:text-left text-center">
                        <p className={`font-bricolage text-3xl max-w-s ${themeClass.textPrimary}`}>Educations & Experience 🎓</p>
                        <p className={`text-xl ${themeClass.textPrimary} mt-4 max-w-xs`}>Some of my work experience & latest education</p>
                    </div>
                    <div className={`${themeClass.backgroundSecondary} rounded-xl py-12 lg:px-12 sm:px-12 px-4`}>
                        <div className="flex sm:flex-row flex-col gap-8">
                            <div>
                                <div className="rounded-lg px-4 py-2 bg-sky-500 text-white font-semibold inline-flex">EDUCATION</div>
                                <div className="border-l-2 border-sky-500 px-4 relative pb-2 mt-8">
                                    <div className="bg-sky-500 p-1.5 rounded-full absolute -top-1 -left-[7px]"></div>
                                    <p className={`font-bricolage text-lg mt-4 font-semibold ${themeClass.textPrimary}`}>Universitas Atma Jaya Yogyakarta</p>
                                    <p className={`font-bricolage text-lg mt-3 ${themeClass.textPrimary}`}>Informatics</p>
                                    <p className="font-bricolage text-lg mt-2 text-slate-400">2018-2023</p>
                                </div>
                                <div className="border-l-2 border-sky-500 px-4 relative py-8">
                                    <div className="bg-sky-500 p-1.5 rounded-full absolute top-8 -left-[7px]"></div>
                                    <p className={`font-bricolage text-lg font-semibold ${themeClass.textPrimary}`}>SMA NEGERI 1 PURWOKERTO</p>
                                    <p className="font-bricolage text-lg mt-2 text-slate-400">2015-2018</p>
                                </div>
                            </div>
                            <div>
                                <div className="rounded-lg px-4 py-2 bg-sky-500 text-white font-semibold inline-flex">EXPERIENCE</div>
                                <div className="border-l-2 border-sky-500 px-4 relative pb-2 mt-8">
                                    <div className="bg-sky-500 p-1.5 rounded-full absolute -top-1 -left-[7px]"></div>
                                    <p className={`font-bricolage text-lg mt-4 font-semibold ${themeClass.textPrimary}`}>Elemen Kopi</p>
                                    <p className={`font-bricolage text-lg mt-3 ${themeClass.textPrimary}`}>Freelance</p>
                                    <p className="font-bricolage text-lg mt-2 text-slate-400">September - December 2022</p>
                                </div>
                                <div className="border-l-2 border-sky-500 px-4 relative py-8">
                                    <div className="bg-sky-500 p-1.5 rounded-full absolute top-8 -left-[7px]"></div>
                                    <p className={`font-bricolage text-lg font-semibold ${themeClass.textPrimary}`}>Nirbana</p>
                                    <p className={`font-bricolage text-lg mt-3 ${themeClass.textPrimary}`}>Freelance</p>
                                    <p className="font-bricolage text-lg mt-2 text-slate-400">August - October 2021</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default WorkExperience;
