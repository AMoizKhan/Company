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
    paragraph:
      "Our web development services focus on building powerful, visually stunning, and high-performing websites tailored to your specific business goals. We merge creativity, technology, and strategy to deliver digital experiences that captivate users and drive real results. Whether it’s a simple portfolio site or a complex web platform, we ensure your online presence truly stands out.",
    title: "Responsive Websites",
    desc: "We design and develop fully responsive websites that automatically adapt to all screen sizes — mobile, tablet, and desktop. Our responsive approach guarantees smooth navigation, fast loading, and an exceptional user experience across all devices."
  },
  {
    title: "SEO-Friendly Structure",
    desc: "We follow modern SEO best practices in both code and design. From clean URLs and optimized metadata to fast-loading pages and structured content, we ensure your website ranks higher on search engines and attracts steady organic traffic."
  },
  {
    title: "Secure & Scalable",
    desc: "Our development process prioritizes security and scalability. Whether you're running a startup or an enterprise-level business, we integrate robust security measures and build architectures that can grow effortlessly as your business expands."
  },
  {
    title: "Custom Web Solutions",
    desc: "Every business is unique — and your website should be too. We create custom web solutions tailored to your goals, integrating the latest technologies and features to deliver an engaging, high-performing digital experience."
  },
  {
    title: "Performance Optimization",
    desc: "We optimize every element of your website — from code structure to images — ensuring lightning-fast loading speeds and smooth performance that enhances user satisfaction and boosts conversions."
  }
],

    app: [
      {
        paragraph:
          "Our mobile app development process is centered around innovation and usability. We deliver feature-rich applications that meet your business needs and delight users with modern interfaces.",
        title: "iOS & Android Apps",
        desc: "We develop apps for both platforms, combining smooth performance with intuitive design."
      },
      {
        title: "Cross-Platform Solutions",
        desc: "Save cost and time with apps that run flawlessly on multiple devices using one codebase."
      },
      {
        title: "User-Centric Design",
        desc: "Our apps focus on simple, engaging experiences that keep users coming back."
      }
    ]
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActive("web")}
            className={`px-5 py-2 rounded-md font-semibold transition ${active === "web"
                ? "bg-blue-600 text-white shadow"
                : "bg-white text-gray-800 border hover:bg-gray-100"
              }`}
          >
            Web Development
          </button>

          <button
            onClick={() => setActive("app")}
            className={`px-5 py-2 rounded-md font-semibold transition ${active === "app"
                ? "bg-blue-600 text-white shadow"
                : "bg-white text-gray-800 border hover:bg-gray-100"
              }`}
          >
            App Development
          </button>
        </div>

        {/* Grid content */}
        <div className="grid grid-cols-1 gap-8">
          {content[active].map((item, idx) => (
            <div
              key={idx}
              className={`bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col md:flex-row ${idx === 1 ? "md:flex-row-reverse" : ""
                } items-center gap-6`}
            >
              {/* Text */}
              <div className="flex-1">
                {item.paragraph && (
                  <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                    {item.paragraph}
                  </p>
                )}
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>

              {/* Image */}
              <div className="flex-1">
                <img
                  src={`../image/${active}-${idx + 1}.jpg`}
                  alt={item.title}
                  className="w-full h-56 object-cover rounded-lg"
                />
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
