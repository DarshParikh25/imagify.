import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section id="features" className="flex flex-col gap-12 items-center py-20">
      <h2 className="text-7xl font-semibold font-primary text-white">
        Features
      </h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 font-secondary justify-items-center gap-20 text-center w-fit py-10">
        {/* F1 */}
        <FeatureCard
          rank={1}
          head={"AI-Powered Discovery"}
          subhead={"Find inspiration effortlessly."}
          desc={
            "Explore trending visuals and curated collections with AI-assisted recommendations that make discovering fresh ideas easier than ever."
          }
        />

        {/* F2 */}
        <FeatureCard
          rank={2}
          head={"Effortless Upload & Creation"}
          subhead={"Bring ideas to life instantly."}
          desc={
            "Upload images in seconds, let AI suggest titles, descriptions, and alt text, and showcase your creativity without technical hurdles."
          }
        />

        {/* F3 */}
        <FeatureCard
          rank={3}
          head={"Smart Protection & Watermarking"}
          subhead={"Your creativity, your control."}
          desc={
            "Keep your work safe with built-in verification and flexible watermarking options, so your images stay authentic and protected."
          }
        />

        {/* F4 */}
        <FeatureCard
          rank={4}
          head={"Personalized Dashboard"}
          subhead={"All your creativity in one place."}
          desc={
            "Track uploads, saves, and image stats in a clean dashboard that keeps your creative journey organized and measurable."
          }
        />
      </div>
    </section>
  );
};

export default Features;
