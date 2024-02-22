"use client";

const Hero = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
        <div className="space-y-5 max-w-5xl mx-auto text-center items-center flex flex-col">
          <h2 className="text-4xl text-gray-800 font-semibold mx-auto md:text-7xl ">
            Submit your code{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              for review{" "}
            </span>
            <br />
            by Elon Musk.
          </h2>
          <p className="max-w-2xl mx-auto leading-7">
            The majority of code undergoes review on platforms like Github or
            Gitlab, which is highly efficient. However, consider a less
            conventional approach: <span className="font-bold">printing </span>
            out your code and sending the printout via{" "}
            <span className="font-bold">fax </span> for a personal review by
            <span className="font-bold"> Elon Musk!</span>
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <a
              href="javascript:void(0)"
              className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
            >
              Get 6 months free
            </a>
            <a
              href="javascript:void(0)"
              className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg"
            >
              Watch video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
