"use client";

import TestimonialSection from "@/Component/review";
import PageHeading from "@/Component/PageHeading";
import PageSubheading from "@/Component/PageSubheading";
import { serviceImages } from "@/lib/serviceImages";

const content = [
  { title: "iOS & Android Apps", desc: "We deliver feature-rich mobile applications for both iOS and Android platforms, offering seamless performance, elegant UI, and scalability for all business types." },
  { title: "Cross-Platform Solutions", desc: "Save time and cost with apps that run flawlessly on multiple devices using a single codebase. We ensure performance consistency across iOS, Android, and web platforms." },
  { title: "User-Centric Design", desc: "We create apps that users love — focusing on intuitive interfaces, fast load times, and smooth user experiences that enhance retention and engagement." },
];

const images = serviceImages.app;

export default function AppDevelopment() {
  return (
    <div className="service-page">
      <main className="service-page-container">
        <div className="text-center mb-10 sm:mb-12">
          <PageHeading className="mb-3 sm:mb-4">App Development</PageHeading>
          <PageSubheading className="text-gray-300">
            Custom mobile and cross-platform applications built for performance, scale, and user satisfaction.
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
                  onError={(e) => { e.currentTarget.src = "https://placehold.co/800x500/1e40af/94a3b8?text=App+Development"; }}
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
