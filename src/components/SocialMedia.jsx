import React from "react";
import { useTheme } from "../ThemeProvider";
import SwiperComponent from "../Swiper";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";



function SocialMedia() {

    const { themeClass } = useTheme();

    const SOCIAL_MEDIA_LIST = [

        {
            href: 'https://github.com/AlvinSugijanto',
            icon: <FaGithub className={`${themeClass.textPrimary}`} />
        },
        {
            href: 'https://www.instagram.com/alvinsugijaannto/',
            icon: <FaInstagram className={`${themeClass.textPrimary}`} />
        },
        {
            href: 'https://www.linkedin.com/in/alvinsugijanto/',
            icon: <FaLinkedin className={`${themeClass.textPrimary}`} />
        }

    ]

    return (
        <>
            <div className="fixed top-2/3 left-1.5 z-50">
                <div className="flex flex-col gap-3">

                    {SOCIAL_MEDIA_LIST.map((item, index) => (
                        <a
                            key={index}
                            className={`rounded-full p-2 backdrop-blur-xl border ${themeClass.backgroundSecondary} ${themeClass.borderColor} hover:bg-slate-200 hover:cursor-pointer`}
                            onClick={() => window.open(item.href, '_blank')}
                        >
                            {item.icon}
                        </a>
                    ))}

                </div>
            </div>


        </>
    );
}

export default SocialMedia;
