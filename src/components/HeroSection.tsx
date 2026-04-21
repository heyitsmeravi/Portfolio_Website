import "./HeroSection.css";
// import instagram from "../assets/instagram.png"
// import facebook from "../assets/facebook.png"
// import github from "../assets/github.png"
// import linkedin from "../assets/linkedin.png"
// import MyLinkTree from "../assets/MyLinksTree.png"
// import youtube from "../assets/youtube.png"
import myPic from "../assets/myPic-removebg.png"
import { motion } from "framer-motion";
import { DownloadIcon,Mail} from "lucide-react";
import {FaInstagram, FaFacebook, FaGithub, FaLinkedin, FaYoutube} from "react-icons/fa"
import { Typewriter } from "react-simple-typewriter";
interface HeroSectionProps{
    darkMode:boolean;
}
export default function HeroSection({darkMode}:HeroSectionProps){
    const socialIcons= [
        {
            icon:<FaInstagram/>,alt:'instagram',link:'https://instagram.com/hey_itsme_ravi'
        },
        {
            icon:<FaFacebook/>,alt:'facebook',link:'https://www.facebook.com/heyitsmeravi1'
        },
        {
            icon:<FaGithub/>,alt:'github',link:'https://github.com/heyitsmeravi'
        },
        // {
        //     icon:MyLinkTree,alt:'MyLinkTree',link:''
        // },
        {
            icon:<FaYoutube/>,alt:'youtube',link:'https://www.youtube.com/@heyitsmeravi1'
        },
        {
            icon:<FaLinkedin/>,alt:'linkedin',link:'https://linkedin.com/in/heyitsmeravi'
        }
    ];
    const darkTheme={
        textPrimary:'text-white',
        textSecondary:'text-gray-300',
        buttonSecondary:'text-white border-2 border-orange-500 hover:bg-orange-600',
        decorativeCircle:'bg-orange-500 opacity-10'
    };
    const lightTheme={
        textPrimary:'text-gray-900',
        textSecondary:'text-gray-700',
        buttonSecondary:'text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white ',
        decorativeCircle:'bg-orange-400 opacity-20'
    };
    const theme= darkMode? darkTheme: lightTheme;
    return (
        <div className="relative overflow-hidden min-h-screen flex flex-col">
            <section
            id='home'
            data-aos='fade-up'
            data-aos-delat='250'
            className="body-font z-10">
                <div className="container mx-auto flex px-4 sm:px-8 lg:px-14 py-20 lg:py-32 flex-col lg:flex-row items-center justify-between lg:mt-0 mt-14">
                    <div className="lg:w-2/3 flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0" 
                    >
                        <div className="flex justify-center lg:justify-start gap-4 mb-6 sm:mb-7 w-full" >
                            {socialIcons.map((social,index)=>(
                                <motion.a key={index} 
                                href={social.link}
                                target="_blank" 
                                rel="noopener noreferrer"
                                data-aos-delay={`${400+index*100}`}
                                className={`transform hover:scale-110 transition-transform duration-300 text-4xl sm:w-10 sm:h-10 object-contain hover:text-[#f4a300]`}
                                whileHover={{y:-5}}

                                >
                                    {/* <img src={social.icon} alt={social.alt}
                                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-lg ${darkMode ?'':'filter brightness-85'}`}
                                    /> */}
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                        <h1 className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
                        data-aos='fade-up'
                        data-aos-delay='500'
                        >
                            Hi, I'm Ravi Kumar
                        </h1>
                        <h2 className=" sm:text-2xl font-bold">
                        and I am a{" "}
                        <span className="text-orange-500 text-3xl " data-aos='fade-up'
                        data-aos-delay='600'>
                            <Typewriter
                            words={["Programmer", "Coder", "Developer", "Tech Enthusiast"]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                            />
                        </span>
                        </h2>
                        <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
                        data-aos='fade-up'
                        data-aos-delay='600'
                        data-aos-once='true'>
                            Currently pursuing B.Tech in Information Technology at Muzaffarpur Institute of Technology, and I am passionate about 
                            Software Development, Data Science, and innovative Technologies. My goal is to leverage my skills to solve real-world problems and create impactful solutions.
                        </p>
                        <div className="sm:w-full pt-4 sm:pt-6">
                            <div className="flex sm:flex-row justify-center lg:justify-start gap-3 sm:gap-5"
                            data-aos='fade-up'
                            data-aos-delay='700'>
                                <a href="/Resume.pdf" download className=" sm:w-1/2"> 
                                    <button className=" sm:w-full inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform">
                                       <DownloadIcon className="w-4 h-4 sm:h-5 sm:w-5 mr-2"/>    Download CV
                                    </button>
                                </a>
                                <a href="#contact" className=" text-center sm:w-1/2">
                                    <button className={` sm:w-full inline-flex items-center text-center justify-center ${theme.buttonSecondary}  py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform`}>  
                                        <Mail className="w-4 h-4 sm:h-5 sm:w-5 mr-2 "/>Contact Me
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className=" max-w-md lg:max-w-lg mt-8 lg:mt-0 flex "
                    data-aos='fade-left'
                    data-aos-delay='400'>
                        <div className="relative overflow-hidden flex justify-center" >
                            <div className=" relative overflow-hidden flex ">
                                <img src={myPic} alt="my Image" className="w-85 object-cover transform hover:scale-105 transition-transform duration-500"/>
                            </div>
                        </div>
                    </div>
                    <div className={`absolute -top-20 -left-20 h-40 w-40 sm:w-64 sm:h-64 mixed-blend-multiply rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000 ${theme.decorativeCircle}`}>
                    </div>
                </div>
                
            </section>
        </div>
    );
}