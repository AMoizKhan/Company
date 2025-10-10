"use client";

import Footer from "@/Component/Footer";
import Header from "@/Component/Header";
import Link from "next/link";
import {
  FaRobot,
  FaBrain,
  FaChartLine,
  FaCogs,
  FaSearch,
  FaDatabase,
} from "react-icons/fa";

export default function AI() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="sticky top-0 z-50 bg-gray-50">
        <Header />
      </div>
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-6">
        Artificial Intelligence
      </h1>
      <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto">
        Unlock the power of Artificial Intelligence to automate tasks, make
        smarter decisions, and build intelligent solutions for your business.
      </p>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <FaBrain className="text-4xl mx-auto text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
          <p className="text-gray-600 text-sm">
            Develop predictive models that learn from data and improve over
            time.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <FaRobot className="text-4xl mx-auto text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">AI Automation</h3>
          <p className="text-gray-600 text-sm">
            Automate business processes with intelligent bots and AI systems.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <FaChartLine className="text-4xl mx-auto text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
          <p className="text-gray-600 text-sm">
            Use AI-powered insights to analyze trends and make informed
            decisions.
          </p>
        </div>
      </div>

      {/* Image Left - Text Right */}
      <div className="md:flex items-center gap-10 mb-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Natural Language Processing</h2>
          <p className="text-gray-700 leading-relaxed">
            Build AI models that understand and respond to human language.
            Whether it’s chatbots, sentiment analysis, or content generation, we
            make communication smarter.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="md:w-1/2">
            <img
              src="../image/ai.jpg"
              alt="NLP Illustration"
              className="w-full h-56 object-cover rounded-lg"
            />
          </div>

        </div>
      </div>

      {/* Image Right - Text Left */}
      <div className="md:flex items-center gap-10 mb-12 flex-row-reverse">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Computer Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Leverage AI to analyze and process images or videos for facial
            recognition, object detection, and more.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="md:w-1/2">
            <img
              src="../image/ai-2.jpg"
              alt="NLP Illustration"
              className="w-full h-56 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Extra Features */}
      <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
        <div className="bg-white p-6 rounded-xl shadow">
          <FaCogs className="text-3xl mx-auto text-blue-600 mb-3" />
          <h4 className="font-semibold mb-2">AI Integration</h4>
          <p className="text-gray-600 text-sm">
            Connect AI with your existing business systems for smarter
            workflows.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <FaSearch className="text-3xl mx-auto text-blue-600 mb-3" />
          <h4 className="font-semibold mb-2">Predictive Insights</h4>
          <p className="text-gray-600 text-sm">
            AI-driven insights to predict customer behavior and market trends.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <FaDatabase className="text-3xl mx-auto text-blue-600 mb-3" />
          <h4 className="font-semibold mb-2">Big Data Solutions</h4>
          <p className="text-gray-600 text-sm">
            Handle large datasets with AI models for better efficiency and
            outcomes.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-3">Empower Your Business with AI</h3>
        <p className="text-gray-700 mb-6">
          Partner with us to integrate AI into your products and services for a
          smarter future.
        </p>
        <Link href="/contact">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md">
            Get Started
          </button>
        </Link>

      </div>
      <Footer />
    </div>
  );
}
