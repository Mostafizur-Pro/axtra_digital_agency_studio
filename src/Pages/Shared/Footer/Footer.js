// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h2 className="text-xl font-semibold mb-2">About Us</h2>
            <p className="text-gray-400">
              We are dedicated to providing the best services for your business.
              Our team of experts is here to help you achieve your goals.
            </p>
          </div>
          {/* Links Section */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h2 className="text-xl font-semibold mb-2">Links</h2>
            <ul>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/service" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Section */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-400">
              Email:{" "}
              <a
                href="mailto:mostafizur0195@gmail.com"
                className="text-gray-300 hover:text-white"
              >
                mostafizur0195@gmail.com
              </a>
            </p>
            <p className="text-gray-400">
              Phone:{" "}
              <a
                href="tel:+8801950165017"
                className="text-gray-300 hover:text-white"
              >
                +880 1950 165017
              </a>
            </p>
          </div>
        </div>
        {/* Social Media Section */}
        <div className="mt-6 flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.5 8.5h-1v11h1v-11zm-0.5-2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM14.1 8.5c0-0.7-0.2-1.3-0.5-1.8-0.5-0.8-1.2-1.2-2-1.2-1.4 0-2.6 1.2-2.6 2.6v1h-1v1.5h1v5.4h1.7v-5.4h1.7l0.2-1.5h-1.9v-1c0-0.3 0.2-0.5 0.5-0.5 0.2 0 0.5 0.1 0.7 0.3s0.3 0.5 0.3 0.8v1h1.6v-1zm-3.7-4.1c0.5-0.1 1.1-0.1 1.7 0.1 1.3 0.3 2.4 1.3 2.8 2.5 0.4 1.2 0.3 2.5-0.4 3.5-0.7 1-1.7 1.6-2.9 1.6-1.3 0-2.5-0.7-3.2-1.8-0.6-1.1-0.7-2.4-0.4-3.6 0.3-1.2 1.1-2.2 2.2-2.8 0.5-0.3 1.1-0.5 1.7-0.5zm4.2 15c-1.3 0-2.6-0.2-3.8-0.6-1.2-0.4-2.3-1.1-3.2-2-1.2-1.2-2-2.7-2.5-4.3-0.4-1.6-0.5-3.3-0.2-5 0.3-1.6 1.1-3 2.3-4.2 1.2-1.2 2.6-2 4.1-2.4 1.5-0.4 3-0.6 4.6-0.5 1.6 0 3.1 0.2 4.6 0.6 1.5 0.4 2.9 1.2 4.1 2.2 1.2 1 2 2.4 2.5 3.8 0.5 1.6 0.7 3.2 0.4 4.8-0.3 1.6-1.1 3.1-2.3 4.2-1.2 1.2-2.6 2-4.1 2.5-1.5 0.4-3.1 0.5-4.6 0.4z"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2 4 4 8-8 2 2L7 14l-4-4-2 2v4z"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 13.9c-2.6 0-5.1-1.1-6.9-2.9-1.8-1.8-2.9-4.3-2.9-6.9s1.1-5.1 2.9-6.9c1.8-1.8 4.3-2.9 6.9-2.9s5.1 1.1 6.9 2.9c1.8 1.8 2.9 4.3 2.9 6.9s-1.1 5.1-2.9 6.9c-1.8 1.8-4.3 2.9-6.9 2.9zm-6-5h-2v4h-2v-4h-2v-2h2v-2c0-2.2 1.8-4 4-4 1.1 0 2.1 0.2 3 0.5v2h-2c-1.1 0-2 0.9-2 2v2h2l-2 2z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="bg-gray-900 text-gray-400 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} AxtraCRUD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
