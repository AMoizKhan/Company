"use client";

import Header from "@/Component/Header";
import Footer from "@/Component/Footer";
import Image from "next/image";
import GradientButton from "@/Component/GradientButton";
import { FaArrowRight } from "react-icons/fa";


export default function ContentWritingServices() {

  return (
    <div className="min-h-screen mt-20 text-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Content Writing Services</h1>
        <p className="max-w-2xl mx-auto text-white">
          Words have the power to connect, inspire, and convert. Our Content Writing team ensures your brand voice stands out with impactful, meaningful, and professional writing solutions.
        </p>
      </section>

      {/* Agencies Section (Image Left, Text Right) */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-[500px] order-1 md:order-none">
          <Image
            src="/image/content1.png"
            alt="Content Writing for Agencies"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">
            Scalable Content Writing Services for Agencies
          </h2>
          <p className="leading-relaxed mb-4 text-white">
            We help agencies write content at scale for their clients across a wide range of industries. With our deep writer pool, our Content Success Specialists are able to build teams of highly specialized writers for any vertical. With a focus on writer retention for each client, we ensure consistency over the course of our relationship.
          </p>
          <p className="leading-relaxed mb-4 text-white">
            ContentWriters partners with digital marketing agencies to provide:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-white">
              <FaArrowRight className="text-blue-500" />
              Specialized Writers: The best-performing content is crafted by writers with subject matter expertise. Our areas of expertise include health and medical, legal, finance, automotive, eCommerce, and more.
            </li>
            <li className="flex items-center gap-2 text-white">
              <FaArrowRight className="text-blue-500" />
              Flexible Managed Services: Scale content up or down easily with our flexible Managed Services approach tailored to your agency needs.
            </li>
            <li className="flex items-center gap-2 text-white">
              <FaArrowRight className="text-blue-500" />
              Content Type Expertise: Our writers create all types of content, including articles, blogs, white papers, and eCommerce content, following your clients’ style guidelines.
            </li>
          </ul>
        </div>
      </section>

      {/* Blog Writing Section (Image Right, Text Left) */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
  {/* Text Right, Image Left */}
  <div className="text-white">
    <h2 className="text-2xl font-bold mb-4">Blog Writing</h2>
    <p className="leading-relaxed">
      Blogging builds authority and attracts readers. We deliver well-researched, SEO-friendly, and engaging articles tailored to your audience, ensuring your digital presence stands out.
    </p>
  </div>
  <div className="relative w-full h-[500px]">
    <Image
      src="/image/content2.jpg"
      alt="Blog Writing"
      fill
      className="rounded-xl object-cover"
    />
  </div>
</section>


      {/* Creative Copywriting Section (Image Left, Text Right) */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-[500px] order-1 md:order-none">
          <Image
            src="/image/content3.jpg"
            alt="Creative Copywriting"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Creative Copywriting</h2>
          <p className="leading-relaxed">
            Great copy sells. From ads to product descriptions, our creative copywriting ensures your brand voice connects emotionally with the audience while motivating them to take action. Drive conversions with words that truly matter.
          </p>
        </div>
      </section>

      {/* Closing Text */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Craft the Right Words with the Right Team</h2>
        <p className="leading-relaxed">
          In the digital era, content is king — but context is queen. Our team ensures your brand communicates effectively through blogs, social media, eBooks, or sales copy. Let’s work together and bring your message to life.
        </p>
        <div className="mt-10">
          <GradientButton>Get Started Today</GradientButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
