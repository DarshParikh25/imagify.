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
                    <div className={`block bg-gray-300 w-14 h-8 rounded-full`}></div>
                    <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${darkTheme ? "translate-x-full" : ""}`}></div>
                </div>
            </div>
        </label>
    )
}

export default ModeSwitch