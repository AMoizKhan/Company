"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHeading from "@/Component/PageHeading";
import PageSubheading from "@/Component/PageSubheading";
import GradientButton from "@/Component/GradientButton";
import { FaExternalLinkAlt, FaCode, FaPalette, FaChartLine, FaBook, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    desc: "Full-stack online store with cart, payments, and admin dashboard. Built for a retail client with 40% increase in conversions.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    link: "#",
    icon: FaCode,
  },
  {
    id: 2,
    title: "Brand Identity & UI Kit",
    category: "Graphic Design",
    desc: "Complete visual identity, logo system, and component library for a fintech startup. Used across web and mobile.",
    image: "https://images.unsplash.com/photo-1561070791-2526d31a1f44?w=800&q=80",
    tech: ["Figma", "Illustrator", "Design Systems"],
    link: "#",
    icon: FaPalette,
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    category: "AI & Data",
    desc: "Real-time analytics and BI dashboard with custom ML models for forecasting. Reduced reporting time by 60%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tech: ["Python", "TensorFlow", "Next.js", "PostgreSQL"],
    link: "#",
    icon: FaChartLine,
  },
  {
    id: 4,
    title: "Mobile Banking App",
    category: "App Development",
    desc: "Cross-platform banking app with biometric login, transfers, and bill pay. Launched in 3 countries.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    tech: ["React Native", "Node.js", "Plaid"],
    link: "#",
    icon: FaCode,
  },
  {
    id: 5,
    title: "Content & Blog Hub",
    category: "Content & SEO",
    desc: "Content strategy, 50+ SEO-optimized articles, and editorial calendar for a B2B SaaS. Organic traffic up 3x.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    tech: ["Content Strategy", "SEO", "WordPress"],
    link: "#",
    icon: FaBook,
  },
  {
    id: 6,
    title: "Campaign & Social Growth",
    category: "Digital Marketing",
    desc: "Multi-channel campaigns (Meta, Google, LinkedIn) and community management. 2x follower growth in 6 months.",
    image: "https://images.unsplash.com/photo-1611162616305-e2be4c2e2a?w=800&q=80",
    tech: ["Paid Ads", "Social", "Analytics"],
    link: "#",
    icon: FaChartLine,
  },
];

const blogPosts = [
  {
    id: 1,
    title: "How We Built a Scalable Dashboard in 8 Weeks",
    excerpt: "Architecture decisions, tech stack, and lessons learned from our latest analytics project.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    date: "Feb 2025",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Design Systems That Actually Scale",
    excerpt: "Why we moved to a component-driven workflow and how it improved delivery speed by 40%.",
    image: "https://images.unsplash.com/photo-1561070791-2526d31a1f44?w=600&q=80",
    date: "Jan 2025",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "From Idea to Launch: Our Process",
    excerpt: "A walkthrough of our discovery, design, and development phases for product builds.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    date: "Dec 2024",
    readTime: "6 min read",
  },
];

const fadeUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };
const stagger = { animate: { transition: { staggerChildren: 0.06 } } };

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web Development", "App Development", "Graphic Design", "AI & Data", "Digital Marketing", "Content & SEO"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-400 font-medium tracking-wider uppercase text-sm mb-4"
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5"
          >
            Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            Selected projects and case studies—from web and app development to design, AI, and marketing.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? "bg-blue-500/30 text-white border border-blue-400/50"
                  : "bg-white/5 text-gray-300 border border-white/10 hover:border-blue-400/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded-md bg-blue-500/40 text-xs text-white backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-black/50 text-xs text-blue-300 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <project.icon className="text-blue-400 text-lg shrink-0" />
                  <h2 className="page-heading text-lg font-semibold text-white">
                    {project.title}
                  </h2>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors"
                >
                  View project <FaExternalLinkAlt className="text-xs" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Blog / Insights */}
      <section className="border-t border-white/10 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <PageHeading className="mb-3">Insights & Blog</PageHeading>
            <PageSubheading className="text-gray-400 max-w-xl mx-auto">
              How we approach problems, ship products, and share what we learn.
            </PageSubheading>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-blue-400/20 transition-colors"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={post.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-blue-400/90 mb-2">
                    {post.date} · {post.readTime}
                  </p>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-blue-400 text-sm font-medium">
                    Read more <FaArrowRight className="text-xs" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
        <PageHeading className="mb-3">Start Your Project</PageHeading>
        <PageSubheading className="text-gray-400 mb-8">
          Have an idea? We’ll help you turn it into a product or campaign.
        </PageSubheading>
        <GradientButton href="/contact">Get in Touch</GradientButton>
      </section>
    </div>
  );
}
