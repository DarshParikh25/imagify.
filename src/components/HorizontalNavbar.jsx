import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

const HorizontalNavbar = () => {
    const [searchValue, setSearchValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handleClear = () => {
        setSearchValue("");
    };

    return (
        <div className="p-10 w-[80%] fixed z-20 bg-white">
            <div 
                id="search" 
                className={`
                    flex items-center border-2 border-solid
                    ${isFocused ? 'border-[#333]' : 'border-[#a9a9a9]'}
                    py-3 px-5 rounded-full
                `}
            >
                <FaSearch className={`
                    h-full mr-3
                    ${isFocused ? 'text-[#333]' : 'text-gray-500'}
                `} />
                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Search for images"
                    className="pl-3 w-[95%] focus:outline-none border-l-2 border-solid border-[#a9a9a9] focus:border-l-2 focus:border-[#333]"
                />
                {searchValue && (
                    <IoMdCloseCircleOutline 
                        onClick={handleClear}
                        className="text-2xl ml-5 cursor-pointer" 
                    />
                )}
            </div>
        </div>
    );
};

export default HorizontalNavbar;