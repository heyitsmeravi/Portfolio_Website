import React from "react";
import { FaPython,FaJs,FaReact, FaNodeJs, FaHtml5, FaCss3} from "react-icons/fa";
import { SiExpress, SiMongodb,SiPostman  } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import {SiCplusplus ,SiTailwindcss} from "react-icons/si";
import { motion } from "framer-motion";
import { FaGithub, } from "react-icons/fa";
import { div } from "framer-motion/client";
import { TbBrandFramerMotion } from "react-icons/tb";
const Skills= ({darkMode})=>{
    const skillCategories = [
        {
            title: "Languages",
            skills: [
            { name: "Python", icon: <FaPython /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "C++", icon: <SiCplusplus /> },
            ],
        },
        {
            title: "Frontend",
            skills: [
            { name: "React", icon: <FaReact /> },
            { name: "TailwindCSS", icon: <SiTailwindcss /> },
            {name:"Framer Motion", icon:<TbBrandFramerMotion/>},
            {name:"HTML5",icon:<FaHtml5/>},
            {name:"CSS3",icon:<FaCss3/>}
            ],
        },
        {
            title: "Backend",
            skills: [
            { name: "Node.js", icon: <FaNodeJs/> },
            { name: "Express", icon: <SiExpress /> },
            ]
        },
        {
            title: "Database",
            skills: [
            { name: "MongoDB", icon: <SiMongodb /> },
            ]
        },
        {
            title: "Tools",
            skills: [
            { name: "Git", icon: <FaGitAlt /> },
            {name:"VS Code", icon:<VscVscode/> },
            { name: "GitHub", icon: <FaGithub /> },
            { name: "Postman", icon: <SiPostman /> },
            ],
        },
        {
            title: "Core Concepts",
        skills: [
            { name: "Data Structures & Algorithms" },
            { name: "OOP" },
            { name: "Problem Solving" },
            { name: "REST APIs" }
        ]}
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
                    <p className='text-center font-semibold text-lg leading-relaxed'
                    style={{
                        color:darkMode?'#d1d5db':'#4b5563'
                    }}>
                        I build scalable and responsive web applications using modern technologies. From crafting interactive UIs with React to designing backend APIs with Node.js,I focus on performance, clean code, and real-world problem solving.
                    </p>
                    </div>
                    <h2 className="font-bold text-2xl">Tech Stack</h2> <br />
                    <div className="flex flex-wrap -m-4 " data-aos='fade-up'
                    data-aos-delay='200'>
                          {skillCategories.map((skillCategory,index)=>(
                            <div key={index}
                            className="p-3 w-full sm:w-1/2 md:w-1/3 "
                            data-aos='fade-up'
                            data-aos-delay={`${300 +index *100}`}>
                                <div style={{background:darkMode?'linear-gradient(to bottom right , #1f2937, #111827)':'linear-gradient(to bottom right , #ffffff, #f3f4f6)',
                                borderColor:darkMode?'#374151':'#e5e7eb'
                                }}
                                className="h-full p-4 rounded-2xl border hover:border-orange-500/50 transition-all duration-300 hover:translate-y-2 group hover:shadow-[0_0_30px_rgba(255,165,0,0,0.15)]">
                                    <h2 className="text-xl font-bold mb-4 relative inline-block ">
                                    {skillCategory.title}
                                    <span className="absolute left-0 -bottom-1 w-1/2 h-1 bg-linear-to-r from-orange-500 to-yellow-400 rounded-full flex"></span>
                                    </h2>
                                    <div className="flex gap-2 flex-wrap">
                                    {skillCategory.skills.map((skill,index)=>(
                                        <div className="flex  items-center">
                                            <div style={{background:darkMode?'linear-gradient(to bottom right ,#374151, #1f2937)':'linear-gradient(to bottom right , #f3f4f6, #e5e7eb)'
                                            }}
                                            className=" rounded-xl p-2 flex items-center object-contain justify-center transition-transform duration-300">
                                                <motion.div key={index} 
                                                data-aos-delay={`${400+index*100}`}
                                                className={`transform w-full h-full object-contain hover:scale-105 transition-transform duration-300  hover:text-[#f4a300]`}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                whileHover={{ y: -5 }}
                                                >
                                                    {skill.icon} 
                                                </motion.div>
                                                <h3 className="text-sm font-medium ml-2 whitespace-nowrap" style={{color:darkMode?'white':'#1f2937'}}>{skill.name}</h3>
                                            </div>
                                        </div>
                                    ))}
                                    </div>
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