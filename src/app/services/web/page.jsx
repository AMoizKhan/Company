"use client";

import { useState } from "react";
import Header from "@/Component/Header";
import TestimonialSection from "@/Component/review";
import Footer from "@/Component/Footer";

export default function Services() {
  const [active, setActive] = useState("web");

  const content = {
    web: [
      {
        title: "Responsive Websites",
        desc: "We design and develop fully responsive websites that automatically adapt to all screen sizes — mobile, tablet, and desktop. Our responsive approach guarantees smooth navigation, fast loading, and an exceptional user experience across all devices.",
      },
      {
        title: "SEO-Friendly Structure",
        desc: "We follow modern SEO best practices in both code and design. From clean URLs and optimized metadata to fast-loading pages and structured content, we ensure your website ranks higher on search engines and attracts steady organic traffic.",
      },
      {
        title: "Secure & Scalable",
        desc: "Our development process prioritizes security and scalability. Whether you're running a startup or an enterprise-level business, we integrate robust security measures and build architectures that can grow effortlessly as your business expands.",
      },
      {
        title: "Custom Web Solutions",
        desc: "Every business is unique — and your website should be too. We create custom web solutions tailored to your goals, integrating the latest technologies and features to deliver an engaging, high-performing digital experience.",
      },
      {
        title: "Performance Optimization",
        desc: "We optimize every element of your website — from code structure to images — ensuring lightning-fast loading speeds and smooth performance that enhances user satisfaction and boosts conversions.",
      },
    ],
    app: [
      {
        title: "iOS & Android Apps",
        desc: "We deliver feature-rich mobile applications for both iOS and Android platforms, offering seamless performance, elegant UI, and scalability for all business types.",
      },
      {
        title: "Cross-Platform Solutions",
        desc: "Save time and cost with apps that run flawlessly on multiple devices using a single codebase. We ensure performance consistency across iOS, Android, and web platforms.",
      },
      {
        title: "User-Centric Design",
        desc: "We create apps that users love — focusing on intuitive interfaces, fast load times, and smooth user experiences that enhance retention and engagement.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-transparent">
      <Header />

      <main className="max-w-6xl mx-auto p-6 mt-24">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActive("web")}
            className={`px-5 py-2 rounded-md font-semibold transition ${
              active === "web"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-800 border hover:bg-gray-100"
            }`}
          >
            Web Development
          </button>

          <button
            onClick={() => setActive("app")}
            className={`px-5 py-2 rounded-md font-semibold transition ${
              active === "app"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-800 border hover:bg-gray-100"
            }`}
          >
            App Development
          </button>
        </div>

        {/* Alternating Layout */}
        <div className="space-y-20">
          {content[active].map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-stretch gap-10 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              } bg-transparent rounded-2xl overflow-hidden`}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full">
                <img
                  src={`/image/${active}-${idx + 1}.jpg`}
                  alt={item.title}
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 w-full flex flex-col justify-center px-8 py-6">
                <h2 className="text-4xl font-semibold mb-3 text-white mb-3">
                  {item.title}
                </h2>
                <p className="text-white text-base leading-relaxed mt-8">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <TestimonialSection />
      <Footer />
    </div>
  );
}
