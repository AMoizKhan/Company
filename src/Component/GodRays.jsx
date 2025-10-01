"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

// --- Default Controls ---

const defaultControls = {
  showLeftRays: true,
  showRightRays: true,
  verticalOffset: 0,
  angle: 45,
  invertDirection: false,
  excludeProperties: ["dynamicClasses"],
  dynamicClasses: ["rotate-[__angle__deg]", "rotate-[-__angle__deg]"],
};

// --- Ray Configurations ---

const rightRayConfigs = [
  {
    height: "h-[160vh]",
    width: "w-[2vw]",
    blur: "blur-md",
    opacity: "opacity-95",
    gradient: "bg-linear-[100deg,hsl(var(--primary))_0%,hsl(var(--secondary))_20%,hsl(var(--primary))_50%,transparent_70%]",
  },
  {
    height: "h-[150vh]",
    width: "w-[5vw]",
    blur: "blur-xl",
    opacity: "opacity-80",
    gradient: "bg-linear-[100deg,hsl(var(--primary))_0%,hsl(var(--secondary))_25%,hsl(var(--primary))_60%,transparent_75%]",
  },
  {
    height: "h-[70vh]",
    width: "w-[8px]",
    blur: "blur-sm",
    opacity: "opacity-70",
    gradient: "bg-linear-[100deg,hsl(var(--secondary))_10%,hsl(var(--secondary))_60%,hsl(var(--primary))_80%,transparent_95%]",
  },
  {
    height: "h-[120vh]",
    width: "w-[9vw]",
    blur: "blur-2xl",
    opacity: "opacity-25",
    gradient: "bg-linear-[100deg,hsl(var(--primary))_0%,hsl(var(--secondary))_5%,hsl(var(--primary))_35%,transparent_55%]",
  },
  {
    height: "h-[115vh]",
    width: "w-[4vw]",
    blur: "blur-xl",
    opacity: "opacity-40",
    gradient: "bg-linear-[100deg,hsl(var(--secondary))_0%,hsl(var(--secondary))_40%,hsl(var(--primary))_60%,transparent_75%]",
  },
  {
    height: "h-[160vh]",
    width: "w-[4vw]",
    blur: "blur-xl",
    opacity: "opacity-90",
    gradient: "bg-linear-[100deg,hsl(var(--primary))_0%,hsl(var(--secondary))_5%,transparent_35%]",
  },
];

const leftRayConfigs = [
  {
    height: "h-[160vh]",
    width: "w-[2vw]",
    blur: "blur-md",
    opacity: "opacity-95",
    gradient: "bg-linear-[100deg,hsl(var(--primary))_0%,hsl(var(--secondary))_20%,hsl(var(--primary))_50%,transparent_70%]",
  },
  {
    height: "h-[150vh]",
    width: "w-[5vw]",
    blur: "blur-xl",
    opacity: "opacity-80",
    gradient: "bg-linear-[100deg,hsl(var(--primary))_0%,hsl(var(--secondary))_25%,hsl(var(--primary))_60%,transparent_75%]",
  },
  {
    height: "h-[70vh]",
    width: "w-[8px]",
    blur: "blur-sm",
    opacity: "opacity-70",
    gradient: "bg-linear-[100deg,hsl(var(--secondary))_10%,hsl(var(--secondary))_60%,hsl(var(--primary))_80%,transparent_95%]",
  },
  {
    height: "h-[120vh]",
    width: "w-[9vw]",
    blur: "blur-2xl",
    opacity: "opacity-25",
    gradient: "bg-linear-[100deg,hsl(var(--primary))_0%,hsl(var(--secondary))_5%,hsl(var(--primary))_35%,transparent_55%]",
  },
  {
    height: "h-[115vh]",
    width: "w-[4vw]",
    blur: "blur-xl",
    opacity: "opacity-40",
    gradient: "bg-linear-[100deg,hsl(var(--secondary))_0%,hsl(var(--secondary))_40%,hsl(var(--primary))_60%,transparent_75%]",
  },
  {
    height: "h-[160vh]",
    width: "w-[4vw]",
    blur: "blur-xl",
    opacity: "opacity-90",
    gradient: "bg-linear-[100deg,hsl(var(--primary))_0%,hsl(var(--secondary))_5%,transparent_35%]",
  },
];

