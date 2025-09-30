"use client";

import {
  FaPalette,
  FaPenNib,
  FaImage,
  FaPencilRuler,
  FaLightbulb,
  FaLaptopCode,
} from "react-icons/fa";

export default function GraphicDesign() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-6">Graphic Design</h1>
      <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto">
        Creative visuals that inspire, communicate, and elevate your brand. From
        logos to marketing assets, we craft designs that connect with your
        audience.
      </p>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <FaPalette className="text-4xl mx-auto text-pink-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Brand Identity</h3>
          <p className="text-gray-600 text-sm">
            Unique logos, typography, and colors to define your brand presence.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <FaPenNib className="text-4xl mx-auto text-pink-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Creative Illustrations</h3>
          <p className="text-gray-600 text-sm">
            Hand-crafted illustrations that make your designs stand out.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <FaImage className="text-4xl mx-auto text-pink-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Digital Assets</h3>
          <p className="text-gray-600 text-sm">
            Eye-catching banners, posters, and social media graphics.
          </p>
        </div>
      </div>

      {/* Image Left - Text Right */}
      <div className="md:flex items-center gap-10 mb-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Marketing Materials</h2>
          <p className="text-gray-700 leading-relaxed">
            From brochures to digital ads, our designs are made to capture
            attention and drive engagement. Each asset is optimized for both
            print and digital use.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="w-full h-56 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            Image: marketing design (place /public/graphic1.jpg)
          </div>
        </div>
      </div>

      {/* Image Right - Text Left */}
      <div className="md:flex items-center gap-10 mb-12 flex-row-reverse">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">UI/UX Graphics</h2>
          <p className="text-gray-700 leading-relaxed">
            Smooth, modern, and user-friendly visuals tailored for websites and
            apps. We combine creativity with usability for better digital
            experiences.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="w-full h-56 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            Image: UI/UX graphics (place /public/graphic2.jpg)
          </div>
        </div>
      </div>

      {/* Extra Features */}
      <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
        <div className="bg-white p-6 rounded-xl shadow">
          <FaPencilRuler className="text-3xl mx-auto text-pink-600 mb-3" />
          <h4 className="font-semibold mb-2">Print Design</h4>
          <p className="text-gray-600 text-sm">
            Flyers, packaging, and stationery that leave a lasting impression.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <FaLightbulb className="text-3xl mx-auto text-pink-600 mb-3" />
          <h4 className="font-semibold mb-2">Creative Concepts</h4>
          <p className="text-gray-600 text-sm">
            Unique ideas that transform into stunning visual campaigns.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <FaLaptopCode className="text-3xl mx-auto text-pink-600 mb-3" />
          <h4 className="font-semibold mb-2">Web Graphics</h4>
          <p className="text-gray-600 text-sm">
            Custom graphics for websites, landing pages, and e-commerce stores.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-3">Let’s Design Your Vision</h3>
        <p className="text-gray-700 mb-6">
          Partner with us to create designs that not only look great but also
          work for your business goals.
        </p>
        <button className="bg-pink-600 text-white px-6 py-3 rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
}
