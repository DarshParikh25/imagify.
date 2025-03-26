import { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import ModeSwitch from "./ModeSwitch";
import { darkThemeContext } from "../context/ContextAPI";

const Navbar = () => {
    const { darkTheme } = useContext(darkThemeContext);

    const [searchValue, setSearchValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handleClear = () => {
        setSearchValue("");
    };

    return (
        <div id="navbar" className={`${darkTheme ? "bg-black" : "bg-white"} pr-10 py-10 pl-6 ml-4 w-[80%] justify-between items-center flex fixed z-20`}>
            <div 
                id="search" 
                className={`
                    flex items-center border-2 border-solid
                    ${isFocused ? 'border-blue-600' : 'border-[#a9a9a9]'}
                    py-3 px-5 w-[93%] rounded-full transition-colors duration-300
                `}
            >
                <FaSearch className={`
                    h-full mr-3 transition-colors duration-300
                    ${isFocused ? 'text-blue-600' : 'text-gray-500'}
                `} />
                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Search for images"
                    className="pl-3 bg-transparent w-[95%] outline-none border-l-2 border-solid border-[#a9a9a9] focus:border-l-2 focus:border-blue-600 transition-colors duration-300"
                />
                {searchValue && (
                    <IoMdCloseCircleOutline 
                        onClick={handleClear}
                        className="text-2xl ml-5 cursor-pointer" 
                    />
                )}
            </div>
            <ModeSwitch />
        </div>
    );
};

export default Navbar;