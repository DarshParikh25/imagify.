const Explore = () => {
  // Will later on take the images from the database
  const images = [
    "/first.jpg",
    "/second.jpg",
    "/third.jpg",
    "/first.jpg",
    "/second.jpg",
    "/third.jpg",
  ];

  // Will later on take the categories from the array stored in the backend as the images are going to uploaded
  const categories = [
    "Nature",
    "Architecture",
    "Lifestyle",
    "Innovation Tech",
    "Food",
    "Travel",
    "Art",
    "Business",
  ];

  const imgCat = [];

  return (
    <section id="explore" className="flex flex-col gap-12 items-center py-20">
      <div className="flex flex-col items-center gap-3 text-xl text-white">
        <h2 className="text-7xl font-semibold font-primary">Explore</h2>
        <h3 className="font-secondary">
          Discover trending visuals across categories.
        </h3>
      </div>

      {/* Categories */}
      <div className="flex gap-10 text-white text-sm">
        {categories.map((category, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-full px-6 py-2 cursor-pointer shadow-md"
          >
            <p>{category}</p>
          </div>
        ))}
      </div>

      {/* Images */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-items-center gap-20 py-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="group h-[30rem] w-full rounded-xl overflow-hidden relative cursor-pointer shadow-lg"
          >
            <div className="absolute group-hover:opacity-100 opacity-0 bottom-0 bg-overlay transition-opacity w-full h-full duration-300 z-10 flex items-end">
              <div className="flex flex-wrap text-white p-4">
                {imgCat.map((category, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-full px-6 py-2 h-fit inline-flex mx-2 my-1"
                  >
                    <p className="leading-none">{category}</p>
                  </div>
                ))}
              </div>
            </div>
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
      <button className="font-semibold bg-white px-6 py-2.5 rounded-lg mb-10">
        Start Exploring
      </button>
    </section>
  );
};

export default Explore;
