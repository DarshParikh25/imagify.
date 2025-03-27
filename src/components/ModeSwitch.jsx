import { useEffect, useContext } from "react";
import { darkThemeContext } from "../context/ContextAPI";

const ModeSwitch = () => {
    const { darkTheme, setDarkTheme } = useContext(darkThemeContext);
    
    useEffect(() => {
        if(darkTheme){
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
        } else {
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
        }
    }, [darkTheme])
    

    const handleModeSwitch = () => {
        setDarkTheme(!darkTheme)
    }

    return (
        <label className="flex items-center cursor-pointer">
            <div className="relative">
                <input 
                    type="checkbox" 
                    className="sr-only"
                />
                <div onClick={handleModeSwitch}>
                    <div className={`block transition duration-300 ${darkTheme ? "bg-[#111]" : "bg-gray-300"} border-2 border-white w-14 h-8 rounded-full`}></div>
                    <div className={`dot flex justify-center items-center absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition duration-300 ${darkTheme ? "translate-x-full" : ""}`}>
                        {darkTheme ? <img src="/src/assets/night-mode.png" alt="" /> : <img src="/src/assets/light-mode.png" alt="" />}
                    </div>
                </div>
            </div>
        </label>
    )
}

export default ModeSwitch