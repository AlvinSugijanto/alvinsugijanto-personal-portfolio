import React, { useEffect, useRef } from "react";
import { useTheme } from "../ThemeProvider";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { workExperience } from "../lib/workExperience";
import { useAnimate, useInView } from "framer-motion";

function WorkExperience() {

    const { darkMode, toggleMode, themeClass } = useTheme();
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)

    useEffect(() => {
        if (isInView) {
            const [firstChild, secondChild] = scope.current.children;

            animate(firstChild, { x: [40, 0], y: [-150, 0], opacity: [0, 1] }, { duration: 1 });
            animate(secondChild, { x: [-40, 0], y: [-150, 0], opacity: [0, 1] }, { duration: 1 });
        }
    }, [isInView])
    return (
        <>
            <div className="flex flex-col gap-24 py-28">
                <div className="relative text-center">
                    <div className="absolute -top-8 w-full opacity-20 -z-1">
                        <p className='bg-clip-text text-transparent bg-gradient-to-t from-slate-300 to-slate-950 lg:text-6xl sm:text-5xl text-4xl font-extrabold'>Experience</p>
                    </div>
                    <p className={`z-1 lg:text-5xl sm:text-4xl text-3xl font-extrabold font-bricolage ${themeClass.textPrimary}`}>Experience</p>
                </div>
                <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-12 sm:gap-6 gap-4" ref={scope}>
                    <div className="lg:text-left text-center">
                        <p className={`font-bricolage lg:text-3xl sm:text-2xl text-xl max-w-s ${themeClass.textPrimary}`}>Work Experience 🎓</p>
                        <p className={`text-xl ${themeClass.textPrimary} mt-4 lg:max-w-xs`}>Some of my work experience & latest education</p>
                    </div>
                    <div className="sm:max-w-2xl container px-6 drop-shadow-md">

                        <Swiper
                            pagination={{
                                type: 'progressbar',
                            }}
                            spaceBetween={60}
                            navigation={true}
                            grabCursor={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper w-full"
                        >
                            {workExperience.map((work, index) => (

                                <SwiperSlide key={index}>
                                    <div className="py-12 flex flex-col gap-6">
                                        <p className={`font-bricolage text-lg font-semibold ${themeClass.textPrimary}`}><span>{work.company}</span> - {work.role}</p>
                                        <p className="font-bricolage font-md text-slate-600">{work.work_date}</p>
                                        <p className={`${themeClass.textPrimary}`}>{work.description}</p>
                                    </div>
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
