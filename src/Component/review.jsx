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
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      buttonLink: "https://techvision.com"
    },
    {
      id: 2,
      text: "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence has helped us achieve our goals faster than we ever imagined possible.",
      author: "Sarah Williams",
      role: "Marketing Director, InnovateX",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      buttonLink: "https://innovatex.com"
    },
    {
      id: 3,
      text: "The level of professionalism and expertise demonstrated by the team is remarkable. They've consistently delivered beyond our expectations and have become an integral part of our success story.",
      author: "Michael Chen",
      role: "CTO, FutureScale",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      buttonLink: "https://futurescale.com"
    }
  ];

  const TestimonialCard = ({ testimonial }) => (
    <div className="relative bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="absolute top-4 left-4 text-indigo-200 opacity-50">
        <FaQuoteLeft size={24} />
      </div>
      <div className="mb-4">
        {[...Array(testimonial.rating)].map((_, index) => (
          <FaStar key={index} className="inline-block text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 mb-6 line-clamp-4">{testimonial.text}</p>
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.author}
          className="w-12 h-12 rounded-full object-cover mr-4"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80";
          }}
        />
        <div>
          <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
          <p className="text-gray-500 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <div className="mt-4 flex space-x-4">
        <button
          onClick={() => setSelectedTestimonial(testimonial)}
          className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200"
        >
          Read More
        </button>
        <a
          href={testimonial.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200"
        >
          Visit Website
        </a>
      </div>
    </div>
  );

  const TestimonialModal = ({ testimonial, onClose }) => {
    if (!testimonial) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl p-8 max-w-2xl w-full relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
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
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80";
              }}
            />
            <div>
              <h4 className="font-semibold text-gray-800 text-xl">{testimonial.author}</h4>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">{testimonial.text}</p>
          <a
            href={testimonial.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200"
          >
            Visit Website
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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