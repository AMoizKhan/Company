"use client";

import Header from "@/Component/Header";
import { FaCloud, FaBolt, FaSync, FaCogs, FaRocket, FaHeadset } from "react-icons/fa";

export default function About() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <Header/>
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">
          Increase Your Brand’s Visibility with the Right Team!
        </h2>
        <p className="text-gray-700 mb-4">
          Considering the ever-changing trends of Digital Marketing, SavTech Digital has
          come forward to be the one-stop shop to offer the best digital marketing and
          branding solutions for struggling businesses. We master the art of
          digitalization, so, our Team can help ensure your business growth, brand reach,
          and increased sales.
        </p>
        <p className="text-gray-700 mb-4">
          SavTech Digital is acquainted with taking your brand to new heights. We are set
          to cater to all your digital needs in terms of marketing, content creation, and
          graphic design. When it comes to work, SavTech Digital ensures zero compromises
          in relevance to the quality.
        </p>
        <p className="text-gray-700">
          So, Let’s be savage together and start working on the next masterpiece.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <FaCloud className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="font-semibold mb-2">Cloud Load Balancing</h3>
          <p className="text-sm text-gray-600">
            Deploy your service infrastructure on our fully redundant, high performance
            cloud platform and benefit from its high reliability, security and enterprise
            feature set.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <FaBolt className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h3 className="font-semibold mb-2">Instant Activation</h3>
          <p className="text-sm text-gray-600">
            We operate one of the most advanced 100 Gbit networks in the world, complete
            with Anycast support and extensive DDoS protection.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <FaSync className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="font-semibold mb-2">Fully Redundant</h3>
          <p className="text-sm text-gray-600">
            We operate one of the most advanced 100 Gbit networks in the world, complete
            with Anycast support and extensive DDoS protection.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <FaCogs className="text-4xl text-purple-600 mx-auto mb-4" />
          <h3 className="font-semibold mb-2">Powerful Automation</h3>
          <p className="text-sm text-gray-600">
            We operate one of the most advanced 100 Gbit networks in the world, complete
            with Anycast support and extensive DDoS protection.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <FaRocket className="text-4xl text-red-600 mx-auto mb-4" />
          <h3 className="font-semibold mb-2">High Performance</h3>
          <p className="text-sm text-gray-600">
            We operate one of the most advanced 100 Gbit networks in the world, complete
            with Anycast support and extensive DDoS protection.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <FaHeadset className="text-4xl text-pink-600 mx-auto mb-4" />
          <h3 className="font-semibold mb-2">Dedicated Support</h3>
          <p className="text-sm text-gray-600">
            We operate one of the most advanced 100 Gbit networks in the world, complete
            with Anycast support and extensive DDoS protection.
          </p>
        </div>
      </div>

      {/* Customer Story */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Customer's Story</h2>
        <p className="text-gray-700">
          Deploy your service infrastructure on our fully redundant, high cloud platform
          and benefit.
        </p>
      </div>
      
    </div>
  );
}
