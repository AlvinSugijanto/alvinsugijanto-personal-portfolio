import React, { useState } from "react";
import { useTheme } from "../ThemeProvider";
import SwiperComponent from "../Swiper";
import { portofolioList } from "../lib/portofolioList";
import PortfolioModal from "../components/Modal";
import { useDisclosure } from "@chakra-ui/react";


function Projects() {

    const portofolio = portofolioList;
    const { darkMode, toggleMode, themeClass } = useTheme();

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedPortofolio, setSelectedPortofolio] = useState();


    const handleOpenPortfolio = (portofolio) => {
        setSelectedPortofolio(portofolio);
        onOpen();
    }

    return (
        <>
            <div className="flex flex-col gap-24 py-24">

                <div className="relative text-center">
                    <div className="absolute -top-8 w-full opacity-20 -z-1">
                        <p className='bg-clip-text text-transparent bg-gradient-to-t from-slate-300 to-slate-950 text-6xl font-extrabold'>Personal Projects</p>
                    </div>
                    <p className={`z-1 text-5xl font-extrabold font-bricolage ${themeClass.textPrimary}`}>Personal Projects</p>
                </div>
                <div className="flex justify-center">
                    <div className="max-w-7xl">
                        <div className="grid grid-cols-3 place-items-center gap-8">
                            {portofolio.map((porto) => (

                                <div className={`drop-shadow-xl p-6 rounded-md ${themeClass.backgroundSecondary}`} key={porto.title}>
                                    <img src={porto.thumbnail} alt="" className="w-full border border-slate-800 rounded-lg" />
                                    <p className={`text-xl font-bold font-bricolage mt-3 ${themeClass.textPrimary}`}>{porto.title}</p>
                                    <div className="flex gap-4 items-center mt-4">
                                        {porto.stack.map((stack) => (
                                            <div className="flex flex-wrap gap-2 items-center border rounded-lg py-1 px-2 bg-slate-100 border-slate-400 text-md" key={stack.name}>
                                                <img src={stack.image} alt="" className='w-4 h-4' />
                                                <p className='font-semibold text-sm font-mono uppercase'>{stack.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className={`w-full mt-3 line-clamp-3 text-justify ${themeClass.textPrimary}`}>{porto.description}</p>
                                    <div className="flex items-center gap-6">
                                        <button className="rounded-md py-2 px-3 bg-sky-500 text-white font-bricolage font-medium mt-6" onClick={() => { handleOpenPortfolio(porto) }}>Details</button>
                                        <button className="rounded-md py-2 px-3 border bg-white border-sky-500 text-sky-500 font-bricolage font-medium mt-6">Visit Github</button>
                                    </div>

                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <PortfolioModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} portofolio={selectedPortofolio} />
        </>
    );
}

export default Projects;