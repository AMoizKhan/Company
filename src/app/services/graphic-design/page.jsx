"use client";

import { motion } from "framer-motion";
import {
  FaPalette,
  FaPenNib,
  FaImage,
  FaPencilRuler,
  FaLightbulb,
  FaLaptopCode,
} from "react-icons/fa";
import GradientButton from "@/Component/GradientButton";
import PageHeading from "@/Component/PageHeading";
import PageSubheading from "@/Component/PageSubheading";
import { serviceImages } from "@/lib/serviceImages";

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const stagger = { animate: { transition: { staggerChildren: 0.06 } } };

const mainServices = [
  { icon: FaPalette, title: "Brand Identity", desc: "Unique logos, typography, and colors to define your brand presence.", color: "text-blue-400", border: "border-blue-400/30", bg: "bg-blue-500/10" },
  { icon: FaPenNib, title: "Creative Illustrations", desc: "Hand-crafted illustrations that make your designs stand out.", color: "text-blue-400", border: "border-blue-400/30", bg: "bg-blue-500/10" },
  { icon: FaImage, title: "Digital Assets", desc: "Eye-catching banners, posters, and social media graphics.", color: "text-blue-400", border: "border-blue-400/30", bg: "bg-blue-500/10" },
];

const extraServices = [
  {
    icon: FaPencilRuler,
    title: "Print Design",
    desc: "Flyers, packaging, and stationery that leave a lasting impression.",
  },
  {
    icon: FaLightbulb,
    title: "Creative Concepts",
    desc: "Unique ideas that transform into stunning visual campaigns.",
  },
  {
    icon: FaLaptopCode,
    title: "Web Graphics",
    desc: "Custom graphics for websites, landing pages, and e-commerce.",
  },
];

export default function GraphicDesign() {
  return (
    <div className="service-page">
      <main className="service-page-container">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-medium tracking-wider uppercase text-sm mb-3">
            Visuals & Branding
          </p>
          <PageHeading className="mb-4">Graphic Design</PageHeading>
          <PageSubheading className="text-gray-300">
            Creative visuals that inspire, communicate, and elevate your brand. From
            logos to marketing assets, we craft designs that connect with your audience.
          </PageSubheading>
        </motion.section>

        {/* Main feature grid - glass cards */}
        <motion.section
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-20"
        >
          {mainServices.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className={`rounded-2xl border ${item.border} ${item.bg} backdrop-blur-sm p-8 text-center hover:border-opacity-60 transition`}
            >
              <item.icon className={`text-4xl mb-5 ${item.color}`} />
              <h3 className="page-heading text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="page-subheading text-left text-base text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Marketing Materials - Image + Text */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-stretch gap-6 md:gap-12 mb-12 md:mb-20"
        >
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="page-heading text-2xl font-bold mb-4 text-white">Marketing Materials</h2>
            <p className="page-subheading text-left text-gray-300">
              From brochures to digital ads, our designs are made to capture
              attention and drive engagement. Each asset is optimized for both
              print and digital use.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 rounded-2xl overflow-hidden border border-white/10 bg-white/5 h-56 sm:h-64 md:h-72 shrink-0">
            <img
              src={serviceImages.graphic[0]}
              alt="Marketing design and branding"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => { e.currentTarget.src = "https://placehold.co/800x400/1e40af/94a3b8?text=Marketing+Design"; }}
            />
          </div>
        </motion.section>

        {/* UI/UX Graphics - Image + Text reversed */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse items-stretch gap-6 md:gap-12 mb-12 md:mb-20"
        >
          <div className="md:w-1/2">
            <h2 className="page-heading text-2xl font-bold mb-4 text-white">UI/UX Graphics</h2>
            <p className="page-subheading text-left text-gray-300">
              Smooth, modern, and user-friendly visuals tailored for websites and
              apps. We combine creativity with usability for better digital experiences.
            </p>
          </div>
          <div className="md:w-1/2 rounded-2xl overflow-hidden border border-white/10 bg-white/5 h-56 sm:h-64 md:h-72 shrink-0">
            <img
              src={serviceImages.graphic[1]}
              alt="UI/UX graphics and digital design"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => { e.currentTarget.src = "https://placehold.co/800x400/1e40af/94a3b8?text=UI+UX+Graphics"; }}
            />
          </div>
        </motion.section>

        {/* Extra features strip */}
        <motion.section
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-20"
        >
          {extraServices.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center"
            >
              <item.icon className="text-3xl text-blue-400 mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">{item.title}</h4>
              <p className="page-subheading text-sm text-left text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="page-heading text-2xl font-bold mb-3 text-white">Let’s Design Your Vision</h2>
          <PageSubheading className="mb-8">
            Partner with us to create designs that not only look great but also
            work for your business goals.
          </PageSubheading>
          <GradientButton href="/contact">Get Started</GradientButton>
        </motion.section>
      </main>
    </div>
  );
}
