import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const navigate = useNavigate();

  const isScrolled = useSelector((state) => state.ui.scrolled);

  return (
    <nav
      className={`sticky top-0 w-full px-20 py-6 flex items-center justify-between text-white font-secondary z-50 transition-all duration-200 ${
        isScrolled ? "backdrop-blur-md bg-white/10 shadow-lg" : "bg-transparent"
      }`}
    >
      <img
        src="/logo.png"
        alt="logo image"
        onClick={() => {
          navigate("/");
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="w-32 cursor-pointer"
      />
      <ul className="flex gap-16">
        <HashLink smooth to="/#hero" className="cursor-pointer">
          Home
        </HashLink>
        <HashLink smooth to={"/#about"} className="cursor-pointer">
          About
        </HashLink>
        <HashLink smooth to={"/#features"} className="cursor-pointer">
          Features
        </HashLink>
        <HashLink smooth to={"/#explore"} className="cursor-pointer">
          Explore
        </HashLink>
        <HashLink smooth to={"/#contact"} className="cursor-pointer">
          Contact
        </HashLink>
      </ul>
      <div className="flex gap-7">
        <button className="bg-white text-black px-5 py-2 rounded-lg text-md font-bold hover:bg-[#ddd] transition-all duration-300">
          Upload
        </button>
        <button className="border-2 border-white px-5 py-2 rounded-lg text-md font-bold bg-transparent hover:bg-[#142e3a] transition-all duration-300">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
