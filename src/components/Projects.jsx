import React from "react";
import { useTheme } from "../ThemeProvider";
import SwiperComponent from "../Swiper";


function Projects() {

    const { darkMode, toggleMode, themeClass } = useTheme();

    return (
        <>
            <div className="flex flex-col gap-24 py-24">

                <div className="relative text-center">
                    <div className="absolute -top-8 w-full opacity-20 -z-1">
                        <p className='bg-clip-text text-transparent bg-gradient-to-t from-slate-300 to-slate-950 text-6xl font-extrabold'>Projects</p>
                    </div>
                    <p className={`z-1 text-5xl font-extrabold font-bricolage ${themeClass.textPrimary}`}>Projects</p>
                </div>
                <div className="cursor-grab">
                </div>
            </div>


        </>
    );
}

export default Projects;
