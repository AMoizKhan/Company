

"use client";
import FAQ from '@/Component/FAQs';
import Header from '@/Component/Header';
import TestimonialSection from '@/Component/review';
import Footer from '@/Component/Footer';
import React, { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Submit', form);
    setStatus('Message sent (demo)');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(null), 3000);
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
        {/* Centered Heading */}
        <div className="relative inline-block text-center  mt-20">
          <h2 className="text-3xl font-bold mb-6 relative inline-block px-7 py-2">
            <span className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-black"></span>
            Contact Us
            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-black"></span>
          </h2>
        </div>

        {/* Form + Office */}
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Transparent Form Box (Triangle Shape effect using clip-path) */}
          <div className="bg-transparent p-8 md:p-12 rounded-4xl" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
                  placeholder="Write your message..."
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                >
                  Send Message
                </button>

                {status && <span className="text-sm text-green-600">{status}</span>}
              </div>
            </form>
          </div>

          {/* Right: Office details */}
          <aside className=" rounded-2xl p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-4">Office</h3>
            <p className="text-sm text-gray-600 mb-6">Pure Scent HQ<br/>123 Aroma Street<br/>Karachi, Pakistan</p>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium">Phone</h4>
                <a href="tel:+922112345678" className="block text-base mt-1">+92 21 1234 5678</a>
              </div>

              <div>
                <h4 className="text-sm font-medium">Email</h4>
                <a
                  href="mailto:info@purescent.example"
                  className="block text-base mt-1 transition-colors duration-200 hover:text-indigo-600"
                >
                  info@purescent.example
                </a>
              </div>

              <div>
                <h4 className="text-sm font-medium">Working Hours</h4>
                <p className="text-sm mt-1 text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="mt-8 text-xs text-gray-400">Prefer phone? Call us during working hours for the fastest response.</div>
          </aside>
        </div>
        <TestimonialSection />
      </div>
      <div className="mt-16">
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
