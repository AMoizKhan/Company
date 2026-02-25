"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import GradientButton from "@/Component/GradientButton";
import PageHeading from "@/Component/PageHeading";
import PageSubheading from "@/Component/PageSubheading";

const inputClass =
  "w-full rounded-xl border border-white/20 bg-white/5 text-white placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const messagePreview = form.message.length > 80 ? form.message.slice(0, 80) + "…" : form.message;
    toast.success(
      (t) => (
        <div className="space-y-1">
          <p className="font-semibold">Message sent!</p>
          <p className="text-sm opacity-90">From: {form.name} ({form.email})</p>
          <p className="text-sm opacity-80">{messagePreview}</p>
        </div>
      ),
      { duration: 6000 }
    );
    setForm({ name: "", email: "", message: "" });
  }

  const contacts = [
    {
      icon: FaMapMarkerAlt,
      label: "Office",
      value: "MZ KODERS HQ",
      sub: "Karachi, Pakistan",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+92 21 1234 5678",
      sub: null,
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "info@mzkoders.com",
      sub: null,
    },
    {
      icon: FaClock,
      label: "Working Hours",
      value: "Mon - Fri: 9:00 AM - 6:00 PM",
      sub: null,
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-white pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-medium tracking-wider uppercase text-sm mb-2">
            Get in Touch
          </p>
          <PageHeading className="mb-4">Contact Us</PageHeading>
          <PageSubheading className="text-gray-300 mt-4">
            Have a project in mind? Send us a message and we’ll get back to you soon.
          </PageSubheading>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            {contacts.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 transition"
              >
                <item.icon className="text-2xl text-blue-400 mb-3" />
                <p className="text-sm text-gray-400 uppercase tracking-wider">{item.label}</p>
                <p className="text-white font-medium mt-1">{item.value}</p>
                {item.sub && <p className="text-gray-400 text-sm mt-1">{item.sub}</p>}
              </div>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className={`${inputClass} resize-none`}
                />
              </div>
              <div className="flex items-center gap-4 pt-2">
                <GradientButton type="submit">
                  <span className="flex items-center gap-2">
                    <FaPaperPlane size={14} /> Send Message
                  </span>
                </GradientButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
