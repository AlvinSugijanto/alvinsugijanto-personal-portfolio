import React from "react";
import { useTheme } from "../ThemeProvider";
import SwiperComponent from "../Swiper";


function SocialMedia() {

    const { darkMode, toggleMode, themeClass } = useTheme();

    return (
        <>
            <div className="fixed top-2/3 left-1.5 -z-1">
                <div className="flex flex-col gap-3">

                <div className={`rounded-full p-2 backdrop-blur-xl  ${themeClass.textPrimary}`}>
                    <img src={"./gmail.png"} alt="" className="w-4 h-4" />
                </div>
                <div className={`rounded-full p-2 backdrop-blur-xl  ${themeClass.backgroundSecondary}`}>
                    <img src={"./github.png"} alt="" className="w-4 h-4" />
                </div>
                <div className={`rounded-full p-2 backdrop-blur-xl ${themeClass.backgroundSecondary}`}>
                    <img src={"./linkedin.png"} alt="" className="w-4 h-4" />
                </div>
                </div>
            </div>


        </>
    );
}

export default SocialMedia;
