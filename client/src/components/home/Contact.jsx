const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="flex flex-col gap-12 items-center py-20">
      <div className="flex flex-col items-center gap-3 text-xl text-white">
        <h2 className="text-7xl font-semibold font-primary">Get in Touch</h2>
        <div className="leading-tight text-center">
          <h3 className="font-secondary">
            Have questions, feedback, or collaboration ideas?
          </h3>
          <p className="font-secondary">We’d love to hear from you!</p>
        </div>
      </div>
      <div className="bg-black/20 backdrop-blur-xl py-16 px-20 rounded-3xl my-5 shadow-lg">
        <form
          onSubmit={handleFormSubmit}
          className="text-white w-96 flex flex-col gap-7 py-5"
        >
          <div className="flex flex-col gap-1">
            <label className="font-bold">Name</label>
            <input
              type="text"
              placeholder="Tell us your good name!"
              required
              className="bg-transparent outline-none border-b-2 border-gray-500 focus:border-white transition-all duration-300"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold">Email</label>
            <input
              type="email"
              placeholder="What's your email address?"
              required
              className="bg-transparent outline-none border-b-2 border-gray-400 focus:border-white transition-all duration-300"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold">Mobile</label>
            <input
              type="number"
              placeholder="Please share your phone number with us!"
              required
              className="bg-transparent outline-none border-b-2 border-gray-400 focus:border-white transition-all duration-300"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold">Message</label>
            <textarea
              name=""
              id=""
              placeholder="Have questions, feedback, or collaboration ideas? Feel free to connect!"
              className="bg-transparent outline-none border-b-2 border-gray-400 focus:border-white transition-all duration-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white rounded-lg text-black font-bold px-5 py-2 mt-5 hover:bg-[#ddd] transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
