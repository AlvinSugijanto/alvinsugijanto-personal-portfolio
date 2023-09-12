import React from "react";
import { frontEndStack } from "../lib/skillStack";
import { useTheme } from '../ThemeProvider';

const FeStack = () => {

    const { darkMode, toggleMode, themeClass } = useTheme();

    return (
        <>
            {frontEndStack.map((items) => (
                <div key={items.nama}>
                    <div className="sm:w-24 w-20 drop-shadow-custom border rounded-full p-6 bg-slate-100" >
                        <img src={`./${items.image}`} alt="" className="object-contain aspect-square" />
                    </div>
                    <p className={`text-center font-bricolage text-lg font-md mt-5 ${themeClass.textPrimary}`}>{items.nama}</p>
                </div>
            ))}
        </>
    )
}

export default FeStack;