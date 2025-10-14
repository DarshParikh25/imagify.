import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Hero = () => {
  const { changeDir } = useContext(AppContext);

  return (
    <section
      id="hero"
      className="hero grid lg:grid-cols-2 grid-cols-1 text-white h-[80vh] font-secondary"
    >
      <div className="px-20 flex flex-col justify-center gap-2">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl leading-tighter">
            Discover Visual Inspirations, Share your Creativity
          </h1>
          <p className="text-2xl">
            Browse endless ideas, find images you love, and showcase your own
            creativity to the world.
          </p>
        </div>
        <div className="flex gap-10 mt-10">
          <button
            onClick={() => {
              changeDir("/posts");
            }}
            className="w-fit bg-white text-black px-6 py-2.5 rounded-lg font-semibold text-lg hover:bg-[#ddd] transition-all duration-300"
          >
            Explore Content
          </button>
          <button
            onClick={() => {
              changeDir("/upload");
            }}
            className="w-fit bg-transparent px-6 py-2.5 rounded-lg font-semibold border-2 border-white text-lg hover:bg-[#16303e] transition-all duration-300"
          >
            Upload Your Image
          </button>
        </div>
        <p className="text-sm px-0.5">Free to explore · Simple to upload</p>
      </div>
      <div className="w-full relative">
        <div className="left-52 top-10 absolute -rotate-[7deg] w-[250px] h-[350px] bg-white flex justify-center items-center z-20">
          <img
            src="/first.jpg"
            alt=""
            loading="lazy"
            className="w-[200px] h-[300px]"
          />
        </div>
        <div className="left-96 top-56 rotate-[20deg] absolute w-[250px] h-[350px] bg-white flex justify-center items-center z-30">
          <img
            src="/second.jpg"
            alt=""
            loading="lazy"
            className="w-[200px] h-[300px]"
          />
        </div>
        <div className="left-14 top-60 -rotate-[25deg] absolute w-[250px] h-[350px] bg-white flex justify-center items-center z-10">
          <img
            src="/third.jpg"
            alt=""
            loading="lazy"
            className="w-[200px] h-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
