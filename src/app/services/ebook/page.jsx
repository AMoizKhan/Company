"use client";

import Header from "@/Component/Header";
import Footer from "@/Component/Footer";
import {
  FaPenNib,
  FaBookOpen,
  FaEdit,
  FaFileAlt,
  FaLightbulb,
  FaShareAlt,
} from "react-icons/fa";
import Image from "next/image";

export default function ContentWritingServices() {
const services = [
  {
    icon: <FaPenNib className="text-blue-600 text-3xl mx-auto" />,
    title: "SEO Optimized Articles",
    desc: "Our team crafts content that is optimized for search engines while engaging your readers naturally.",
    img: "/seo.jpg", // image path (public folder me daalo)
  },
  {
    icon: <FaBookOpen className="text-green-600 text-3xl mx-auto" />,
    title: "E-Books & Guides",
    desc: "Transform knowledge into professionally written and designed digital guides or eBooks.",
    img: "/ebook.jpg",
  },
  {
    icon: <FaEdit className="text-pink-600 text-3xl mx-auto" />,
    title: "Editing & Proofreading",
    desc: "We ensure error-free, polished content that reflects professionalism and credibility.",
    img: "/editing.jpg",
  },
  {
    icon: <FaFileAlt className="text-yellow-500 text-3xl mx-auto" />,
    title: "Website Content",
    desc: "Get compelling landing pages, product descriptions, and service writeups that convert visitors.",
    img: "/website.jpg",
  },
  {
    icon: <FaLightbulb className="text-purple-600 text-3xl mx-auto" />,
    title: "Creative Copywriting",
    desc: "Catchy taglines and creative ads that capture your brand’s voice and attract customers.",
    img: "/copywriting.jpg",
  },
  {
    icon: <FaShareAlt className="text-red-600 text-3xl mx-auto" />,
    title: "Social Media Content",
    desc: "Engaging posts and captions that boost interaction and brand presence across platforms.",
    img: "/social.jpg",
  },
];


  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Content Writing Services</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Words have the power to connect, inspire, and convert. Our Content
          Writing team ensures your brand voice stands out with impactful,
          meaningful, and professional writing solutions.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        {services.map((srv, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            {srv.icon}
            <h2 className="text-xl font-semibold mt-4 mb-2">{srv.title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {srv.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Blog Writing Section (Text Left, Image Right) */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Blog Writing</h2>
          <p className="text-gray-700 leading-relaxed">
            Blogging is the backbone of digital presence. Our blog writing
            services deliver well-researched, SEO-friendly, and engaging
            articles that establish authority and attract readers. Whether you
            need informative posts or creative storytelling, we’ve got you
            covered.
          </p>
        </div>
        <div className="relative w-full h-72">
          <Image
            src="/blog.jpg" // apni image dalna public folder me
            alt="Blog Writing"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </section>

      {/* Creative Copywriting Section (Image Left, Text Right) */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-72 order-1 md:order-none">
          <Image
            src="/copywriting.jpg" // apni image dalna public folder me
            alt="Creative Copywriting"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Creative Copywriting</h2>
          <p className="text-gray-700 leading-relaxed">
            Great copy sells. From ads to product descriptions, our creative
            copywriting ensures your brand voice connects emotionally with the
            audience while motivating them to take action. Drive conversions
            with words that truly matter.
          </p>
        </div>
      </section>

      {/* Closing Text */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Craft the Right Words with the Right Team
        </h2>
        <p className="text-gray-700 leading-relaxed">
          In the digital era, content is king — but context is queen. Our team
          ensures your brand communicates effectively through blogs, social
          media, eBooks, or sales copy. Let’s work together and bring your
          message to life.
        </p>
      </section>

      <Footer />
    </div>
  );
}
