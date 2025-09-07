import { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { RiGalleryLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [userData] = useState({
    name: "Darsh Parikh",
    email: "darshparikh00@example.com",
    joinDate: "Jan 2005",
  });

  const isDark = useSelector((state) => state.ui.isDark);

  return (
    <div id="profile" className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex gap-1 justify-center items-center hover:opacity-80 transition-all duration-300 ${
          isDark && "text-white"
        }`}
      >
        <IoPersonCircle className="text-[2.5rem]" />
        {isOpen ? (
          <IoIosArrowUp className="text-xl" />
        ) : (
          <IoIosArrowDown className="text-xl" />
        )}
      </button>

      {isOpen && (
        <div
          className={`absolute -right-12 mt-2 w-72 rounded-lg shadow-lg ${
            isDark ? "bg-[#111] text-white" : "bg-white text-black"
          } border border-gray-200 z-20 transition-all duration-500`}
        >
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <IoPersonCircle className="text-4xl text-gray-600" />
              <div>
                <h3 className="font-bold text-lg">{userData.name}</h3>
                <p className="text-sm text-gray-600">{userData.email}</p>
              </div>
            </div>
          </div>

          <div className="p-2">
            <button
              className={`${
                isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
              } w-full px-4 py-2 text-left flex items-center gap-3 rounded-md transition-colors`}
            >
              <RiGalleryLine className="text-xl" />
              <span>My Gallery</span>
            </button>

            <button
              className={`${
                isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
              } w-full px-4 py-2 text-left flex items-center gap-3 rounded-md transition-colors`}
            >
              <FiSettings className="text-xl" />
              <span>Settings</span>
            </button>

            <button
              className={`${
                isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
              } w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-100 rounded-md transition-colors text-red-600`}
            >
              <FiLogOut className="text-xl" />
              <span>Log Out</span>
            </button>
          </div>

          <div
            className={`p-3 border-t border-white ${
              isDark ? "bg-[#111] text-white" : "bg-white text-black"
            } text-xs rounded-b-lg transition-all duration-500`}
          >
            Member since {userData.joinDate}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
