const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col text-white font-secondary py-24 gap-20 items-center"
    >
      <img src="/logo.png" alt="website-branding" className="w-72" />
      <div className="grid sm:grid-cols-3 grid-cols-1">
        {/* Who We Are */}
        <div className="flex flex-col gap-5 px-20 py-5 border-r-2 border-white">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-bold">Who We Are?</h2>
            <h3 className="text-lg font-semibold">
              A Creative Hub for Visual Discovery
            </h3>
          </div>
          <p>
            Imagify is a visual discovery platform where creators and dreamers
            explore, save, and share ideas through images. It’s the place where
            imagination finds its spark and creativity thrives.
          </p>
        </div>

        {/* What We Believe */}
        <div className="flex flex-col gap-5 px-20 py-5 border-r-2 border-white">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-bold">What We Believe?</h2>
            <h3 className="text-lg font-semibold">Our Values</h3>
          </div>
          <p>
            We believe creators deserve tools that make sharing effortless and
            safe. With features like AI-assisted titles and flexible
            watermarking, Imagify empowers you to focus on creativity—not
            complexity.
          </p>
        </div>

        {/* Why It Matters */}
        <div className="flex flex-col gap-5 px-20 py-5">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-bold">Why It Matters</h2>
            <h3 className="text-lg font-semibold">
              Fueling Creativity Everywhere
            </h3>
          </div>
          <p>
            The internet is cluttered with unverified and misused visuals.
            Imagify changes that by ensuring every image is authentic,
            protected, and easy to reuse—so your ideas travel further, with
            trust and impact.
          </p>
        </div>
      </div>
      <div className="flex gap-10 text-md font-medium">
        <button className="bg-white text-black px-5 py-2 rounded-lg">
          Join Today
        </button>
        <button className="border-2 border-white px-5 py-2 rounded-lg">
          Start Creating
        </button>
      </div>
    </section>
  );
};

export default About;
