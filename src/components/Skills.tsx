import React from "react";
import { FaPython,FaJs,FaReact} from "react-icons/fa";
import {SiCplusplus ,SiTailwindcss} from "react-icons/si";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
const Skills= ({darkMode})=>{
    const skills=[
        {name:'Python', icon:<FaPython/>,level:95,color:'from-orange-500 to-amber-500'},
        {name:'TailwindCSS', icon:<SiTailwindcss/>,level:95,color:'from-blue-500 to-cyan-500'},
        {name:'React', icon:<FaReact/>,level:95,color:'from-yellow-500 to-amber-500'},
        {name:'C++', icon:<SiCplusplus/>,level:95,color:'from-cyan-500 to-blue-500'},
        {name:'JavaScript', icon:<FaJs/>,level:95,color:'from-teal-500 to-cyan-500'},

    ];
    return (
        <section id="skills" 
        style={{backgroundColor:darkMode?'#111827':'#f9fafb'}}
        className="py-14 relative overflow-hidden">
            <div className="py-14 relative overflow-hidden">
                <div className="container px-5 py-14 mx-auto">
                   <div className="text-center mb-20" 
                   data-aos='fade-up'
                   data-aos-delay='500'>
                    <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4" 
                    style={{color:darkMode?'white':'#1f2937'}}>
                        My <span style={{background:'linear-gradient(to right, #f97316, #f59e0b)',
                        backgroundClip:'text',
                        WebkitBackgroundClip:'text',
                        color:'transparent'
                        }}
                        >Skills</span>
                    </h1>
                    <p className='text-lg max-w-2xl max-auto leading-relaxed'
                    style={{
                        color:darkMode?'#d1d5db':'#4b5563'
                    }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quisquam neque aliquam quae? Accusantium blanditiis laboriosam vel doloremque praesentium. Repellat blanditiis amet ratione reprehenderit tenetur vero, optio ipsa, rem magni architecto aperiam aut! Itaque ad alias eveniet veniam dignissimos ut reprehenderit earum autem est nobis sapiente natus quia distinctio ipsum, quisquam 
                    </p>
                    </div>
                    <div className="flex flex-wrap -m-4 " data-aos='fade-up'
                    data-aos-delay='200'>
                          {skills.map((skill,index)=>(
                            <div key={index}
                            className="p-4 lg:w-1/4 md:w-1/2 w-full"
                            data-aos='fade-up'
                            data-aos-delay={`${300 +index *100}`}>
                                <div style={{background:darkMode?'linear-gradient(to bottom right , #1f2937, #111827)':'linear-gradient(to bottom right , #ffffff, #f3f4f6)',
                                borderColor:darkMode?'#374151':'#e5e7eb'
                                }}
                                className="h-full p-6 rounded-2xl border hover:border-orange-500/50  transition-all duration-300 hover:translate-y-2 group hover:shadow-[0_0_30px_rgba(255,165,0,0,0.15)]">
                                    <div className="flex items-center mb-6">
                                            <div style={{background:darkMode?'linear-gradient(to bottom right , #374151, #1f2937)':'linear-gradient(to bottom right , #f3f4f6, #e5e7eb)'
                                                        }}
                                            className="w-16 h-16 rounded-xl p-3 flex items-center justify-center group-hover:scale-110transition-transform duration-300">
                                                <motion.div key={index} 
                                                data-aos-delay={`${400+index*100}`}
                                                className={`transform w-full h-full object-contain hover:scale-110 transition-transform duration-300 text-4xl sm:w-10 sm:h-10 hover:text-[#f4a300]`}
                                                whileHover={{y:-5}}
                                                >
                                                   {skill.icon} 
                                                </motion.div>
                                            </div>
                                            <h3 className="text-2xl font-bold ml-4" style={{color:darkMode?'white':'#1f2937'}}>{skill.name}</h3>
                                        </div>
                                        {/* <div className="mb-2 flex justify-between items-center">
                                            <span className="font-medium"
                                            style={{color:darkMode?'#d1d5db':'#6b7280'}}>
                                                Proficiency
                                            </span>
                                            <span 
                                            style={{background:'linear-gradient(to right, #f97316,#f59e0b',
                                                WebkitBackgroundClip:'text',
                                                backgroundClip:'text',
                                                color:'transparent'
                                            }}
                                            className="'font-bold"> {skill.level}%
                                            </span>
                                        </div> */}
                                        {/* <div className="w-full rounded-full h-3 overflow-hidden"
                                        style={{backgroundColor:darkMode?'#374151':'#e5e7eb'}}>
                                            <div className={`h-full rounded-full bg-linear-to-r ${skill.color} transition-all duration-1000 ease-out`}
                                            style={{width:`${skill.level}%`}}>
                                            </div> 
                                        </div> */}
                                        <div className={`mt-6 pt-4 border-t ${darkMode?'border-gray-700':'border-gray-300'}}`}>
                                            <div className="h-1 rounded-full opacity-70 group-hover:w-full transition-all duration-500 w-1/3"
                                            style={{background:'linear-gradient(to right,#f97316,#f59eb0)'}}>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        ))}
                        
                    </div> 
                </div>
            </div>
        </section>
    )
}
export default Skills;