const Hero = () => {
  return (
    <section className="font-serif bg-gradient-to-r from-purple-700 to-indigo-800 py-20">
      <div className="text-center container mx-auto px-4 flex flex-col md:px-40 items-center justify-center">
        <h1 className="dark:text-neutral-200 text-4xl md:text-5xl font-bold mb-4">
          Turn Your eBooks into Audiobooks
        </h1>
        <p className="text-xl mb-6">
          Upload your EPUB files, convert them to audio, and listen on the go.
        </p>
        <button
          type="button"
          className="flex items-center space-x-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-0 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-6 mb-2 shadow-lg transition-transform transform hover:scale-105 duration-200 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          <h2 className="font-serif text-[32px] font-normal">
            Start Listening
          </h2>
          <span className="text-[22px] text-gray-300">— it's free</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
