"use client";

import TestimonialSection from "@/Component/review";
import PageHeading from "@/Component/PageHeading";
import PageSubheading from "@/Component/PageSubheading";
import GradientButton from "@/Component/GradientButton";
import { FaStar } from "react-icons/fa";
import { serviceImages } from "@/lib/serviceImages";

const images = serviceImages.game;

export default function GameDevelopment() {
  return (
    <div className="service-page">
      <main className="service-page-container text-white">
        <div className="text-center mb-10 sm:mb-12 mt-16 sm:mt-20 md:mt-24">
          <PageHeading className="mb-3 sm:mb-4">Game Development</PageHeading>
          <PageSubheading className="text-gray-300">
            MZ Koders specializes in card game development, crafting engaging and
            interactive gaming experiences tailored for your audience. We bring your vision to life.
          </PageSubheading>
        </div>

        <div className="space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-10">
            <div className="w-full md:w-1/2 h-56 sm:h-64 md:h-72 rounded-xl overflow-hidden border border-white/10 bg-white/5 shrink-0">
              <img src={images[0]} alt="Multiplayer Gaming" className="w-full h-full object-cover" loading="lazy" onError={(e) => { e.currentTarget.src = "https://placehold.co/800x400/1e40af/94a3b8?text=Gaming"; }} />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-0 md:px-4 lg:px-8">
              <h2 className="page-heading text-xl sm:text-2xl font-semibold mb-3 text-white">Multiplayer Experiences</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Connect players worldwide with powerful multiplayer servers and
                seamless connectivity. From casual card games to competitive
                tournaments, we design scalable experiences for all.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-stretch gap-6 md:gap-10">
            <div className="w-full md:w-1/2 h-56 sm:h-64 md:h-72 rounded-xl overflow-hidden border border-white/10 bg-white/5 shrink-0">
              <img src={images[1]} alt="Game development" className="w-full h-full object-cover" loading="lazy" onError={(e) => { e.currentTarget.src = "https://placehold.co/800x400/1e40af/94a3b8?text=Game+Dev"; }} />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-0 md:px-4 md:pr-8">
              <h2 className="page-heading text-xl sm:text-2xl font-semibold mb-3 text-white">Custom Game Engines</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Build card games with optimized engines and frameworks. Our
                developers focus on performance, graphics, and smooth user
                interaction for a polished experience.
              </p>
            </div>
          </div>
        </div>

        <div className="service-section-card p-6 sm:p-8 md:p-10 mt-12 md:mt-16 text-center max-w-4xl mx-auto">
          <FaStar className="text-4xl sm:text-5xl text-blue-400 mx-auto mb-4" />
          <h2 className="page-heading text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-white">Turn Ideas into Reality</h2>
          <p className="text-gray-300 text-sm sm:text-base mb-6">
            Partner with MZ Koders to develop high-quality card games that engage and inspire.
          </p>
          <GradientButton href="/contact">Start Your Project</GradientButton>
        </div>

        <div className="mt-12 md:mt-16">
          <TestimonialSection />
        </div>
      </main>
    </div>
  );
}
