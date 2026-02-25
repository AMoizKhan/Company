"use client";

import Testimonials from "@/Component/review";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import GradientButton from "@/Component/GradientButton";
import PageHeading from "@/Component/PageHeading";
import { serviceImages } from "@/lib/serviceImages";
import PageSubheading from "@/Component/PageSubheading";

export default function AI() {
  return (
    <div className="service-page">
      <main className="service-page-container">
      {/* Top Hero Section */}
      <section className="text-center mb-10 sm:mb-12">
        <PageHeading className="text-3xl md:text-4xl mb-4">Artificial Intelligence Development</PageHeading>
        <PageSubheading className="text-gray-300 mb-6">
          MZ Koders is a premier AI development company offering the latest unique solutions to help automate ordinary operations and improve BI. Organizational operations are improved and efficiency is increased through our tailored AI services which facilitate data-driven decision making processes. Join us for custom-made AI solutions that will help your business create sustainable competitive advantages and grow actively.
        </PageSubheading>
      </section>

      {/* AI Development Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center mb-12 md:mb-16">
        <div className="order-2 md:order-1">
          <h2 className="page-heading text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white text-center md:text-left">
            AI Development Services We Provide
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              MZ Koders provides AI development services that transform raw data into actionable insights, optimizing decision-making and business operations. Our tailored solutions ensure your business stays ahead with intelligent, forward-thinking technology. Explore innovative solutions for tomorrow’s needs with MZ Koders.
            </p>
        </div>
        <div className="w-full h-56 sm:h-64 md:h-80 rounded-xl overflow-hidden border border-white/10 bg-white/5 order-1 md:order-2">
          <img src={serviceImages.ai[0]} alt="AI Development Services" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="text-center mb-12 md:mb-16">
        <h2 className="page-heading text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
          Why Choose Us as Your Artificial Intelligence App Development Company?
        </h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto">
          As a trusted leader in AI innovation, MZ Koders specializes in building AI from scratch to revolutionize your business processes. Our AI development services ensure every advancement has clear benefits and real-world applications. With years of proven results, we deliver tailored strategies that drive optimization, organization, and smarter decision-making. Discover the future with MZ Koders’ AI solutions for your business.
        </p>
      </section>

      {/* AI Project Process Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center mb-12 md:mb-16">
        <div className="space-y-4">
          <h2 className="page-heading text-xl sm:text-2xl font-bold mb-4 text-white text-center md:text-left">
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
        <div className="w-full h-56 sm:h-64 md:h-80 rounded-xl overflow-hidden border border-white/10 bg-white/5">
          <img src={serviceImages.ai[1]} alt="AI Development Process" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="text-center py-12 md:py-16 mb-8">
        <h2 className="page-heading text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
          Accelerate Your Business with AI
        </h2>
        <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
          Partner with MZ Koders to integrate AI into your products and services for smarter decisions and operational efficiency.
        </p>
        <Link href="/contact">
          <GradientButton>Contact Us</GradientButton>
        </Link>
      </section>

      <Testimonials />
      </main>
    </div>
  );
}
