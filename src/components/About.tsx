
interface AboutProps{
    darkMode:boolean;
}

export default function About({darkMode}:AboutProps){
    
    return (
        <section id="about" className={`min-h-screen overflow-hidden items-center flex justify-center px-4 sm:px-6 ${darkMode?'bg-gray-900':'bg-gray-50'}`}>
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 ">
                <article 
                data-aos='fade-left'
                data-aos-delay='300'
                className=' lg:text-left relative order-1 lg:order-2 mt-16 sm:mt-0 md:mt-0'>
                    <header>
                        <h1 className="lg:mt-16 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 justify-center text-transparent bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text" data-aos='fade-up' data-aos-delay='400' >
                            About Me
                        </h1>
                    </header>
                    <p className={`text-sm sm:justify-start lg:text-sm xl:text-xl mb-6 sm:mb-8 leading-relaxed bg-linear-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm ${darkMode?'text-gray-300':'text-gray-700'} `}
                    data-aos='fade-up'
                    data-aos-delay='500'>
                        I’m a full-stack developer focused on building scalable, user-friendly web applications. I work with JavaScript, React, Node.js, Python, and the MERN stack to turn ideas into real-world solutions. <br />
                        Alongside development, I actively strengthen my problem-solving skills through Data Structures & Algorithms . I enjoy learning new technologies, building impactful projects, and continuously improving as a developer.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap06 lg:gap-8 mb-6 sm:mb-8">
                        <div className="text-center"
                        data-aos='zoom-in'
                        data-aos-delay='600'>
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 ">1+</div>
                            <div className={`text-xs sm:text-sm lg:text-base ${darkMode?'text-gray-300':'text-gray-600'}`}>
                              Education  
                            </div>
                        </div>
                        <div className="text-center"
                        data-aos='zoom-in'
                        data-aos-delay='600'>
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 ">1+</div>
                            <div className={`text-xs sm:text-sm lg:text-base ${darkMode?'text-gray-300':'text-gray-600'}`}>
                              Projects  
                            </div>
                        </div>
                        <div className="text-center"
                        data-aos='zoom-in'
                        data-aos-delay='600'>
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 ">1+</div>
                            <div className={`text-xs sm:text-sm lg:text-base ${darkMode?'text-gray-300':'text-gray-600'}`}>
                              Experience  
                            </div>
                        </div>
                    </div>
                    <button className={` sm:w-full inline-flex items-center text-center justify-center py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform border-2 border-orange-400`}>
                        Learn More
                    </button>
                </article>
            </div>
        </section>
    )
}