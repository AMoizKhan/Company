"use client";

import Header from "@/Component/Header";
import {
  FaVideo,
  FaFilm,
  FaMagic,
  FaMusic,
  FaPhotoVideo,
  FaShareAlt,
} from "react-icons/fa";

export default function VideoEditing() {
  return (
    <div className="p-10  min-h-screen">
      <Header/>
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-6">Video Editing</h1>
      <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto">
        Professional video editing services to create stunning visuals, smooth
        transitions, and engaging stories for your brand or personal projects.
      </p>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <FaFilm className="text-4xl mx-auto text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Cinematic Editing</h3>
          <p className="text-gray-600 text-sm">
            Transform raw footage into cinematic-quality videos with smooth
            transitions and effects.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <FaMusic className="text-4xl mx-auto text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Sound & Music</h3>
          <p className="text-gray-600 text-sm">
            Add professional background music, sound effects, and audio
            balancing to enhance impact.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <FaMagic className="text-4xl mx-auto text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Visual Effects</h3>
          <p className="text-gray-600 text-sm">
            Special effects and motion graphics to make your video stand out.
          </p>
        </div>
      </div>

      {/* Image Left - Text Right */}
      <div className="md:flex items-center gap-10 mb-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Storytelling Through Editing</h2>
          <p className="text-gray-700 leading-relaxed">
            Every video tells a story. We make sure your footage is arranged in
            a way that engages, informs, and inspires your audience.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="w-full h-56 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            Image: Storytelling (place /public/video1.jpg)
          </div>
        </div>
      </div>

      {/* Image Right - Text Left */}
      <div className="md:flex items-center gap-10 mb-12 flex-row-reverse">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Social Media Ready</h2>
          <p className="text-gray-700 leading-relaxed">
            Get videos optimized for YouTube, Instagram, TikTok, and other
            platforms to maximize reach and engagement.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="w-full h-56 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            Image: Social Media Videos (place /public/video2.jpg)
          </div>
        </div>
      </div>

      {/* Extra Features */}
      <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
        <div className="bg-white p-6 rounded-xl shadow">
          <FaPhotoVideo className="text-3xl mx-auto text-purple-600 mb-3" />
          <h4 className="font-semibold mb-2">Montage Creation</h4>
          <p className="text-gray-600 text-sm">
            Highlight reels and video montages for events, weddings, or brands.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <FaShareAlt className="text-3xl mx-auto text-purple-600 mb-3" />
          <h4 className="font-semibold mb-2">Cross-Platform Formats</h4>
          <p className="text-gray-600 text-sm">
            Deliver videos in multiple formats suitable for every platform.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <FaVideo className="text-3xl mx-auto text-purple-600 mb-3" />
          <h4 className="font-semibold mb-2">HD & 4K Quality</h4>
          <p className="text-gray-600 text-sm">
            Export videos in full HD or 4K to maintain crystal-clear quality.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-3">
          Let’s Create Videos That Inspire
        </h3>
        <p className="text-gray-700 mb-6">
          From short clips to cinematic productions, we bring your ideas to
          life with professional video editing services.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-md">
          Start Editing Now
        </button>
      </div>
    </div>
  );
}
