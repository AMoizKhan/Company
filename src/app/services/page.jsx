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
        desc: "We design and build websites that adapt perfectly to mobile, tablet, and desktop screens, ensuring a seamless user experience."
      },
      {
        title: "SEO Friendly Structure",
        desc: "Our code and layout follow best practices so your site ranks higher on search engines and attracts organic traffic."
      },
      {
        title: "Secure & Scalable",
        desc: "From small business sites to enterprise portals, we implement security and scalability for long-term success."
      }
    ],
    app: [
      {
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

      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActive("web")}
            className={`px-5 py-2 rounded-md font-semibold transition ${
              active === "web"
                ? "bg-blue-600 text-white shadow"
                : "bg-white text-gray-800 border hover:bg-gray-100"
            }`}
          >
            Web Development
          </button>

          <button
            onClick={() => setActive("app")}
            className={`px-5 py-2 rounded-md font-semibold transition ${
              active === "app"
                ? "bg-blue-600 text-white shadow"
                : "bg-white text-gray-800 border hover:bg-gray-100"
            }`}
          >
            App Development
          </button>
        </div>

        {/* Grid content */}
        <div className="grid grid-cols-1 gap-6">
          {content[active].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <TestimonialSection />
      <Footer />
    </div>
  );
}
