const Title = () => {
  return (
    <section className="md:px-40 text-center pt-20">
      <h1 className="text-[80px] leading-[88px] text-gray-700 dark:text-white">
        Turn any of your ebooks into audiobooks in minutes
      </h1>
      <div className="flex justify-center items-center mt-10">
        <button
          type="button"
          className="flex items-center space-x-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-6 mb-2 shadow-lg transition-transform transform hover:scale-105 duration-200 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
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
export default Title;
