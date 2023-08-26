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
                        <p className='bg-clip-text text-transparent bg-gradient-to-t from-slate-300 to-slate-950 text-6xl font-extrabold'>Experience & Education</p>
                    </div>
                    <p className={`z-1 text-5xl font-extrabold font-bricolage ${themeClass.textPrimary}`}>Experience & Education</p>
                </div>
                <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-12 sm:gap-6 gap-4" ref={scope}>
                    <div className="lg:text-left text-center">
                        <p className={`font-bricolage text-3xl max-w-s ${themeClass.textPrimary}`}>Educations & Experience 🎓</p>
                        <p className={`text-xl ${themeClass.textPrimary} mt-4 lg:max-w-xs`}>Some of my work experience & latest education</p>
                    </div>
                    <div className="sm:max-w-2xl container px-6">

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
                                    <p className="font-bricolage text-lg font-semibold"><span>{work.company}</span> - {work.role}</p>
                                    <p className="font-bricolage font-md text-slate-600">{work.work_date}</p>
                                    <p>{work.description}</p>
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
