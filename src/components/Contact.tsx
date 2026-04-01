import { useState } from "react";
import emailjs from "emailjs-com";
import { Mail ,Phone,MapPin} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import toast from "react-hot-toast";
const Contacts=({darkMode})=>{
    const initialFormData={
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    };
    const [formData, setFormData] = useState(initialFormData);
    const [status, setStatus]=useState("idle");
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        setStatus("sending");
        emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY
        )
        .then(() => {
            setStatus("success");
            toast.success("Message sent successfully!");
            setTimeout(() => {
            setStatus("idle");
            setFormData(initialFormData); 
        }, 10000);
        })
        .catch(() => {
            setStatus("error");
            toast.error("Failed to send message.");
        });
    };

    return (
        <section id="contact" style={{backgroundColor:darkMode?'#111827':'#f9fafb'}} 
        className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden" >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-10 md:mb-12"
                data-aos='fade-up'>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
                    style={{color:darkMode?'white':'#1f2937'}}>Get In <span 
                    style={{background:'linear-gradient(to right ,#f97316,#f59e0b)',
                    WebkitBackgroundClip:'text',
                    backgroundClip:'text',
                    color:'transparent'
                    }}
                    >
                        Touch
                    </span> 
                    </h2>
                    <h3>
                        Let's discuss your project
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl"
                    style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
                    Have an idea, project, or opportunity in mind? Let’s make it real. I enjoy building clean, impactful digital experiences and I’m always open to meaningful collaborations. Whether you’re a recruiter, developer, or someone with a vision, feel free to reach out — I’d love to connect and create something valuable together. 
                    </p>
                </div>

                {/* form and contact info container */}

                <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 items-center">  
                    <div>
                    <form onSubmit={handleSubmit}
                        style={{background:darkMode?
                            'linear-gradient(to right,#1f2937,#111827)':'linear-gradient(to right,#ffffff, #f9fafb)',
                            borderColor:darkMode?'#374151':'e5e7eb'
                        }}
                        className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2"
                        data-aos='fade-left'
                        data-aos-delay='300'
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <div className="flex flex-col mb-4 sm:mb-6">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1"
                                style={{color:darkMode?'#d1d5db':'#6b7280'}}>
                                    Contact Me 
                                </h1>
                                <p className="text-sm sm:text-base"
                                    style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                                    Feel free to reach out for collaborations, opportunities, or just a quick chat. <br />

                                    I usually respond within 24 hours.
                                </p>

                                <div className="flex flex-col gap-3 mt-2">
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <Mail className="text-orange-400" size={22}  />
                                        </div>
                                        <div>
                                            <div>
                                                <h3 className=" text-lg font-semibold">Email</h3>
                                            </div>
                                            <div>
                                                <a href="mailto:ravijnv2428@gmail.com" className="hover:text-orange-500 transition">ravijnv2428@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <Phone className="text-orange-400" size={22}  />
                                        </div>
                                        <div>
                                            <div>
                                                <h3 className=" text-lg font-semibold">Phone</h3>
                                            </div>
                                            <div>
                                                <a href="tel:7494002956"
                                    className="hover:text-orange-500 transition">+91 7494002956</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <MapPin className="text-orange-400" size={22}/>
                                        </div>
                                        <div>
                                            <div>
                                                <h3 className=" text-lg font-semibold">Address</h3>
                                            </div>
                                            <div>
                                                <a href="https://maps.google.com/?q=Gaya,Bihar" target="_blank" className="hover:text-orange-500 transition">Gaya, Bihar, India</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold">Follow me</h2>
                                        <div className="flex gap-2 text-4xl mt-3 mb-6">
                                            <a href="https://www.github.com/heyitsmeravi" rel="noopener noreferrer" target="_blank"
                                            className="p-2 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-orange-500 hover:to-amber-500
                                             hover:text-white text-white bg-[#374151] dark:bg-[#f3f4f6]  dark:text-[#000000]">
                                                <FaGithub  className="w-4 h-4 sm:w-5 sm:h-5"/>
                                            </a>
                                            <a href="https://www.instagram.com/hey_itsme_ravi" rel="noopener noreferrer" target="_blank"
                                            className="p-2 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-orange-500 hover:to-amber-500
                                            hover:text-white text-white bg-[#374151] dark:bg-[#f3f4f6]  dark:text-black">
                                                <FaInstagram  className="w-4 h-4 sm:w-5 sm:h-5"/>
                                            </a>
                                            <a href="https://www.linkedin.com/in/heyitsmeravi" rel="noopener noreferrer" target="_blank"
                                            className="p-2 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-orange-500 hover:to-amber-500
                                            hover:text-white text-white  bg-[#374151] dark:bg-[#f3f4f6]  dark:text-black">
                                                <FaLinkedin  className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-4">
                                    <input 
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}   
                                    style={{
                                        backgroundColor:darkMode?'#374151':'#faede3',
                                        borderColor:darkMode?'#4b5563':'#d1d5db',
                                        color:darkMode?'white':'#1f2937'
                                    }}
                                    className="lg:w-1/2 w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                                    required
                                    />
                                    <input 
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    style={{
                                        backgroundColor:darkMode?'#374151':'#faede3',
                                        borderColor:darkMode?'#4b5563':'#d1d5db',
                                        color:darkMode?'white':'#1f2937'
                                    }}
                                    className="lg:w-1/2 w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                                    required
                                    />
                                </div>
                                
                
                                <input 
                                type="text"
                                placeholder="Email Address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                style={{
                                    backgroundColor:darkMode?'#374151':'#faede3',
                                    borderColor:darkMode?'#4b5563':'#d1d5db',
                                    color:darkMode?'white':'#1f2937'
                                }}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                                required
                                />
                                <input 
                                type="text"
                                placeholder="Phone Number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                style={{
                                    backgroundColor:darkMode?'#374151':'#faede3',
                                    borderColor:darkMode?'#4b5563':'#d1d5db',
                                    color:darkMode?'white':'#1f2937'
                                }}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                                required
                                />
                                <textarea
                                name="message"
                                rows='4'
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                style={{
                                    backgroundColor:darkMode?'#374151':'#faede3',
                                    borderColor:darkMode?'#4b5563':'#d1d5db',
                                    color:darkMode?'white':'#1f2937'
                                }}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-4 sm:mb-6 resize-none"
                                required
                                />
                                <button
                                type="submit"
                                disabled={status === "sending"}
                                
                                className={`w-full py-2 sm:py-3 text-white font-semibold rounded-lg text-sm sm:text-base 
                                transition-all ${status === "sending"
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02]"
                                }`}  
                                style={{ background: 'linear-gradient(to right,#f97316,#f59e0b)' }}
                                >
                                    {status === "sending" ? (
                                        <>
                                        <span className="w-2 h-2 border-2 border-white border-t-black rounded-full animate-spin"></span>
                                        Sending...
                                        </>
                                    ) : status === "success" ? (
                                        "Message Sent ✅"
                                    ) : status === "error" ? (
                                        "Try Again ❌"
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                                
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default  Contacts;