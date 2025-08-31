const Features = () => {
  return (
    <section
      id="features"
      className="flex flex-col gap-12 items-center text-white"
    >
      <h2 className="text-6xl font-semibold font-primary">Features</h2>
      <div className="grid sm:grid-cols-2">
        <div>
          <div>
            <h3>AI-Powered Discovery</h3>
            <h4>Find inspiration effortlessly.</h4>
          </div>
          <p>
            Explore trending visuals and curated collections with AI-assisted
            recommendations that make discovering fresh ideas easier than ever.
          </p>
        </div>
        <div>
          <div>
            <h3>Effortless Upload & Creation</h3>
            <h4>Bring ideas to life instantly.</h4>
          </div>
          <p>
            Upload images in seconds, let AI suggest titles, descriptions, and
            alt text, and showcase your creativity without technical hurdles.
          </p>
        </div>
        <div>
          <div>
            <h3>Smart Protection & Watermarking</h3>
            <h4>Your creativity, your control.</h4>
          </div>
          <p>
            Keep your work safe with built-in verification and flexible
            watermarking options, so your images stay authentic and protected.
          </p>
        </div>
        <div>
          <div>
            <h3>Personalized Dashboard</h3>
            <h4>All your creativity in one place.</h4>
          </div>
          <p>
            Track uploads, saves, and image stats in a clean dashboard that
            keeps your creative journey organized and measurable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
