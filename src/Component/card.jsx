"use client";

import ParticleCard from "./ParticleCard";

export default function Card({
  title,
  description,
  link,
  className = "",
}) {
  return (
    <ParticleCard
      className={`bg-white border-4 border-blue-500 rounded-4xl p-4 ${className}`}
      enableTilt={true}
      enableMagnetism={true}
      clickEffect={true}
      particleCount={12}
      glowColor="132, 0, 255"
      enableBorderGlow={true}
    >
      {/* Title */}
      <h3 className="text-2xl font-bold text-white mt-3">{title}</h3>

      {/* Description */}
      <p className="text-lg text-white mt-2">{description}</p>

      {/* Read More */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 px-4 py-2 text-blue-600 font-semibold border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
        >
          Read More
        </a>
      )}
    </ParticleCard>
  );
}
