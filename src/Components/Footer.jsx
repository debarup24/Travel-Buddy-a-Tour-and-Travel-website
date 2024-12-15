import React from "react";
import footer from "../assets/footer-pattern.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      className="bg-gray-800 text-white py-10"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h1 className="font-bold text-4xl mb-4">
              <span className="text-red-500">Trip</span>Guru
            </h1>
            <p className="text-sm">
              We're dedicated to making your travel dreams come true with
              expertly curated tours and unforgettable experiences.
            </p>
          </div>
          <div className="flex flex-col lg:items-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline hover:text-amber-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tours
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Travel Street, City, Country</li>
              <li>Phone: +1 234 567 890</li>
              <li>Email: info@tripguru.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 ">
              <FaFacebook className="hover:text-red-500" />
              <FaInstagram className="hover:text-red-500" />
              <FaTwitter className="hover:text-red-500" />
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 pt-8 py-20 mb-6 text-center justify-end text-sm"
        >
          <p>
            &copy; {new Date().getFullYear()} TripGuru. All rights reserved ||
            Created by <span className="font-bold text-amber-400">Debarup</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