// --- Fixed values for position and distance ---
const rightPositions = [
  "right-[-15%]",
  "right-[-11%]",
  "right-[-11%]",
  "right-[-11%]",
  "right-[-11%]",
  "right-[-11%]",
];

const rightDistances = [
  "top-[25vh]",
  "top-[30vh]",
  "top-[50vh]",
  "top-[50vh]",
  "top-[55vh]",
  "top-[40vh]",
];

const leftPositions = [
  "left-[-15%]",
  "left-[-11%]",
  "left-[-11%]",
  "left-[-11%]",
  "left-[-11%]",
  "left-[-11%]",
];

const leftDistances = [
  "top-[25vh]",
  "top-[30vh]",
  "top-[45vh]",
  "top-[50vh]",
  "top-[55vh]",
  "top-[40vh]",
];

// --- Component ---

export default function GodRays({ controls: userControls }) {
  // Merge user controls with defaults
  const controls = { ...defaultControls, ...userControls };

  // Dynamically generate rays based on controls
  const activeRays = [];

  // Generate right rays if enabled
  if (controls.showRightRays) {
    rightRayConfigs.forEach((config, index) => {
      const positionProperty = "right";
      const positionValue = rightPositions[index % rightPositions.length];
      const distanceProperty = controls.invertDirection ? "bottom" : "top";
      let distanceValue = rightDistances[index % rightDistances.length];
      if (controls.invertDirection) {
        distanceValue = distanceValue.replace("top", "bottom");
      }

      const origin = controls.invertDirection
        ? "origin-bottom-right"
        : "origin-top-right";
      const rotationAngle = controls.invertDirection
        ? -controls.angle
        : controls.angle;
      const rotate = `rotate-[${rotationAngle}deg]`;

      activeRays.push({
        ...config,
        positionProperty,
        positionValue,
        distanceProperty,
        distanceValue,
        origin,
        rotate,
        key: activeRays.length,
      });
    });
  }

  // Generate left rays if enabled
  if (controls.showLeftRays) {
    leftRayConfigs.forEach((config, index) => {
      const positionProperty = "left";
      const positionValue = leftPositions[index % leftPositions.length];
      const distanceProperty = controls.invertDirection ? "bottom" : "top";
      let distanceValue = leftDistances[index % leftDistances.length];
      if (controls.invertDirection) {
        distanceValue = distanceValue.replace("top", "bottom");
      }

      const origin = controls.invertDirection
        ? "origin-bottom-left"
        : "origin-top-left";
      const rotationAngle = controls.invertDirection
        ? controls.angle
        : -controls.angle;
      const rotate = `rotate-[${rotationAngle}deg]`;

      activeRays.push({
        ...config,
        positionProperty,
        positionValue,
        distanceProperty,
        distanceValue,
        origin,
        rotate,
        key: activeRays.length,
      });
    });
  }

  // Calculate wrapper offset style
  const wrapperStyle = {
    marginTop: `${controls.verticalOffset}vh`,
  };

  return (
    <div
      className="absolute -z-10 inset-0 mt-[5vh] md:mt-[-10vh] pointer-events-none overflow-hidden"
      style={wrapperStyle}
    >
      {/* Map over the activeRays array to render each ray */}
      {activeRays.map((ray) => (
        <motion.div
          key={ray.key}
          className={clsx(
            "absolute",
            ray.positionValue,
            ray.distanceValue,
            ray.rotate,
            ray.height,
            ray.width,
            ray.blur,
            ray.opacity,
            ray.gradient,
            ray.origin
          )}
          initial={{
            scale: 0.98,
            opacity: 0,
            y: controls.invertDirection ? "120%" : "-120%",
            x: ray.positionProperty === "left" ? "2%" : "-2%",
          }}
          animate={{
            scale: [1, 1.03, 1],
            opacity: [0.9, 1, 0.9],
            y: "0%",
            transition: {
              delay: Math.random() * 0.5,
              duration: 1.5 + Math.random(),
              ease: "easeInOut",
              repeatType: "mirror",
            },
          }}
        ></motion.div>
      ))}
    </div>
  );
}