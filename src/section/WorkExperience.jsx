import React, { useEffect } from "react";
import { useTheme } from "../ThemeProvider";

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import { workExperience } from "../lib/workExperience";
import { useAnimate, useInView } from "framer-motion";

function WorkExperience() {

    const { darkMode, toggleMode, themeClass } = useTheme();
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)

    useEffect(() => {
        if (isInView) {
            const [secondChild] = scope.current.children;

            animate(secondChild, { x: [0, 0], y: [-150, 0], opacity: [0, 1] }, { duration: 1 });
        }
    }, [isInView])
    return (
        <>
            <div className="flex flex-col gap-24 py-28">
                <div className="relative text-center">
                    <div className="absolute -top-8 w-full opacity-20 -z-1">
                        <p className='bg-clip-text text-transparent bg-gradient-to-t from-slate-300 to-slate-950 text-6xl font-extrabold'>Work Experience</p>
                    </div>
                    <p className={`z-1 text-5xl font-extrabold font-bricolage ${themeClass.textPrimary}`}>Work Experience</p>
                </div>
                <div className="flex justify-center items-center lg:gap-12 sm:gap-6 gap-4" ref={scope}>
                    
                    <div className="sm:max-w-2xl container p-6 border-2">
                        <Swiper
                            pagination={{
                                type: 'progressbar',
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper w-full"
                        >
                            {workExperience.map((work, index) => (
                                <SwiperSlide key={index} className="flex flex-col gap-4 pt-6 cursor-grab">
                                    <p className={`font-bricolage text-lg font-semibold ${themeClass.textPrimary}`}><span>{work.company}</span> - {work.role}</p>
                                    <p className={`font-bricolage font-md ${themeClass.textPrimary}`}>{work.work_date}</p>
                                    <p className={`${themeClass.textPrimary}`}>{work.description}</p>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </div>
            </div>

        </>
    );
}

export default WorkExperience;
