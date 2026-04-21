
import { FaGithub, FaHeart, FaInstagram, FaLinkedin } from "react-icons/fa";
interface FooterProps{
    darkMode:boolean;
}

const Footer= ({darkMode}:FooterProps)=>{
    const currentYear= new Date().getFullYear();

    return (
        <footer 
        style={{
            background:darkMode
            ?'linear-gradient(to bottom , #000000,#111827)'
            :'linear-gradient(to bottom, #f3f4f6,#e5e7eb)',
            borderColor:darkMode?'#374151':'d1d5db'
        }}
        className="border-t"
        >
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col justify-between items-center gap-6 w-full">
                    <div className="text-center ">
                        <h3
                         className={` text-2xl font-bold mb-2 text-orange-500 dark:text-white`} >
                            Portfolio
                        </h3>
                        <p className="text-sm"
                        style={{color:darkMode?'#9ca3af':'#6b7280'}}>
                            Full Stack Developer
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://www.github.com/heyitsmeravi" rel="noopener norefferere" target="_blank"
                        className="w-6 h-6 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-orange-500 hover:to-amber-500
                        hover:text-white text-white bg-[#374151] dark:bg-[#f3f4f6]  dark:text-[#000000]">
                            <FaGithub className="w-4 h-4 "/>
                        </a>
                        <a href="https://www.instagram.com/hey_itsme_ravi"
                        className="w-6 h-6 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-orange-500 hover:to-amber-500
                        hover:text-white text-white bg-[#374151] dark:bg-[#f3f4f6]  dark:text-black">
                            <FaInstagram className="w-4 h-4 "/>
                        </a>
                        <a href="https://www.linkedin.com/in/heyitsmeravi"
                        className="w-6 h-6 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-orange-500 hover:to-amber-500
                        hover:text-white text-white  bg-[#374151] dark:bg-[#f3f4f6]  dark:text-black">
                            <FaLinkedin className="w-4 h-4 "/>
                        </a>
                    </div>
                    <div className="w-full flex justify-center">
                        <div
                            className="w-1/2 h-[3px]"
                            style={{
                            background: "radial-gradient(ellipse at center, rgba(251,146,60,1) 0%, rgba(251,146,60,0.6) 40%, rgba(251,146,60,0) 80%)"
                            }}
                        ></div>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="text-sm flex items-center justify-end gap-1 text-[#6b7280] dark:text-[#9ca3af]">
                            @ {currentYear} Made with <FaHeart className="text-red-500"/>
                            by <span>
                                Ravi
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;