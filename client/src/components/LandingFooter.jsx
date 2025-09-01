import { useNavigate } from "react-router-dom";

const LandingFooter = () => {
  const navigate = useNavigate();

  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-footer w-full font-secondary px-20 py-20">
      <div className="flex justify-between pb-10 border-b border-gray-500">
        <img
          src="/logo.png"
          alt="logo"
          onClick={() => {
            navigate("/");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="w-56 cursor-pointer"
        />
        <div className="flex flex-col justify-center gap-3">
          <form
            onSubmit={handleSubscribe}
            className="border-2 border-white rounded-2xl w-fit"
          >
            <input
              type="email"
              placeholder="Give us your email address..."
              className="bg-transparent outline-none px-4 py-2 text-white"
            />
            <button
              type="submit"
              className="bg-white py-2 px-5 rounded-xl font-bold"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-white px-1">
            Stay in the loop with the latest trends in imagery & design.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 mt-10">
        <p className="text-white">
          All rights reserved | Copyright &copy;
          <span className="font-bold">imagify.</span>
        </p>
        <div className="flex gap-10">
          <img
            src="/facebook.svg"
            alt="facebook-icon"
            className="hover:scale-[1.03] transition-all duration-300 cursor-pointer"
          />
          <img
            src="/instagram.svg"
            alt="instagram-icon"
            className="hover:scale-[1.03] transition-all duration-300 cursor-pointer"
          />
          <img
            src="twitter.svg"
            alt="twitter-icon"
            className="hover:scale-[1.03] transition-all duration-300 cursor-pointer"
          />
        </div>
        <ul className="flex gap-10 text-gray-400 text-sm">
          <li className="hover:text-white transition-all duration-300 cursor-pointer">
            Terms & Conditions
          </li>
          <li className="hover:text-white transition-all duration-300 cursor-pointer">
            Privacy Policy
          </li>
          <li className="hover:text-white transition-all duration-300 cursor-pointer">
            Accessibility
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default LandingFooter;
