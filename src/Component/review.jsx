"use client";

import React, { useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const TestimonialSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      id: 1,
      text: "The product has transformed our business operations completely. The efficiency and reliability we've experienced are unprecedented. I couldn't be happier with the results and the outstanding support team behind it.",
      author: "John Anderson",
      role: "CEO, TechVision Corp",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 2,
      text: "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence has helped us achieve our goals faster than we ever imagined possible.",
      author: "Sarah Williams",
      role: "Marketing Director, InnovateX",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 3,
      text: "The level of professionalism and expertise demonstrated by the team is remarkable. They've consistently delivered beyond our expectations and have become an integral part of our success story.",
      author: "Michael Chen",
      role: "CTO, FutureScale",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
  ];

  const TestimonialCard = ({ testimonial }) => (
    <div className="relative bg-transparent rounded-xl border border-gray-700 p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-md">
      <div className="absolute top-4 left-4 text-gray-400 opacity-50">
        <FaQuoteLeft size={24} />
      </div>
      <div className="mb-4">
        {[...Array(testimonial.rating)].map((_, index) => (
          <FaStar key={index} className="inline-block text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-200 mb-6 line-clamp-4">{testimonial.text}</p>
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-white">{testimonial.author}</h4>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );

  const TestimonialModal = ({ testimonial, onClose }) => {
    if (!testimonial) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
        <div className="bg-transparent border border-gray-700 rounded-xl p-8 max-w-2xl w-full relative backdrop-blur-md">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-300 hover:text-white"
          >
            <IoClose size={24} />
          </button>
          <div className="mb-6">
            {[...Array(testimonial.rating)].map((_, index) => (
              <FaStar key={index} className="inline-block text-yellow-400" />
            ))}
          </div>
          <div className="flex items-center mb-6">
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h4 className="font-semibold text-white text-xl">
                {testimonial.author}
              </h4>
              <p className="text-gray-400">{testimonial.role}</p>
            </div>
          </div>
          <p className="text-gray-200 text-lg leading-relaxed">
            {testimonial.text}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-transparent py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h2 className="text-3xl font-bold mb-6 relative inline-block mx-auto mt-10 px-7 py-2 text-white">
              <span className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-white"></span>
              What Our Clients Say
              <span className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-white"></span>
            </h2>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover why companies trust us to deliver exceptional results and drive their success forward.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
      <TestimonialModal
        testimonial={selectedTestimonial}
        onClose={() => setSelectedTestimonial(null)}
      />
    </div>
  );
};

export default TestimonialSection;
