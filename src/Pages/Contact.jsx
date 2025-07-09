import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Amet vel eget nisi, sed ut massa turpis sodales nunc.",
      answer:
        " Enim scelerisque quisque egestas velit, eget tempus, arcu pulvinar in. Quis sed at sodales aliquam. Amet fermentum, lectus nulla tincidunt egestas.",
    },
    {
      question: "Amet vel eget nisi, sed ut massa turpis sodales nunc.",
      answer:
        "Enim scelerisque quisque egestas velit, eget tempus, arcu pulvinar in. Quis sed at sodales aliquam. Amet fermentum, lectus nulla tincidunt egestas.",
    },
    {
      question: "Amet vel eget nisi, sed ut massa turpis sodales nunc.",
      answer:
        "Enim scelerisque quisque egestas velit, eget tempus, arcu pulvinar in. Quis sed at sodales aliquam. Amet fermentum, lectus nulla tincidunt egestas.",
    },
    {
      question: "Amet vel eget nisi, sed ut massa turpis sodales nunc.",
      answer:
        "Enim scelerisque quisque egestas velit, eget tempus, arcu pulvinar in. Quis sed at sodales aliquam. Amet fermentum, lectus nulla tincidunt egestas.",
    },
    {
      question: "Amet vel eget nisi, sed ut massa turpis sodales nunc.",
      naswer:
        "Enim scelerisque quisque egestas velit, eget tempus, arcu pulvinar in. Quis sed at sodales aliquam. Amet fermentum, lectus nulla tincidunt egestas.",
    },
  ];

  return (
    <div className="bg-[#F6E300] py-16">
      <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>
      <div className="max-w-2xl mx-auto bg-[#FFF03F] rounded">
        {faqs.map((item, index) => (
          <div key={index} className="border-b border-yellow-500">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-4 py-4 font-semibold text-left  transition cursor-pointer"
            >
              {item.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && item.answer && (
              <div className="px-4 pb-4 text-sm text-[#000000] opacity-80">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
