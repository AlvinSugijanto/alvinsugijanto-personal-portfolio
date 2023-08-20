import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import { portofolioList } from "../src/lib/portofolioList";


export default function SwiperComponent() {


    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {portofolioList.map((portofolio) => (
                    <SwiperSlide key={portofolio.title}>
                        <div className="border-2 border-sky-400 p-4">
                            <img src={portofolio.image} alt="" className='border border-slate-300 rounded-2xl' />
                            <p className='font-semibold text-xl font-bricolage mt-4'>{portofolio.title}</p>
                            <div className="flex gap-4 items-center mt-4">
                                {portofolio.stack.map((stack) => (

                                    <div className="flex gap-2 items-center border rounded-lg py-1 px-2 bg-slate-300" key={stack.name}>
                                        <img src={stack.image} alt="" className='w-6 h-6' />
                                        <p className='font-semibold text-md font-mono'>{stack.name}</p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
        </>
    );
}
