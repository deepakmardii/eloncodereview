import React from "react";

const CallToAction = () => {
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
        <div className="max-w-xl mx-auto space-y-3 px-4 sm:text-center sm:px-0">
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Get printing today
          </p>
          <div className="max-w-xl">
            <p>
              It’s time to take control of your code reviews. Let Elon Musk help
              you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
