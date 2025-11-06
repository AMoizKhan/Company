"use client";

import Header from "@/Component/Header";
import Footer from "@/Component/Footer";
import Testimonials from "@/Component/review";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import GradientButton from "@/Component/GradientButton";
import Image from "next/image";

export default function AI() {
  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {/* Top Hero Section */}
      <div className="relative text-center mt-40 px-6 md:px-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          Artificial Intelligence Development
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6 text-gray-300">
          MZ Koders is a premier AI development company offering the latest unique solutions to help automate ordinary operations and improve BI. Organizational operations are improved and efficiency is increased through our tailored AI services which facilitate data-driven decision making processes. Join us for custom-made AI solutions that will help your business create sustainable competitive advantages and grow actively.
        </p>
      </div>

      {/* AI Development Services Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 mb-16">
        <div className="md:flex items-center gap-10 my-16">
          {/* Left Side - Text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              AI Development Services We Provide
            </h2>
            <p className="text-gray-300 leading-relaxed">
              MZ Koders provides AI development services that transform raw data into actionable insights, optimizing decision-making and business operations. Our tailored solutions ensure your business stays ahead with intelligent, forward-thinking technology. Explore innovative solutions for tomorrow’s needs with MZ Koders.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full h-[60px]">
            <Image
              src="/image/ai2.png"
              alt="AI Development Services"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <hr className="border-gray-300 w-full m-0" /> {/* Top full-width line */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 my-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose Us as Your Artificial Intelligence App Development Company?
        </h2>
        <p className="text-gray-300 leading-relaxed">
          As a trusted leader in AI innovation, MZ Koders specializes in building AI from scratch to revolutionize your business processes. Our AI development services ensure every advancement has clear benefits and real-world applications. With years of proven results, we deliver tailored strategies that drive optimization, organization, and smarter decision-making. Discover the future with MZ Koders’ AI solutions for your business.
        </p>
      </div>
      <hr className="border-gray-300 w-full m-0" /> {/* Bottom full-width line */}

      {/* AI Project Process Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 my-16 md:flex items-center gap-10">
        {/* Left Side - Steps */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            AI Development Process
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-300">
              <FaArrowRight className="text-blue-500" />
              Gather requirements to define AI project scope and goals.
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <FaArrowRight className="text-blue-500" />
              Design AI architecture, selecting appropriate algorithms and technologies.
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <FaArrowRight className="text-blue-500" />
              Develop machine learning models tailored to solve business challenges.
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <FaArrowRight className="text-blue-500" />
              Train AI models using high-quality, diverse data sets.
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <FaArrowRight className="text-blue-500" />
              Test and optimize AI solutions for maximum performance efficiency.
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <FaArrowRight className="text-blue-500" />
              Deploy AI systems with ongoing support for continuous improvement.
            </li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2">
          <img
            src="../image/ai-process.jpg"
            alt="AI Development Process"
            className="w-full h-72 md:h-96 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* CTA Banner */}
      <hr className="border-white w-full m-0 mt-20" /> {/* Top line full-width */}
      <div className="relative text-white py-16 px-6 md:px-20 text-center rounded-lg mx-6 md:mx-20 mb-2">
        <h2 className="text-3xl md:text-4xl font-bold mb-7 text-center">
          Accelerate Your Business with AI
        </h2>
        <p className="mb-6 text-center">
          Partner with MZ Koders to integrate AI into your products and services for smarter decisions and operational efficiency.
        </p>
        <Link href="/contact">
          <GradientButton>Contact Us</GradientButton>

        </Link>
      </div>
      <hr className="border-white w-full m-0 mt-6" /> {/* Bottom line full-width */}

      {/* Testimonials & Footer */}
      <Testimonials />
      <Footer />
    </div>
  );
}
