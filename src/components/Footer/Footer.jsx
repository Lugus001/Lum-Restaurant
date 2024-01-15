import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-5xl mx-auto py-10 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img src={footerLogo} alt="Logo" className="w-8 h-8" />
            <h1 className="text-xl font-bold">LUM</h1>
          </div>
          <p className="text-sm text-gray-700">
            Indulge in the finest flavors meticulously crafted from our Northern
            cuisine. Every taste, every aroma is an experience you'll fall in
            love with like never before!
          </p>
          <div className="flex items-center gap-3 mt-4">
            <FaLocationArrow />
            <p>CNX Thailand</p>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <FaMobileAlt />
            <p>+91 123456789</p>
          </div>
          {/* Social Handles */}
          <div className="flex items-center gap-3 mt-4">
            <a href="#" className="text-blue-600">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="text-blue-800">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-blue-900">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {/* Column 1 */}
          <div className="col-span-2 sm:col-span-1">
            <div className="py-4">
              <h1 className="text-xl font-bold mb-3">Important Links</h1>
              <ul className="flex flex-col gap-2 text-gray-700">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Services</li>
                <li className="cursor-pointer">Login</li>
              </ul>
            </div>
          </div>
          {/* Column 2 */}
          <div className="col-span-2 sm:col-span-1">
            <div className="py-4">
              <h1 className="text-xl font-bold mb-3">Links</h1>
              <ul className="flex flex-col gap-2 text-gray-700">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Services</li>
                <li className="cursor-pointer">Login</li>
              </ul>
            </div>
          </div>
          {/* Column 3 */}
          <div className="col-span-2 sm:col-span-1">
            <div className="py-4">
              <h1 className="text-xl font-bold mb-3">Links</h1>
              <ul className="flex flex-col gap-2 text-gray-700">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Services</li>
                <li className="cursor-pointer">Login</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t border-gray-300 text-center py-6">
        @copyright 2024 All rights reserved || Enjoy ❤️ by Kaem
      </div>
    </div>
  );
};

export default Footer;
