"use client";

import GradientButton from "@/Component/GradientButton";
import PageHeading from "@/Component/PageHeading";
import PageSubheading from "@/Component/PageSubheading";
import { serviceImages } from "@/lib/serviceImages";

const images = serviceImages.cloud;

export default function CloudComputing() {
  return (
    <div className="service-page">
      <main className="service-page-container text-white">
        <div className="text-center mb-10 sm:mb-12">
          <PageHeading className="mb-3 sm:mb-4">Cloud Computing Services</PageHeading>
          <PageSubheading className="text-gray-300">
            MZ Koder provides advanced Cloud Computing solutions tailored for all business sizes.
            From secure data storage to scalable hosting, we offer cloud services that improve agility,
            reduce operational costs, and ensure maximum uptime.
          </PageSubheading>
        </div>

        <div className="space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-10">
            <div className="w-full md:w-1/2 h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden border border-white/10 bg-white/5 shrink-0">
              <img
                src={images[0]}
                alt="Scalable Infrastructure"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = "https://placehold.co/800x400/1e40af/94a3b8?text=Cloud+Infrastructure"; }}
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-0 md:px-4">
              <h2 className="page-heading text-xl sm:text-2xl font-semibold mb-3 text-white">Scalable Infrastructure</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Grow your business without limitations. Our cloud infrastructure adapts smoothly to
                increasing business demands while maintaining top performance.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-stretch gap-6 md:gap-10">
            <div className="w-full md:w-1/2 h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden border border-white/10 bg-white/5 shrink-0">
              <img
                src={images[1]}
                alt="Disaster Recovery"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = "https://placehold.co/800x400/1e40af/94a3b8?text=Disaster+Recovery"; }}
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-0 md:px-4 md:pr-8">
              <h2 className="page-heading text-xl sm:text-2xl font-semibold mb-3 text-white">Disaster Recovery</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Ensure business continuity with our advanced disaster recovery solutions.
                We offer automatic backups, redundancy, and rapid recovery options for guaranteed uptime.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mt-12 md:mt-16">
          <h2 className="page-heading text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white">Power Your Business with MZ Koder Cloud</h2>
          <p className="text-gray-300 text-sm sm:text-base mb-6">
            Experience next‑level scalability, security, and cost‑efficiency with MZ Koder's Cloud Computing services.
          </p>
          <GradientButton href="/contact">Get Started Today</GradientButton>
        </div>
      </main>
    </div>
  );
}
