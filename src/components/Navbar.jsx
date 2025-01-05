// import { IoNotifications } from "react-icons/io5";
// import { AiFillMessage } from "react-icons/ai";
// import { TbArrowBadgeDownFilled } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      {/* <nav className='flex'>
        <div id="items">
          <h1 id="logo">Imagify.</h1>
          <div id="nav-items">
            <h4>Home</h4>
            <h4>Categories</h4>
            <h4>Explore</h4>
          </div>
        </div>
        <div className="search">
          <FaSearch />
          <input type="text" placeholder='Search for images'/>
        </div>
        <div id="icons">
          <IoNotifications />
          <AiFillMessage />
          <BsPersonSquare />
          <TbArrowBadgeDownFilled />
        </div>
      </nav> */}
      <div id="vertical" className="h-screen w-[20%] flex flex-col border-r-2 border-solid border-r-[#a9a9a951] justify-between py-10" >
        <div id="logo" className="flex w-full justify-between items-center px-8">
          <h1 className="text-3xl">Imagify.</h1>
          <div id="profile" className="flex gap-1 justify-center items-center">
            <IoPersonCircle className="text-[2.5rem]" />
            <IoIosArrowDown className="text-xl" />
          </div>
        </div>
        <div id="menu-items" className="px-8 text-xl font-semibold">
          <h3 className="mb-5 pb-5 border-b-2 border-solid border-[#a9a9a951]">
            Home
          </h3>
          <h3 className="flex justify-between items-center border-b-2 border-solid border-[#a9a9a951] mb-5 pb-5">
            Categories
            <span className="text-xl">
              <IoIosArrowForward />
            </span>
          </h3>
          <h3 className="mb-5 pb-5 border-b-2 border-solid border-[#a9a9a951]">
            Explore
          </h3>
          <h3 className="border-b-2 border-solid border-[#a9a9a951] mb-5 pb-5">
            Messages
          </h3>
          <h3 className="pb-5 border-b-2 border-solid border-[#a9a9a951]">
            Notifications
          </h3>
        </div>
        <div id="search" className="flex items-center border-2 border-solid border-[#a9a9a9] py-3 px-5 w-[90%] self-center rounded-full">
          <FaSearch className="h-full mr-3" />
          <input
            type="text"
            placeholder="Search for images"
            className="pl-3 border-l-2 border-solid border-[#a9a9a9] w-[80%]"
          />
          <IoMdCloseCircleOutline className="text-2xl hidden" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
