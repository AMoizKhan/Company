"use client";

import ParticleCard from "./ParticleCard";
import GradientButton from "./GradientButton";

export default function Card({
  title,
  description,
  link,
  className = "",
}) {
  return (
    <ParticleCard
      className={`bg-transparent border-4 border-blue-500 rounded-4xl p-4 ${className}`}
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
        <div className="mt-3">
          <GradientButton href={link}>Read More</GradientButton>
        </div>
      )}
    </ParticleCard>
  );
}
