// FAQ.js
"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What services does your software house provide?",
    answer: "We offer web development, mobile app development, digital marketing, cloud solutions, AI integration, game development, and graphic design services.",
  },
  {
    question: "Do you develop custom mobile apps?",
    answer: "Yes, we build fully customized iOS and Android apps tailored to your business needs with modern design and smooth performance.",
  },
  {
    question: "How do you ensure website security?",
    answer: "We implement the latest security protocols, data encryption, firewalls, and regular updates to keep your websites safe from threats.",
  },
  {
    question: "Do you provide cloud hosting and computing solutions?",
    answer: "Yes, we provide scalable and secure cloud solutions that improve business flexibility and reduce infrastructure costs.",
  },
  {
    question: "Can you design a brand identity for my business?",
    answer: "Absolutely! Our creative team delivers stunning graphic design, logos, and branding materials to build a strong identity.",
  },
  {
    question: "Do you handle SEO and digital marketing?",
    answer: "Yes, we offer SEO, social media management, and digital campaigns to boost your brand visibility and generate leads.",
  },
  {
    question: "What industries do you work with?",
    answer: "We work with startups, SMEs, and enterprises across various industries, including e-commerce, healthcare, education, and technology.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between py-12 px-6 gap-12">
      {/* Left Side - Heading */}
   <div className="md:w-1/3 flex flex-col justify-center text-left">
  <h2 className="text-3xl font-bold mb-4">
    Frequently Asked Questions
  </h2>
  {/* <p className="text-gray-600">
    Get answers to the most common questions about our software house services and how we can help your business grow.
  </p> */}
</div>


      {/* Right Side - FAQs */}
      <div className="md:w-2/3 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-3">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-800"
            >
              {faq.question}
              <span className="ml-2 text-blue-600">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
