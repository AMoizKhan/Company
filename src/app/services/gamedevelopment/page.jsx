
"use client";
import Footer from "@/Component/Footer";
import Header from "@/Component/Header";
import TestimonialSection from "@/Component/review";
import { FaStar } from "react-icons/fa";

export default function GameDevelopment() {
  return (
    <div className="p-10 text-white ">
      {/* Header */}
      <Header />

      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-center mb-6 mt-32">
       Game Development
      </h1>
      <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
        MZ Koders specializes in card game development, crafting engaging and
        interactive gaming experiences tailored for your audience. Our expert
        developers create smooth, fast gameplay with stunning graphics and
        reliable backend support. We bring your vision to life.
      </p>

      {/* Image Left - Text Right */}
      <div className="md:flex items-center gap-10 mb-12">
        <img
          src="/game1.jpg"
          alt="Multiplayer Gaming"
          className="md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">
            Multiplayer Experiences
          </h2>
          <p>
            Connect players worldwide with powerful multiplayer servers and
            seamless connectivity. From casual card games to competitive
            tournaments, we design scalable experiences for all.
          </p>
        </div>
      </div>

      {/* Image Right - Text Left */}
      <div className="md:flex items-center gap-10 mb-12 flex-row-reverse">
        <img
          src="/game2.jpg"
          alt="Custom Game Engines"
          className="md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Custom Game Engines</h2>
          <p>
            Build card games with optimized engines and frameworks. Our
            developers focus on performance, graphics, and smooth user
            interaction for a polished experience.
          </p>
        </div>
      </div>

      {/* Closing Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Turn Ideas into Reality</h2>
        <p className="mb-6">
          Partner with MZ Koders to develop high-quality card games that engage
          and inspire. Our experts bring creativity, technology, and industry
          experience together to make your game a success.
        </p>
      </div>

      <hr className="border-t border-gray-500 w-full my-0" />

      {/* Extra Section */}
      <div className="py-16 px-10 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Create Your Game, Ignite Success!
        </h2>
        <p className="max-w-3xl mx-auto mb-12">
          At MZ Koders, we provide quality card game development solutions to
          match your idea. We design modern and challenging games with an
          incredible user interface and graphics to ensure an unforgettable
          player experience.
        </p>

        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-10 text-left max-w-6xl mx-auto">
          {/* Column 1 */}
          <div>
            <FaStar className="text-6xl text-white mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-3 text-white">
              Proven Expertise
            </h3>
            <p>
              The team of card game developers at MZ Koders is truly
              exceptional; our developers have over 8 years of experience
              creating high-quality masterpieces. In this competitive market, we
              respond proactively to client demands with unique value
              propositions.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <FaStar className="text-6xl text-white mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-3 text-white">
              Commitment to Quality
            </h3>
            <p>
              Our quality assurance team at MZ Koders ensures that each card
              game is of premium quality. Quality is the cornerstone of our work
              to create engaging and user-friendly gaming experiences.
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <FaStar className="text-6xl text-white mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-3 text-white">
              Affordable & Efficient Services
            </h3>
            <p>
              We deliver projects on time without compromising affordability or
              quality. With 24/7 customer support, our skilled developers use
              modern technologies to guarantee efficiency and top-notch results.
            </p>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-500 w-full my-0" />

      <TestimonialSection />
      <Footer />
    </div>
  );
}
