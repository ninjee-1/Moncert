import { useState } from "react";

const faqData = [
  {
    question:
      "Does BoxCar own the cars I see online or are they owned by other?",
    answer:
      "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.",
  },
  {
    question: "How do you choose the cars that you sell?",
    answer: "We select cars based on quality, performance, and market value.",
  },
  {
    question: "Can I save my favorite cars to a list I can view later?",
    answer:
      "Yes! Simply click the heart icon to save cars to your favorites list.",
  },
  {
    question: "Can I be notified when cars I like are added to your inventory?",
    answer:
      "Of course! You can sign up for alerts when similar cars are listed.",
  },
];

export default function Collapse() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={` transition-all duration-300 ${
            openIndex === index ? "bg-gray-50" : "bg-white"
          }`}
        >
          <div
            className="w-full flex justify-between items-center text-left px-4 py-4 m-regular"
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            <span>{openIndex === index ? "−" : "+"}</span>
          </div>
          {openIndex === index && (
            <div className="px-4 pb-4 s-regular">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
