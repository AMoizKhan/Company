"use client";

import TestimonialSection from "@/Component/review";
import PageHeading from "@/Component/PageHeading";
import PageSubheading from "@/Component/PageSubheading";
import { serviceImages } from "@/lib/serviceImages";

const content = [
  { title: "Responsive Websites", desc: "We design and develop fully responsive websites that automatically adapt to all screen sizes — mobile, tablet, and desktop. Our responsive approach guarantees smooth navigation, fast loading, and an exceptional user experience across all devices." },
  { title: "SEO-Friendly Structure", desc: "We follow modern SEO best practices in both code and design. From clean URLs and optimized metadata to fast-loading pages and structured content, we ensure your website ranks higher on search engines and attracts steady organic traffic." },
  { title: "Secure & Scalable", desc: "Our development process prioritizes security and scalability. Whether you're running a startup or an enterprise-level business, we integrate robust security measures and build architectures that can grow effortlessly as your business expands." },
  { title: "Custom Web Solutions", desc: "Every business is unique — and your website should be too. We create custom web solutions tailored to your goals, integrating the latest technologies and features to deliver an engaging, high-performing digital experience." },
  { title: "Performance Optimization", desc: "We optimize every element of your website — from code structure to images — ensuring lightning-fast loading speeds and smooth performance that enhances user satisfaction and boosts conversions." },
];

const images = serviceImages.web;

export default function WebDevelopment() {
  return (
    <div className="service-page">
      <main className="service-page-container">
        <div className="text-center mb-10 sm:mb-12">
          <PageHeading className="mb-3 sm:mb-4">Web Development</PageHeading>
          <PageSubheading className="text-gray-300">
            Modern, responsive, and high-performance websites built with the latest technologies.
          </PageSubheading>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {content.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-stretch gap-6 md:gap-10 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-white/10 bg-white/5 shrink-0">
                <img
                  src={images[idx % images.length]}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = "https://placehold.co/800x500/1e40af/94a3b8?text=Web+Development"; }}
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center px-0 md:px-4 lg:px-8 py-2 md:py-6">
                <h2 className="page-heading text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3 text-white">
                  {item.title}
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <TestimonialSection />
    </div>
  );
}
