"use client";

import GradientButton from "@/Component/GradientButton";
import PageHeading from "@/Component/PageHeading";
import PageSubheading from "@/Component/PageSubheading";
import { FaArrowRight } from "react-icons/fa";
import { serviceImages } from "@/lib/serviceImages";


export default function ContentWritingServices() {

  return (
    <div className="service-page">
      <main className="service-page-container">
      {/* Hero Section */}
      <section className="text-center mb-10 sm:mb-12">
        <PageHeading className="mb-4">Content Writing Services</PageHeading>
        <PageSubheading>
          Words have the power to connect, inspire, and convert. Our Content Writing team ensures your brand voice stands out with impactful, meaningful, and professional writing solutions.
        </PageSubheading>
      </section>

      {/* Agencies Section (Image Left, Text Right) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center mb-12 md:mb-16">
        <div className="relative w-full h-56 sm:h-64 md:h-80 order-1 md:order-none rounded-xl overflow-hidden border border-white/10 bg-white/5">
          <img src={serviceImages.ebook[0]} alt="Content Writing" className="w-full h-full object-cover" />
        </div>

        <div>
          <h2 className="page-heading text-xl sm:text-2xl font-bold mb-3 text-white">
            Scalable Content Writing Services for Agencies
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
            We help agencies write content at scale for their clients across a wide range of industries. With our deep writer pool, our Content Success Specialists are able to build teams of highly specialized writers for any vertical. With a focus on writer retention for each client, we ensure consistency over the course of our relationship.
          </p>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
            ContentWriters partners with digital marketing agencies to provide:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-gray-300">
              <FaArrowRight className="text-blue-500" />
              Specialized Writers: The best-performing content is crafted by writers with subject matter expertise. Our areas of expertise include health and medical, legal, finance, automotive, eCommerce, and more.
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <FaArrowRight className="text-blue-500" />
              Flexible Managed Services: Scale content up or down easily with our flexible Managed Services approach tailored to your agency needs.
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <FaArrowRight className="text-blue-500" />
              Content Type Expertise: Our writers create all types of content, including articles, blogs, white papers, and eCommerce content, following your clients’ style guidelines.
            </li>
          </ul>
        </div>
      </section>

      {/* Blog Writing Section (Image Right, Text Left) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center mb-12 md:mb-16">
  <div>
    <h2 className="page-heading text-xl sm:text-2xl font-bold mb-3 text-white">Blog Writing</h2>
    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
      Blogging builds authority and attracts readers. We deliver well-researched, SEO-friendly, and engaging articles tailored to your audience, ensuring your digital presence stands out.
    </p>
  </div>
  <div className="w-full h-56 sm:h-64 md:h-80 rounded-xl overflow-hidden border border-white/10 bg-white/5">
    <img src={serviceImages.ebook[2]} alt="Blog Writing" className="w-full h-full object-cover" />
  </div>
</section>


      {/* Creative Copywriting Section (Image Left, Text Right) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center mb-12 md:mb-16">
        <div className="w-full h-56 sm:h-64 md:h-80 order-1 md:order-none rounded-xl overflow-hidden border border-white/10 bg-white/5">
          <img src={serviceImages.ebook[1]} alt="Creative Copywriting" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="page-heading text-xl sm:text-2xl font-bold mb-3 text-white">Creative Copywriting</h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
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
      </main>
    </div>
  );
}
