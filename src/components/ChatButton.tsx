import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
const ChatButton = () => {
  return (
    <motion.a
      href="https://wa.me/+917494002956"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-linear-to-l from-orange-500 to-amber-500 hover:bg-green-600 text-white font-bold py-2 px-2 rounded-full transition duration-300 ease-in-out fixed bottom-8 right-8 shadow-lg hover:shadow-xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      data-aos='zoom-in'
      data-aos-delay='600'  
    >
      <div className="w-11 h-11 rounded-full flex items-center justify-center"><FaWhatsapp className="h-9 w-9"/></div>
    </motion.a>
  );
};
export default ChatButton;