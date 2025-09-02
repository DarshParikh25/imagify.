import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-login w-full h-screen bg-cover bg-center flex justify-center items-center font-secondary">
      <div className="flex w-[90%] h-[90%]">
        {/* Left Side */}
        <div className="hidden md:flex w-1/2 items-center justify-center relative h-full bg-black/50 backdrop-blur-sm rounded-l-3xl">
          <div className="flex flex-col items-center relative text-center px-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-primary">
              Welcome Back
            </h1>
            <p className="text-gray-300 text-xl font-bold w-[75%]">
              Continue your journey and explore new ideas with us.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex w-full items-center space-x-5 justify-center md:w-1/2 bg-black/80 backdrop-blur-md rounded-r-3xl text-white">
          <div className="flex flex-col justify-center h-full w-[50%] space-y-5 mx-20">
            <h2 className="text-6xl font-bold mb-6 font-primary">Login</h2>

            <form onSubmit={handleLogin} className="flex flex-col gap-7">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-2 py-2 bg-transparent placeholder-white/50 border-b-2 border-white outline-none focus:border-green-500 transition-all duration-300"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 bg-transparent placeholder-white/50 border-b-2 border-white outline-none focus:border-green-500 transition-all duration-300"
              />

              <button
                type="submit"
                className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg font-bold transition duration-300 mt-5"
              >
                Login
              </button>
            </form>
            <p className="text-center mt-6 text-sm">
              Don’t have an account?{" "}
              <span
                onClick={() => {
                  navigate("/signup");
                }}
                className="text-green-500 hover:underline cursor-pointer"
              >
                Sign up here
              </span>
            </p>
          </div>

          <div className="flex h-[75%] justify-center items-center">
            <div className="flex flex-col items-center justify-center my-6 h-full">
              <span className="h-full w-0.5 bg-gray-300"></span>
              <span className="py-3 font-bold">OR</span>
              <span className="h-full w-0.5 bg-gray-300"></span>
            </div>

            {/* Social logins */}
            <div className="flex flex-col items-center justify-center px-20 gap-10">
              <button className="rounded-full w-10">
                <img src="facebook.png" alt="" />
              </button>
              <button className="rounded-full w-10">
                <img src="twitter.png" alt="" />
              </button>
              <button className="rounded-full w-10">
                <img src="google.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
