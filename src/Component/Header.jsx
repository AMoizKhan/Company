"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/image/logowithoutbg.png";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="px-4 lg:px-6 py-3">
        <div className="flex items-center justify-between mx-auto max-w-screen-xl">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-semibold text-gray-800">Company</span>
          </Link>

          {/* Center: Nav Links */}
          <div className="hidden lg:flex justify-center flex-1 space-x-10 font-medium">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none flex items-center gap-1"
              >
                Services ▾
              </button>
              <div
                className={`absolute bg-white border rounded-md shadow-md mt-2 w-44 transition-all duration-300 ease-in-out origin-top ${
                  dropdownOpen
                    ? "scale-y-100 opacity-100"
                    : "scale-y-0 opacity-0 pointer-events-none"
                }`}
              >
                {[
                  ["Web Development", "/services/web"],
                  ["App Development", "/services/app"],
                  ["Digital Marketing", "/services/digital-marketing"],
                  ["Artificial Intelligence", "/services/ai"],
                  ["Content Writing", "/services/ebook"],
                  ["Game Development", "/services/gamedevelopment"],
                  ["Video Editing", "/services/video-editing"],
                  ["Graphic Designing", "/services/graphic-design"],
                  ["Cloud Service", "/services/CloudComputing"],
                ].map(([label, link]) => (
                  <Link
                    key={label}
                    href={link}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Right: Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-3 space-y-2 text-center">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="block w-full text-gray-700 hover:bg-gray-100"
            >
              Services ▾
            </button>
            {dropdownOpen && (
              <div className="space-y-1">
                <Link
                  href="/services/web"
                  className="block py-1 text-gray-600 hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Web Development
                </Link>
                <Link
                  href="/services/app"
                  className="block py-1 text-gray-600 hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  App Development
                </Link>
                <Link
                  href="/services/digital"
                  className="block py-1 text-gray-600 hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Digital Marketing
                </Link>
              </div>
            )}

            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
