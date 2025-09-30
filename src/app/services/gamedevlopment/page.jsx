import Footer from "@/Component/Footer";
import Header from "@/Component/Header";
import TestimonialSection from "@/Component/review";
import { FaGamepad, FaMobileAlt, FaDesktop, FaUsers, FaCogs, FaVrCardboard } from "react-icons/fa";

export default function GameDevelopment() {
  return (
    <div className="p-10">
      {/* Page Heading */}
      <Header />
      <h1 className="text-4xl font-bold text-center mb-6">Game Development</h1>
      <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto">
        SavTech Digital provides next-level Game Development services. From mobile to PC, we bring your
        gaming ideas to life with immersive graphics, engaging gameplay, and cutting-edge technology.
      </p>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
        <div className="p-6 shadow-lg rounded-lg">
          <FaMobileAlt className="text-4xl mx-auto text-purple-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Mobile Games</h2>
          <p className="text-gray-600">High-performance mobile games for Android & iOS with smooth gameplay.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <FaDesktop className="text-4xl mx-auto text-purple-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">PC & Console Games</h2>
          <p className="text-gray-600">Stunning graphics and immersive PC/console games for global audiences.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <FaVrCardboard className="text-4xl mx-auto text-purple-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">VR/AR Games</h2>
          <p className="text-gray-600">Innovative VR/AR games delivering unforgettable real-time experiences.</p>
        </div>
      </div>

      {/* Image Left - Text Right */}
      <div className="md:flex items-center gap-10 mb-12">
        <img src="/game1.jpg" alt="Multiplayer Gaming" className="md:w-1/2 rounded-lg shadow-lg" />
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Multiplayer Experiences</h2>
          <p className="text-gray-700">
            Connect players worldwide with powerful multiplayer servers and seamless connectivity.
            From casual games to competitive eSports, we design scalable experiences for all.
          </p>
        </div>
      </div>

      {/* Image Right - Text Left */}
      <div className="md:flex items-center gap-10 mb-12 flex-row-reverse">
        <img src="/game2.jpg" alt="Custom Game Engines" className="md:w-1/2 rounded-lg shadow-lg" />
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Custom Game Engines</h2>
          <p className="text-gray-700">
            Build games with optimized engines and frameworks. Our developers focus on performance,
            graphics, and seamless user interaction for a polished product.
          </p>
        </div>
      </div>

      {/* Extra Features */}
      <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
        <div className="p-6 shadow-lg rounded-lg">
          <FaUsers className="text-4xl mx-auto text-purple-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Community Games</h2>
          <p className="text-gray-600">Build communities with social features, leaderboards, and interactive gaming.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <FaGamepad className="text-4xl mx-auto text-purple-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Cross-Platform</h2>
          <p className="text-gray-600">One game across multiple platforms: PC, mobile, and console for broader reach.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <FaCogs className="text-4xl mx-auto text-purple-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Game Optimization</h2>
          <p className="text-gray-600">Ensure smooth performance with optimized code, graphics, and resources.</p>
        </div>
      </div>

      {/* Closing Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Turn Ideas into Reality</h2>
        <p className="text-gray-700 mb-6">
          Partner with SavTech Digital to develop high-quality games that engage and inspire.
          Whether mobile, PC, or VR, our experts bring creativity and technology together.
        </p>
      </div>
      <TestimonialSection/>
      <Footer/>
    </div>
  );
}
