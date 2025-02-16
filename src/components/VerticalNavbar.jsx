import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RiHome5Fill, RiHome5Line } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { FiCompass, FiMessageSquare, FiBell } from "react-icons/fi";
import ProfileDropdown from "./ProfileDropdown";

const VerticalNavbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    { name: "Home", icon: activeItem === "Home" ? RiHome5Fill : RiHome5Line },
    { name: "Categories", icon: BiCategory },
    { name: "Explore", icon: FiCompass },
    { name: "Messages", icon: FiMessageSquare },
    { name: "Notifications", icon: FiBell }
  ];

  return (
    <div 
      id="vertical" 
      className="h-screen flex flex-col border-r-2 border-solid border-r-[#a9a9a951] justify-start py-10 gap-[8rem]"
    >
      <div id="logo" className="flex w-full justify-between items-center px-8">
        <h1 className="text-3xl font-extrabold">Imagify.</h1>
        <ProfileDropdown />
      </div>
      
      <div id="menu-items" className="px-8 text-xl font-semibold">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.name;
          
          return (
            <div
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`
                flex items-center justify-between
                mb-5 pb-5 border-b-2 border-solid border-[#a9a9a951]
                cursor-pointer transition-all duration-200
                ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-400'}
              `}
            >
              <div className="flex items-center gap-3">
                <Icon className={`text-2xl ${isActive ? 'text-blue-600' : 'text-gray-700'}`} />
                <h3>{item.name}</h3>
              </div>
              {item.name === "Categories" && (
                <span className={`text-xl ${isActive ? 'text-blue-600' : 'text-gray-700'}`}>
                  <IoIosArrowForward />
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div 
        id="footer" 
        className="flex flex-col justify-center items-center text-xs text-[#202020] absolute bottom-[2.5%] left-[13%]"
      >
        <p>Copyright &copy; 2025 | All rights reserved.</p>
        <p className="font-bold">Imagify.</p>
      </div>
    </div>
  );
};

export default VerticalNavbar;