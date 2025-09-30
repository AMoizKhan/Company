"use client";

import Header from "@/Component/Header";
import Footer from "@/Component/Footer";
import {
  FaBullhorn,
  FaFacebookF,
  FaEnvelope,
  FaSearch,
  FaShoppingCart,
  FaSms,
} from "react-icons/fa";
import Image from "next/image";

export default function DigitalMarketing() {
  const services = [
    {
      icon: <FaBullhorn className="text-blue-600 text-3xl" />,
      title: "Pay-Per-Click (PPC) Services",
      desc: "To reach the ideal customers and maximize the impact, PPC is a must. Our experts will launch targeted PPC campaigns that put your brand in front of the right audience—driving leads and boosting ROI.",
    },
    {
      icon: <FaFacebookF className="text-pink-600 text-3xl" />,
      title: "Social Media Marketing",
      desc: "Posting engaging content and running targeted campaigns is the best way to increase brand awareness. We craft strategies to manage your brand’s social presence and drive conversions.",
    },
    {
      icon: <FaEnvelope className="text-yellow-500 text-3xl" />,
      title: "Email Marketing",
      desc: "Our experts send customized, engaging, and attention-grabbing emails to nurture leads and build stronger relationships with your clients.",
    },
    {
      icon: <FaSearch className="text-green-600 text-3xl" />,
      title: "Search Engine Optimization (SEO)",
      desc: "We optimize websites, generate strategic content, and build backlinks to dominate search rankings and boost organic traffic.",
    },
    {
      icon: <FaShoppingCart className="text-purple-600 text-3xl" />,
      title: "E-Commerce Marketing",
      desc: "We create visual and written content that turns browsers into buyers and drives traffic to your online store.",
    },
    {
      icon: <FaSms className="text-red-600 text-3xl" />,
      title: "SMS Marketing",
      desc: "Connect directly with clients through effective and efficient SMS campaigns crafted by our expert marketers.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Digital Marketing And Sales
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          With the aim to digitize every dream, we offer a wide number of
          services. Our team of the most savage professionals is ready to help
          you dominate the digital world.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((srv, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex gap-4 items-start"
          >
            {srv.icon}
            <div>
              <h2 className="text-xl font-semibold mb-2">{srv.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {srv.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Extra Paragraph with Image Left + Text Right */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-72">
          <Image
            src="/marketing.jpg" // apni image dal dena public folder me
            alt="Digital Marketing"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Increase Your Brand’s Visibility with the Right Team!
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Considering the ever-changing trends of Digital Marketing, we are
            your one-stop shop for marketing, content creation, and graphic
            design. Our team ensures quality, relevance, and savage results to
            take your brand to new heights. Let’s work together on the next
            masterpiece!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
