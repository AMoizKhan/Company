"use client";

import GradientButton from "@/Component/GradientButton";
import Testimonials from "@/Component/review";
import PageHeading from "@/Component/PageHeading";
import PageSubheading from "@/Component/PageSubheading";
import { serviceImages } from "@/lib/serviceImages";

const images = serviceImages.video;

export default function VideoEditing() {
  return (
    <div className="service-page">
      <main className="service-page-container">
        <div className="text-center mb-10 sm:mb-12">
          <PageHeading className="mb-3 sm:mb-4">Video Editing</PageHeading>
          <PageSubheading className="text-gray-300">
            Professional video editing services to create stunning visuals, smooth
            transitions, and engaging stories for your brand or personal projects.
          </PageSubheading>
        </div>

        <div className="space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-10">
            <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col justify-center px-0 md:px-4">
              <h2 className="page-heading text-xl sm:text-2xl font-bold mb-3 text-white">Storytelling Through Editing</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Every video tells a story. We make sure your footage is arranged in
                a way that engages, informs, and inspires your audience.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 h-56 sm:h-64 md:h-72 rounded-xl overflow-hidden border border-white/10 bg-white/5 shrink-0">
              <img src={images[0]} alt="Storytelling" className="w-full h-full object-cover" loading="lazy" onError={(e) => { e.currentTarget.src = "https://placehold.co/800x400/1e40af/94a3b8?text=Storytelling"; }} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-stretch gap-6 md:gap-10">
            <div className="w-full md:w-1/2 flex flex-col justify-center px-0 md:px-4 md:pr-8">
              <h2 className="page-heading text-xl sm:text-2xl font-bold mb-3 text-white">Social Media Ready</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Get videos optimized for YouTube, Instagram, TikTok, and other
                platforms to maximize reach and engagement.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-56 sm:h-64 md:h-72 rounded-xl overflow-hidden border border-white/10 bg-white/5 shrink-0">
              <img src={images[1]} alt="Social media video" className="w-full h-full object-cover" loading="lazy" onError={(e) => { e.currentTarget.src = "https://placehold.co/800x400/1e40af/94a3b8?text=Social+Media"; }} />
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mt-12 md:mt-16">
          <h3 className="page-heading text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">Let's Create Videos That Inspire</h3>
          <p className="text-gray-300 text-sm sm:text-base mb-6">
            From short clips to cinematic productions, we bring your ideas to life with professional video editing services.
          </p>
          <GradientButton href="/contact">Start Editing Now</GradientButton>
        </div>
      </main>
      <Testimonials />
    </div>
  );
}
