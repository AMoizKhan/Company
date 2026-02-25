"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import GradientButton from "@/Component/GradientButton";

export default function Footer() {
  return (
    <section className="py-10 bg-transparent sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <Link href="/" className="block w-auto h-9 relative">
              <img
                className="w-auto h-9"
                src="/image/logo.png"
                alt="MZ KODERS logo"
              />
            </Link>

            <p className="text-base leading-relaxed text-gray-400 mt-7">
              Discover a world of inspiration and innovation. Stay connected with us for the latest updates and creative ideas.
            </p>

            {/* Social Icons */}
            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-8 h-8 hover:bg-blue-600 transition-colors duration-200"
                >
                  <FaFacebookF size={14} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-8 h-8 hover:bg-blue-400 transition-colors duration-200"
                >
                  <FaTwitter size={14} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-8 h-8 hover:bg-blue-700 transition-colors duration-200"
                >
                  <FaLinkedinIn size={14} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-8 h-8 hover:bg-blue-600 transition-colors duration-200"
                >
                  <FaInstagram size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Company
            </p>
            <ul className="mt-6 space-y-4">
              <li><Link href="/about" className="text-base text-gray-300 hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link href="/services/web" className="text-base text-gray-300 hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-base text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Contact
            </p>
            <ul className="mt-6 space-y-4">
              <li><Link href="/contact" className="text-base text-gray-300 hover:text-blue-400 transition-colors">Customer Support</Link></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-blue-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Subscribe to newsletter
            </p>
            <form action="#" method="POST" className="mt-6">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="block w-full p-4 rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition"
              />
              <div className="mt-3">
                <GradientButton type="submit">Subscribe</GradientButton>
              </div>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-700" />
        <p className="text-sm text-center text-gray-500">
          © {new Date().getFullYear()} All Rights Reserved by MZ KODERS
        </p>
      </div>
    </section>
  );
}
