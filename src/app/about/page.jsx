"use client";

import { motion } from "framer-motion";
import {
  FaCloud,
  FaBolt,
  FaSync,
  FaCogs,
  FaRocket,
  FaHeadset,
  FaCode,
  FaUsers,
  FaLightbulb,
  FaAward,
  FaGlobe,
  FaHandshake,
} from "react-icons/fa";
import GradientButton from "@/Component/GradientButton";
import PageHeading from "@/Component/PageHeading";
import PageSubheading from "@/Component/PageSubheading";

const fadeUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };
const stagger = { animate: { transition: { staggerChildren: 0.08 } } };

const features = [
  {
    icon: FaCloud,
    title: "Cloud & Scale",
    desc: "Fully redundant, high-performance cloud platform with enterprise reliability and security.",
    color: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-500/5",
  },
  {
    icon: FaBolt,
    title: "Instant Activation",
    desc: "Advanced network infrastructure with Anycast support and extensive DDoS protection.",
    color: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-amber-500/5",
  },
  {
    icon: FaSync,
    title: "Fully Redundant",
    desc: "High availability and failover so your services stay online around the clock.",
    color: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-500/5",
  },
  {
    icon: FaCogs,
    title: "Powerful Automation",
    desc: "Streamlined workflows and automation to save time and reduce human error.",
    color: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-500/5",
  },
  {
    icon: FaRocket,
    title: "High Performance",
    desc: "Optimized stack and infrastructure for speed and scalability.",
    color: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-500/5",
  },
  {
    icon: FaHeadset,
    title: "Dedicated Support",
    desc: "Expert support when you need it—we're here to help you succeed.",
    color: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-500/5",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered", icon: FaRocket },
  { value: "30+", label: "Happy Clients", icon: FaHandshake },
  { value: "5+", label: "Years Experience", icon: FaAward },
  { value: "12+", label: "Countries Served", icon: FaGlobe },
];

const values = [
  {
    title: "Transparency",
    text: "Clear communication, honest timelines, and no hidden costs. We treat your project like our own.",
  },
  {
    title: "Quality First",
    text: "We don't ship fast at the cost of quality. Every line of code and every pixel is reviewed.",
  },
  {
    title: "Long-term Partnership",
    text: "We're not just vendors—we grow with you. Support, iterations, and advice when you need it.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-400 font-medium tracking-wider uppercase text-sm mb-4"
          >
            Who We Are
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Increase Your Brand's Visibility with the Right Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            MZ KODERS is your one-stop shop for digital marketing, branding, and tech solutions.
            We help businesses grow, reach more customers, and increase sales through modern
            digitalization and creative excellence.
          </motion.p>
        </div>
      </section>

      {/* Story + Image block */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/3] max-h-[360px]"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div>
            <PageHeading className="mb-4 text-left">Our Story</PageHeading>
            <p className="text-gray-300 leading-relaxed mb-4">
              We started with a simple belief: brands deserve a partner that combines technical depth with creative flair. What began as a small studio has grown into a full-service agency—web and app development, AI solutions, graphic design, content writing, and digital marketing—all under one roof.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              We take your brand to new heights and cater to all your digital needs. When it comes to work, we ensure zero compromise on quality and relevance. Every project is an opportunity to push boundaries and deliver results that matter.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Let's build the next masterpiece together.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-blue-400 rounded-full" />
                Our Mission
              </h2>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses with technology and creativity that drive real growth. We build products and campaigns that are scalable, measurable, and aligned with your goals—so you can focus on what you do best while we handle the rest.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-blue-400 rounded-full" />
                Our Vision
              </h2>
              <p className="text-gray-300 leading-relaxed">
                To be the go-to partner for brands that refuse to settle. We aim to set the standard for quality, transparency, and innovation—delivering work that not only meets expectations but exceeds them, project after project.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center"
          >
            {stats.map((item) => (
              <div key={item.label}>
                <item.icon className="text-3xl text-blue-400 mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold text-white">{item.value}</p>
                <p className="text-sm text-gray-400 mt-1">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Features grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <PageHeading className="mb-3">Why Choose Us</PageHeading>
          <PageSubheading className="text-gray-400 max-w-xl mx-auto">
            We combine technical excellence with creative strategy so your brand stands out.
          </PageSubheading>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className={`rounded-2xl border ${item.border} ${item.bg} backdrop-blur-sm p-6 text-left hover:border-blue-400/40 transition-colors`}
            >
              <item.icon className={`text-3xl mb-4 ${item.color}`} />
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Values */}
      <section className="border-t border-white/10 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <PageHeading className="text-center mb-10">What We Stand For</PageHeading>
          <div className="space-y-8">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-400/20 transition-colors"
              >
                <span className="text-2xl font-bold text-blue-400/80 shrink-0">0{i + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech / Values strip */}
      <section className="border-y border-white/10 py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <FaCode className="text-4xl text-blue-400 mx-auto mb-2" />
            <p className="text-xl font-bold text-white">Tech First</p>
            <p className="text-sm text-gray-400">Modern stack, clean code</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <FaUsers className="text-4xl text-blue-400 mx-auto mb-2" />
            <p className="text-xl font-bold text-white">Client Focus</p>
            <p className="text-sm text-gray-400">Your success is our goal</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <FaLightbulb className="text-4xl text-blue-400 mx-auto mb-2" />
            <p className="text-xl font-bold text-white">Innovation</p>
            <p className="text-sm text-gray-400">Ideas that drive growth</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <PageHeading className="mb-3">Ready to Work Together?</PageHeading>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-8"
        >
          Tell us about your project and we'll help you bring it to life.
        </motion.p>
        <GradientButton href="/contact">Get in Touch</GradientButton>
      </section>
    </div>
  );
}
