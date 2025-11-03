"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/image/logowithoutbg.png";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = [
    ["Web Development", "/services/web"],
    ["App Development", "/services/app"],
    ["Digital Marketing", "/services/digital-marketing"],
    ["Artificial Intelligence", "/services/ai"],
    ["Content Writing", "/services/ebook"],
    ["Game Development", "/services/gamedevelopment"],
    ["Video Editing", "/services/video-editing"],
    ["Graphic Designing", "/services/graphic-design"],
    ["Cloud Service", "/services/CloudComputing"],
  ];

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl bg-white rounded-2xl shadow z-50">
      <nav className="px-4 lg:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* <Image src={logo} alt="Logo" width={40} height={40} /> */}
            <span className="ml-2 text-xl font-semibold text-gray-800">
              Company
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex justify-center flex-1 space-x-8 font-medium">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-gray-700 hover:text-blue-600 flex items-center gap-1"
              >
                Services ▾
              </button>
              <div
                className={`absolute bg-white border rounded-md shadow-md mt-2 w-48 transition-all duration-200 origin-top ${
                  dropdownOpen
                    ? "scale-y-100 opacity-100"
                    : "scale-y-0 opacity-0 pointer-events-none"
                }`}
              >
                {services.map(([label, link]) => (
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-gray-700 rounded-md hover:bg-gray-100"
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

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="lg:hidden mt-3 space-y-2 text-center">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="block w-full text-gray-700 hover:bg-gray-100"
              >
                Services ▾
              </button>
              {dropdownOpen && (
                <div className="space-y-1">
                  {services.map(([label, link]) => (
                    <Link
                      key={label}
                      href={link}
                      className="block py-1 text-gray-600 hover:text-blue-600"
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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
