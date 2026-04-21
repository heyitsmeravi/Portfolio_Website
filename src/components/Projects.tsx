import melodix from '../assets/melodix.png'
import calculator from '../assets/calculator.png'
import mangata_gallo from '../assets/mangata_gallo.png'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
interface ProjectsProps{
    darkMode:boolean;
}

const Projects=({darkMode}:ProjectsProps)=>{
    const projects=[
        {id:1,title:'Melodix: A Music Webplayer',desc:'It is a music webplayer built using html, css, js',image:melodix,tags:['html','css','java'],demo:'https://heyitsmeravi.github.io/Melodix/',code:'https://github.com/heyitsmeravi/Melodix'},
        {id:2,title:'Calculator',desc:'Dual theme calculator',image:calculator,tags:['html','css','java'],demo:'https://heyitsmeravi.github.io/Portfolio/Projects/Calculator_with_dual_Theme/index.html',code:'https://github.com/heyitsmeravi/Portfolio/blob/main/Projects/Calculator_with_dual_Theme/index.html'},
        {id:3,title:'Mangata and Gallo Website',desc:'Jewellery Shopping Website',image:mangata_gallo,tags:['html','css','java'],demo:'https://heyitsmeravi.github.io/Mangata_Gallo_Website/index.html',code:'https://github.com/heyitsmeravi/Mangata_Gallo_Website'}

    ];
    return(
        <section id="projects" 
        className={`relative py-12 scroll-mt-12 overflow-hidden ${darkMode?'bg-gray-900':'bg-gray-50'}`}>
            <div className='container mx-auto px-4'>
                 <div className='text-center sm:text-4xl font-bold mb-3'>
                    <h2 style={{color:darkMode?'white':'#1f2937'}} className='text-3xl sm:text-4xl font-bold mb-3'>
                    My <span style={{background:'linear-gradient(to right, #f97316, #f59e0b)',
                        backgroundClip:'text',
                        WebkitBackgroundClip:'text',
                        color:'transparent'
                        }}>Projects</span>    
                    </h2>
                    <p className='max-w-xl mx-auto text-sm sm:text-base mb-12'
                    style={{color:darkMode?'#d1d5db':'#6b7280'}}
                    >A showcase of my recent projects</p>
                </div>
                <div className='flex flex-col gap-20 sm:gap-32 mb-12 mt-16'>
                    {projects.map((project, index) => (
                        <div key={project.id} 
                             className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                             data-aos='fade-up'
                             data-aos-delay={100}>
                            
                            {/* Image Section */}
                            <div className="w-full lg:w-3/5 relative group z-10" data-aos={index % 2 !== 0 ? 'fade-left' : 'fade-right'}>
                                {/* Offset decorative background */}
                                <div className={`absolute inset-0 bg-linear-to-br from-orange-500 to-orange-600 opacity-50 rounded-2xl transform transition-transform duration-500 ${index % 2 !== 0 ? '-translate-x-3 sm:-translate-x-4' : 'translate-x-3 sm:translate-x-4'} translate-y-3 sm:translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6`}></div>
                                
                                <div className={`relative overflow-hidden rounded-2xl shadow-2xl border ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
                                    <img src={project.image} alt={project.title} 
                                         className="w-full h-[250px] sm:h-[350px] lg:h-[400px] object-contain transition-transform duration-700 group-hover:scale-105" />
                                    
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                                         <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-4 bg-orange-500 rounded-full text-white transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:bg-amber-500 hover:scale-110">
                                             <FaExternalLinkAlt size={24} />
                                         </a>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className={`w-full lg:w-2/5 flex flex-col relative z-20 text-center ${index % 2 !== 0 ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}>
                                
                                {/* Background Number */}
                                <span className={`text-[8rem] lg:text-[12rem] font-black absolute -top-16 lg:-top-24 opacity-[0.03] select-none pointer-events-none ${darkMode ? 'text-white' : 'text-black'}`}
                                      style={{[index % 2 !== 0 ? 'right' : 'left']: '0'}}>
                                    0{index + 1}
                                </span>
                                
                                <h4 className="text-orange-500 font-mono text-sm sm:text-base tracking-widest uppercase mb-2 sm:mb-3 relative z-10 font-bold">
                                    Featured Project
                                </h4>
                                
                                <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 relative z-10 ${darkMode ? 'text-white' : 'text-gray-900'} drop-shadow-sm`}>
                                    {project.title}
                                </h3>
                                
                                {/* Description Card */}
                                <div className={`p-6 sm:p-8 rounded-xl shadow-xl mb-6 relative z-30 w-full ${darkMode ? 'bg-gray-800/95 backdrop-blur-md border border-gray-700 text-gray-300' : 'bg-white/95 backdrop-blur-md border border-gray-100 text-gray-600'} ${index % 2 !== 0 ? 'lg:mr-[-10%]' : 'lg:ml-[-10%]'}`}
                                     data-aos='fade-up' data-aos-delay='200'>
                                    <p className="text-base sm:text-lg leading-relaxed">
                                        {project.desc}
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className={`flex flex-wrap gap-3 sm:gap-4 mb-8 relative z-10 font-mono text-xs sm:text-sm justify-center ${index % 2 !== 0 ? 'lg:justify-end' : 'lg:justify-start'}`}
                                     data-aos='fade-up' data-aos-delay='300'>
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className={`px-3 py-1 rounded-md ${darkMode ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' : 'bg-orange-50 text-orange-600 border border-orange-200'}`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className={`flex gap-6 sm:gap-8 relative z-10 justify-center ${index % 2 !== 0 ? 'lg:justify-end' : 'lg:justify-start'}`}
                                     data-aos='fade-up' data-aos-delay='400'>
                                     <a href={project.code} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 font-bold transition-all hover:-translate-y-1 ${darkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-700 hover:text-orange-500'}`}>
                                        <FaGithub size={22}/> <span className="text-base">View Code</span>
                                     </a>
                                     <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 font-bold transition-all hover:-translate-y-1 ${darkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-700 hover:text-orange-500'}`}>
                                        <FaExternalLinkAlt size={20}/> <span className="text-base">Live Demo</span>
                                     </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                

            </div>
        </section>
    )
};
export default Projects;