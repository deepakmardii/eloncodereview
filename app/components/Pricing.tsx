import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      desc: "Good for anyone getting started in the social media game.",
      price: 16,
      isMostPop: false,
      features: [
        "Elon personally reviews all code",
        "Up to 4 characters of comments including '+1' and 'LGTM'",
        "🚀 emoji used when code review is ready for merge",
        "All emojis are hand drawn by Elon",
      ],
    },
    {
      name: "Tweet Level",
      desc: "Perfect for large social media companies.",
      price: 54,
      isMostPop: true,
      features: [
        "Everything in Starter, plus",
        "Printouts returned beautifully bound with handwritten notes",
        "Exclusive 🚢 emoji used when code review is ready for shipping",
        "Exclusive free pickup by a reputed courier",
      ],
    },
    {
      name: "Enterprise",
      desc: "Supreme Ultimate plan",
      price: 120,
      isMostPop: false,
      features: [
        "Everything in Tweet Level, plus",
        "Up to 280 characters of comments well within twitter word limit",
        "Elon hand delivers the review in his Tesla",
        "Once merged your code is printed out and sent to space aboard a SpaceX rocket.",
      ],
    },
  ];

  return (
    <section className="relative py-14 bg-gray-900">
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
      <div className="relative max-w-screen-xl mx-auto text-gray-300 sm:px-4 md:px-8">
        <div className="max-w-3xl mx-auto space-y-3 px-4 sm:text-center sm:px-0">
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Simple pricing, for social media juggernauts of any size.
          </p>
          <div className="">
            <p>
              It doesn’t matter what your market cap is, let Elon check your
              code, personally.
            </p>
          </div>
        </div>
        <div className="mt-16 justify-center sm:flex">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex-1 flex items-stretch flex-col mt-6 border-2 sm:mt-0 sm:rounded-xl sm:max-w-md ${
                item.isMostPop
                  ? "bg-gray-900 border-cyan-400 border-x-0 sm:border-x-2"
                  : "border-transparent"
              }`}
            >
              <div className="p-4 py-8 space-y-4 border-b border-gray-700 md:p-8">
                <span className="text-gray-200 font-medium">{item.name}</span>
                <div className="text-cyan-400 text-3xl font-semibold">
                  ${item.price}{" "}
                  <span className="text-xl font-normal">Billion</span>
                </div>
                <p className="text-gray-400">{item.desc}</p>
                <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700">
                  Get Started
                </button>
              </div>
              <ul className="p-4 py-8 space-y-3 md:p-8">
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        item.isMostPop ? "text-cyan-600" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
