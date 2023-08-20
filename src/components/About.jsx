import { useTheme } from '../ThemeProvider';


function About() {
    const { darkMode, toggleMode, themeClass } = useTheme();

    return (
        <div className='py-24 flex flex-col gap-8'>
            <div className="relative text-center">
                <div className="absolute -top-8 w-full opacity-20 -z-1">
                    <p className='bg-clip-text text-transparent bg-gradient-to-t from-slate-300 to-slate-950 text-6xl font-extrabold'>About Me</p>
                </div>
                <p className={`z-1 text-5xl font-extrabold font-bricolage ${themeClass.textPrimary}`}>About Me</p>
            </div>
            <div className="lg:px-32 px-6">
                <div className="grid lg:grid-cols-2 justify-items-center items-center">
                    <div>
                        <img src={"./profile.png"} alt="" />
                    </div>
                    <div>
                        <div className='border-b-2 border-black py-4 lg:text-start text-center'>
                            <p className={`text-3xl font-bold font-bricolage ${themeClass.textPrimary}`}>Hello👋, <span className='text-sky-500'>I am Alvin Sugijanto</span></p>
                            <p className={`text-2xl font-bold font-bricolage mt-2 ${themeClass.textPrimary}`}>A <span className='text-sky-500'>Software Engineer</span> Based In Indonesia</p>
                            <p className={`mt-4 font-bricolage font-serif text-lg text-justify ${themeClass.textPrimary}`}>I am a highly motivated and dedicated Software Engineer. I graduated from Atma Jaya Yogyakarta University. Throught out the years, I have experienced some freelance projects. With this experiences, I have gained a strong foundation in software development, and I am always eager to learn and grow in my role.</p>
                        </div>
                        <div className="grid sm:grid-cols-3 grid-cols-2 gap-12 mt-4">
                            <div className='text-center p-4 drop-shadow-md border-b-2 border-sky-500 rounded-lg'>
                                <p className='text-sky-500 text-2xl font-bold'> 1 </p>
                                <p className={`font-bricolage mt-2 ${themeClass.textPrimary}`}>Years of experience</p>
                            </div>
                            <div className='text-center p-4 drop-shadow-md border-b-2 border-sky-500 rounded-lg'>
                                <p className='text-sky-500 text-2xl font-bold'> 2+ </p>
                                <p className={`font-bricolage mt-2 ${themeClass.textPrimary}`}>Freelance Work</p>
                            </div>
                            <div className='text-center p-4 drop-shadow-md border-b-2 border-sky-500 rounded-lg'>
                                <p className='text-sky-500 text-2xl font-bold'> 4+ </p>
                                <p className={`font-bricolage mt-2 ${themeClass.textPrimary}`}>Completed Projects</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default About