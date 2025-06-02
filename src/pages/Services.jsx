import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-yellow-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center"
      >
        {/* Animated emoji */}
        <motion.div
          initial={{ rotate: -15 }}
          animate={{ rotate: [ -15, 15, -15 ] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-6xl mb-4"
        >
          🚧
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-orange-600 mb-4"
        >
          Nagad Services
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 text-lg mb-6"
        >
          This page is currently under construction. <br />
          Please check back soon.
        </motion.p>

        {/* Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Link to="/contact">
            <button  className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-white hover:text-red-500 border border-red-500 transition cursor-pointer">
              📞 Contact Us
            </button>
          </Link>
        </motion.div>

        {/* Wrench emoji bounce */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="mt-8 text-4xl"
        >
          🛠️
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
