import React from "react";

const Faqs = () => {
  const faqsList = [
    {
      q: "Does Elon Musk review the code personally?",
      a: "Of course! Elon has rescheduled large blocks of time away from making electric cars and saving humanity by colonizing Mars to focus almost entirely on reviewing YOUR code.",
    },
    {
      q: "Sounds expensive. How much does this cost?",
      a: "This service is very inexpensive. Check out our pricing table. To ensure the continuation of life on planet Earth code reviews are one of the safest ways to ensure no large infestations of bugs occur.",
    },
    {
      q: "How do I apply for a job helping with these code reviews?",
      a: "Due to Elon's fanatical adherence to time mangement principles and his magical 'LGTM' commentary there won't ever be a pull request that goes un-reviewed for longer than 2 to 3 minutes. As such we do not foresee needing to hire any more people.",
    },
  ];
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
        <div className="flex-1">
          <div className="max-w-lg">
            <h3 className="font-semibold text-indigo-600 text-4xl">
              Frequently asked questions
            </h3>
            <p className="mt-3 text-gray-800 text-sm font-light sm:text-lg">
              Such an awe-inspiring service yet simple service is hard to
              believe - so you may have some questions. Here are some of the
              more frequent asked.
            </p>
          </div>
        </div>
        <div className="flex-1 mt-12 md:mt-0">
          <ul className="space-y-4 divide-y">
            {faqsList.map((item, idx) => (
              <li className="py-5" key={idx}>
                <summary className="flex items-center justify-between font-semibold text-gray-700">
                  {item.q}
                </summary>
                <p
                  dangerouslySetInnerHTML={{ __html: item.a }}
                  className="mt-3 text-gray-600 leading-relaxed"
                ></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
