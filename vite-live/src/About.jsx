import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Banner */}
      <div
        className="w-full border-b-4 h-96 bg-cover bg-center shadow-xl relative"
        style={{
          // Swap this image for your own brand/banner
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop')",
          backgroundPosition: "center top 60%",
        }}
      >
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/30 rounded-b-3xl"></div>

        {/* Overlapping Title Pill */}
        <div className="absolute bottom-[-40px] sm:bottom-[-100px] left-1/2 -translate-x-1/2 border-2 border-blue-400 bg-gradient-to-r from-white/80 to-white/40 backdrop-blur-lg px-6 sm:px-10 py-3 sm:py-5 rounded shadow-xl w-11/12 sm:w-auto">
          <h1 className="text-2xl sm:text-4xl text-center md:text-6xl font-serif text-black* italic drop-shadow-lg tracking-wider leading-tight">
            About Us
            <hr className="border-blue-400 border-2 w-full mt-2" />
            <span className="text-base sm:text-xl md:text-2xl tracking-widest block sm:inline text-black">
              Learn our story & values
            </span>
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-full  mx-auto bg-blue-900 shadow-2xl p-8 pt-16 space-y-12 rounded-none ">
        {/* Lead Text */}
        <p className="text-lg mt-8 font-serif sm:text-2xl md:text-3xl text-white font-extrabold text-center px-4 sm:px-6 leading-snug">
          We craft simple, scalable experiences that help people do their best work.
        </p>

        {/* Brief Intro */}
        <p className="text-base sm:text-lg md:text-xl text-white px-4 sm:px-6 md:px-8 text-justify/center">
          Our team focuses on clarity, performance, and thoughtful design. From idea to launch,
          we aim to keep things intuitive and reliable—so you can move faster with confidence.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            to="/contact"
            className="px-8 sm:px-12 py-3 font-bold text-white rounded-full shadow-lg
                       bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500
                       hover:from-indigo-500 hover:via-blue-600 hover:to-blue-700
                       transition-all duration-300 transform hover:scale-105
                       border-2 border-white/20 text-sm tracking-wide text-center"
          >
            Get in Touch
          </Link>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold mb-4 text-blue-800">Our Mission</h2>
            <p className="text-lg leading-8 text-gray-700">
              Build delightful, dependable products that empower creators and teams—
              keeping the experience fast, accessible, and easy to maintain.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-extrabold mb-4 text-blue-800">Our Values</h2>
            <p className="text-lg leading-8 text-gray-700">
              Simplicity, trust, and quality. We ship thoughtfully, listen closely,
              and iterate with care to deliver results that last.
            </p>
          </div>
        </div>

        {/* Secondary CTA */}
 <p className="text-xl sm:text-2xl leading-9 text-center font-bold text-white mb-6">
  Ready to learn more?
</p>

<div className="flex flex-col sm:flex-row justify-center gap-4">
  {/* Services Link */}
  <Link
    to="/services"
    className="px-8 sm:px-16 py-3 font-bold text-white rounded-full shadow-lg
               bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500
               hover:from-pink-500 hover:via-purple-600 hover:to-indigo-500
               transition-all duration-300 transform hover:scale-105
               border-2 border-white/20 text-sm tracking-wide text-center"
  >
    Explore Our Services
  </Link>

  {/* Team Link */}
  <Link
    to="/ourteam"
    className="px-8 sm:px-16 py-3 font-bold text-white rounded-full shadow-lg
               bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500
               hover:from-indigo-500 hover:via-blue-600 hover:to-blue-700
               transition-all duration-300 transform hover:scale-105
               border-2 border-white/20 text-sm tracking-wide text-center"
  >
    Meet the Team
  </Link>
</div>

      </div>
    </div>
  );
}
