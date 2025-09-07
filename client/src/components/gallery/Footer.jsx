import { useSelector } from "react-redux";

const Footer = () => {
  const isDark = useSelector((state) => state.ui.isDark);

  return (
    <div
      id="footer"
      className={`flex flex-col justify-center items-center text-xs absolute bottom-[2.5%] left-[13%] transition-all duration-300 ${
        isDark ? "text-white" : "text-[#202020]"
      }`}
    >
      <p>Copyright &copy; 2025 | All rights reserved.</p>
      <p className="font-bold">Imagify.</p>
    </div>
  );
};

export default Footer;
