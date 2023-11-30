import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../ThemeProvider";

import { register } from 'swiper/element/bundle';


import { workExperience } from "../lib/workExperience";
import { useAnimate, useInView } from "framer-motion";

register();
function WorkExperience() {

    const { darkMode, toggleMode, themeClass } = useTheme();
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)
    const [alreadyAnimated, setAlreadyAnimated] = useState(false);

    useEffect(() => {
        if (!alreadyAnimated) {
            if (isInView) {
                const [secondChild] = scope.current.children;

                animate(secondChild, { x: [0, 0], y: [-150, 0], opacity: [0, 1] }, { duration: 1 });
                setAlreadyAnimated(true);
            }
        }
    }, [isInView])
    return (

        <div className="flex flex-col gap-24 py-28">
            <div className="relative text-center">
                <div className="absolute -top-8 w-full opacity-20 -z-1">
                    <p className='bg-clip-text text-transparent bg-gradient-to-t from-slate-300 to-slate-950 lg:text-6xl sm:text-5xl text-4xl font-extrabold'>Experience</p>
                </div>
                <p className={`z-1 lg:text-5xl sm:text-4xl text-3xl font-extrabold font-bricolage ${themeClass.textPrimary}`}>Work Experience</p>
            </div>
            <div className="flex justify-center items-center lg:gap-12 sm:gap-6 gap-4" ref={scope}>

                <div className={`max-w-3xl container px-6 rounded-md ${themeClass.backgroundSecondary}`}>

                    <swiper-container  scrollbar="true" grab-cursor="true" >

                        {workExperience.map((work, index) => (
                            <swiper-slide>
                                <div className="px-6 pt-8 pb-16">
                                    <p className={`font-bricolage text-lg font-bold ${themeClass.textPrimary}`}><span>{work.company}</span> - {work.role}</p>
                                    <p className="font-bricolage font-md text-slate-600">{work.work_date}</p>
                                    <p className={`font-sans font-semibold my-6 ${themeClass.textPrimary} `}>{work.description}</p>
                                    {work.points.map((point, index) => (
                                        <p className={`font-serif font-thin mt-2 ${themeClass.textPrimary}`} key={index}>&#8226; {point}</p>
                                    ))}
                                </div>
                            </swiper-slide>
                        ))}

                    </swiper-container>
                </div>
            </div>
        </div>


    );
}

export default WorkExperience;
