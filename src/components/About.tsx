
interface AboutProps{
    darkMode:boolean;
}

export default function About({darkMode}:AboutProps){
    
    return (
        <section id="about" className={`py-12 scroll-mt-12 overflow-hidden items-center flex justify-center px-4 sm:px-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Left Column: Visual Element (Code Window) */}
                <div className="relative order-2 lg:order-1 flex justify-center items-center w-full" data-aos="fade-right" data-aos-delay="200">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-linear-to-tr from-orange-500 to-amber-400 opacity-20 blur-3xl rounded-full scale-90"></div>
                    
                    {/* Glassmorphism Code Window */}
                    <div className={`relative w-full max-w-lg rounded-2xl border backdrop-blur-xl shadow-2xl overflow-hidden ${darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white/80 border-gray-200'}`}>
                        {/* Window Header */}
                        <div className={`flex items-center px-4 py-3 border-b ${darkMode ? 'border-gray-700 bg-gray-900/50' : 'border-gray-200 bg-gray-100/50'}`}>
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className={`mx-auto text-xs font-mono font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                developer.ts
                            </div>
                        </div>
                        
                        {/* Window Body */}
                        <div className="p-6 sm:p-8 font-mono text-sm sm:text-base leading-relaxed overflow-x-auto">
                            <div className="flex">
                                <span className="text-gray-500 select-none pr-4 text-right w-8">1</span>
                                <span className={`${darkMode ? 'text-purple-400' : 'text-purple-600'} font-bold`}>const</span>
                                <span className={`ml-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>developer</span>
                                <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>=</span>
                                <span className={`ml-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>{`{`}</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-500 select-none pr-4 text-right w-8">2</span>
                                <span className={`ml-4 sm:ml-8 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>name:</span>
                                <span className={`ml-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>'Ravi'</span><span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>,</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-500 select-none pr-4 text-right w-8">3</span>
                                <span className={`ml-4 sm:ml-8 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>role:</span>
                                <span className={`ml-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>'Full Stack Developer'</span><span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>,</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-500 select-none pr-4 text-right w-8">4</span>
                                <span className={`ml-4 sm:ml-8 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>skills:</span>
                                <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>[</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-500 select-none pr-4 text-right w-8">5</span>
                                <span className={`ml-8 sm:ml-12 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>'React'</span><span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>,</span>
                                <span className={`ml-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>'Node.js'</span><span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>,</span>
                                <span className={`ml-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>'Python'</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-500 select-none pr-4 text-right w-8">6</span>
                                <span className={`ml-4 sm:ml-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>],</span>
                            </div>
                            <div className="flex mt-1">
                                <span className="text-gray-500 select-none pr-4 text-right w-8">7</span>
                                <span className={`ml-4 sm:ml-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>workHard()</span>
                                <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{`{`}</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-500 select-none pr-4 text-right w-8">8</span>
                                <span className={`ml-8 sm:ml-12 ${darkMode ? 'text-purple-400' : 'text-purple-600'} font-bold`}>return</span>
                                <span className={`ml-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>'Success'</span><span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>;</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-500 select-none pr-4 text-right w-8">9</span>
                                <span className={`ml-4 sm:ml-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{`}`}</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-500 select-none pr-4 text-right w-8">10</span>
                                <span className={`${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>{`}`}</span><span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>;</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Text and Stats */}
                <article 
                data-aos='fade-left'
                data-aos-delay='300'
                className='lg:text-left relative order-1 lg:order-2 flex flex-col justify-center'>
                    <header>
                        <h2 className={`text-sm font-bold uppercase tracking-widest mb-2 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>Discover</h2>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-linear-to-r from-orange-400 to-amber-600 bg-clip-text drop-shadow-sm">
                            About Me
                        </h1>
                    </header>
                    
                    <div className={`mb-8 leading-relaxed text-base sm:text-lg border-l-4 border-orange-500 pl-4 sm:pl-6 py-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} data-aos='fade-up' data-aos-delay='400'>
                        <p className="mb-4">
                            I’m a full-stack developer focused on building scalable, user-friendly web applications. I work with JavaScript, React, Node.js, Python, and the MERN stack to turn ideas into real-world solutions.
                        </p>
                        <p>
                            Alongside development, I actively strengthen my problem-solving skills through Data Structures & Algorithms. I enjoy learning new technologies, building impactful projects, and continuously improving as a developer.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8" data-aos='fade-up' data-aos-delay='500'>
                        <div className={`p-4 rounded-xl text-center shadow-sm border transition-transform hover:-translate-y-1 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                            <div className="text-2xl sm:text-3xl font-black text-orange-500 mb-1">1+</div>
                            <div className={`text-xs sm:text-sm font-medium uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Years<br/>Edu</div>
                        </div>
                        <div className={`p-4 rounded-xl text-center shadow-sm border transition-transform hover:-translate-y-1 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                            <div className="text-2xl sm:text-3xl font-black text-orange-500 mb-1">10+</div>
                            <div className={`text-xs sm:text-sm font-medium uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Projects<br/>Built</div>
                        </div>
                        <div className={`p-4 rounded-xl text-center shadow-sm border transition-transform hover:-translate-y-1 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                            <div className="text-2xl sm:text-3xl font-black text-orange-500 mb-1">1+</div>
                            <div className={`text-xs sm:text-sm font-medium uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Years<br/>Exp</div>
                        </div>
                    </div>

                    <div data-aos='fade-up' data-aos-delay='600'>
                        <a href="#contact" className="inline-flex items-center justify-center py-3 px-8 rounded-full text-base font-bold text-white transition-all duration-300 transform bg-linear-to-r from-orange-500 to-amber-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-105 active:scale-95">
                            Let's Connect
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </article>
            </div>
        </section>
    )
}