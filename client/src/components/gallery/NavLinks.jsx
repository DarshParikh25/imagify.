import { IoIosArrowForward } from "react-icons/io";
import { RiHome5Fill, RiHome5Line } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { FiCompass, FiMessageSquare, FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProfileDropdown from "./ProfileDropdown";
import Footer from "./Footer";
import { setActiveLink } from "../../slice/uiSlice";

const NavLinks = () => {
  const activeLink = useSelector((state) => state.ui.activeLink);
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.ui.isDark);

  const menuItems = [
    { name: "Home", icon: activeLink === "Home" ? RiHome5Fill : RiHome5Line },
    { name: "Categories", icon: BiCategory },
    { name: "Explore", icon: FiCompass },
    { name: "Messages", icon: FiMessageSquare },
    { name: "Notifications", icon: FiBell },
  ];

  return (
    <section
      id="vertical"
      className="h-screen flex flex-col border-r-2 border-solid border-r-[#a9a9a951] justify-start py-10 gap-[8rem]"
    >
      <div id="logo" className="flex w-full justify-between items-center px-8">
        <img
          src={!isDark ? "/light-logo.png" : "/logo.png"}
          alt="logo"
          onClick={() => {
            dispatch(setActiveLink("Home"));
          }}
          className="w-32 cursor-pointer"
        />
        <ProfileDropdown />
      </div>

      <div
        id="menu-items"
        className={`px-8 text-xl font-semibold ${
          isDark ? "text-white" : "text-gray-700"
        }`}
      >
        {menuItems.map((item) => (
          <Link
            to={`/${item.name === "Home" ? "posts" : item.name.toLowerCase()}`}
            key={item.name}
            onClick={() => {
              dispatch(setActiveLink(item.name));
            }}
            className={`
                menu-link flex items-center justify-between
                mb-5 pb-5 border-b-2 border-solid border-[#a9a9a951]
                cursor-pointer transition-all duration-200
                ${
                  activeLink === item.name
                    ? "text-blue-600"
                    : "hover:text-blue-400"
                }
              `}
          >
            <div className="flex items-center gap-3">
              <item.icon
                className={`text-2xl ${
                  activeLink === item.name
                    ? "text-blue-600"
                    : isDark
                    ? "text-white"
                    : "text-gray-700"
                } transition-all duration-300`}
              />
              <h3>{item.name}</h3>
            </div>
            {item.name === "Categories" && (
              <span
                className={`text-xl ${
                  activeLink === item.name
                    ? "text-blue-600"
                    : isDark
                    ? "text-white"
                    : "text-gray-700"
                } transition-all duration-300`}
              >
                <IoIosArrowForward />
              </span>
            )}
          </Link>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default NavLinks;
