import React from "react";
import { Link } from "react-router-dom";
import PhotoSlider from "./PhotoSlider";

export default function HomePage() {
  return (
    <div className="relative text-center min-h-screen bg-gradient-to-b from-blue-800 via-blue-900 to-slate-800">
      {/* Photo Slider Section */}
      <div className="relative">
        <PhotoSlider />

        {/* Overlapping Title */}
        <div className="absolute bottom-[-50px] border-2 border-blue-400 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-white/80 to-white/40 backdrop-blur-lg px-6 sm:px-10 py-5 rounded-full shadow-xl w-11/12 sm:w-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-gray-900 tracking-widest italic drop-shadow-lg leading-tight">
              My Awesome Website
              <br />
              <hr className="border-blue-400 border-2 w-full sm:mt-2" />
              <span className="text-lg sm:text-xl md:text-2xl tracking-widest block sm:inline">
                A clean React + Vite template
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-2">
        {/* Navigation Buttons */}
        <div className="mt-28 sm:mt-20 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 px-4">
          <Link
            to="/about"
            className="text-white w-full sm:w-auto text-center px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-md transition-all duration-500 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #3b82f6, #2563eb, #1d4ed8)",
              backgroundSize: "200% 200%",
              transition: "background-position 0.5s ease",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundPosition = "right center")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundPosition = "left center")
            }
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className="text-white w-full sm:w-auto text-center px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-md transition-all duration-500 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #3b82f6, #2563eb, #1d4ed8)",
              backgroundSize: "200% 200%",
              transition: "background-position 0.5s ease",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundPosition = "right center")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundPosition = "left center")
            }
          >
            Contact
          </Link>

          <Link
            to="/services"
            className="text-white w-full sm:w-auto text-center px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-md transition-all duration-500 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #3b82f6, #2563eb, #1d4ed8)",
              backgroundSize: "200% 200%",
              transition: "background-position 0.5s ease",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundPosition = "right center")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundPosition = "left center")
            }
          >
            Services
          </Link>
        </div>

        {/* Info / Bio Section */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border-blue-400 border-4 mx-auto my-10 w-11/12 md:w-3/4 lg:w-1/2 text-center space-y-6">
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-blue-700 font-bold leading-snug sm:leading-normal px-4 sm:px-6">
            ✨ Welcome to My Awesome Website ✨
          </h2>

          <hr className="border-t-4 border-blue-400 w-full my-6" />

          <p className="text-gray-700 text-lg leading-relaxed">
            This is a simple template you can reuse for your future projects.
            It comes with a hero section, styled navigation buttons, and a clean
            content area for your text.
          </p>
          <p className="text-gray-700 text-lg mb-2 leading-relaxed">
            Built with <span className="font-semibold text-blue-700">React</span>,{" "}
            <span className="font-semibold text-blue-700">Vite</span>, and{" "}
            <span className="font-semibold text-blue-700">TailwindCSS</span>.
          </p>

          <Link
            to="/contact"
            className="text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition-all duration-500 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #3b82f6, #2563eb, #1d4ed8)",
              backgroundSize: "200% 200%",
              transition: "background-position 0.5s ease",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundPosition = "right center")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundPosition = "left center")
            }
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
