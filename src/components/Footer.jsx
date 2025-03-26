import { useContext } from "react";
import { darkThemeContext } from "../context/ContextAPI";

const Footer = () => {
    const { darkTheme } = useContext(darkThemeContext);

    return (
        <div 
        id="footer" 
        className={`flex flex-col justify-center items-center text-xs absolute bottom-[2.5%] left-[13%] ${darkTheme ? "text-white" : "text-[#202020]"}`}
        >
            <p>Copyright &copy; 2025 | All rights reserved.</p>
            <p className="font-bold">Imagify.</p>
        </div>
    )
}

export default Footer
