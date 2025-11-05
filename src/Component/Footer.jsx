"use client";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="py-10 bg-transparent sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <img
              className="w-auto h-9"
              src="/image/logo.png"
              alt="logo"
            />

            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Discover a world of inspiration and innovation. Stay connected with us for the latest updates and creative ideas.
            </p>

            {/* Social Icons */}
            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-8 h-8 hover:bg-blue-600"
                >
                  <FaFacebookF size={14} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-8 h-8 hover:bg-blue-400"
                >
                  <FaTwitter size={14} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-8 h-8 hover:bg-blue-700"
                >
                  <FaLinkedinIn size={14} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-8 h-8 hover:bg-pink-600"
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
              <li><a href="#" className="text-base text-black hover:text-blue-600">About</a></li>
              <li><a href="#" className="text-base text-black hover:text-blue-600">Features</a></li>
              <li><a href="#" className="text-base text-black hover:text-blue-600">Works</a></li>
              <li><a href="#" className="text-base text-black hover:text-blue-600">Career</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Contact
            </p>
            <ul className="mt-6 space-y-4">
              <li><a href="#" className="text-base text-black hover:text-blue-600">Customer Support</a></li>
              <li><a href="#" className="text-base text-black hover:text-blue-600">Delivery Details</a></li>
              <li><a href="#" className="text-base text-black hover:text-blue-600">Terms & Conditions</a></li>
              <li><a href="#" className="text-base text-black hover:text-blue-600">Privacy Policy</a></li>
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
                className="block w-full p-4 text-black placeholder-gray-500 border border-gray-200 rounded-md"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />
        <p className="text-sm text-center text-gray-600">
          © {new Date().getFullYear()} All Rights Reserved by MZKoders
        </p>
      </div>
    </section>
  );
}
