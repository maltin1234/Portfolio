"use client";
import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <section className="mb-16">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-4 text-white">About Me</h2>
            <p className="text-lg text-gray-300 mb-4">
              Hello! I'm <span className="font-semibold">[Your Name]</span>, a passionate developer with a love for creating dynamic and responsive web applications. I have a background in <span className="font-semibold">[Your Background]</span> and specialize in <span className="font-semibold">[Your Specialization]</span>. When I'm not coding, I enjoy <span className="font-semibold">[Your Hobbies/Interests]</span>.
            </p>
            <p className="text-lg text-gray-300">
              Feel free to explore my projects and get in touch if you'd like to collaborate!
            </p>
          </div>
        </section>

        <h1 className="text-4xl font-extrabold mb-16 text-center text-white">My Projects</h1>

        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="absolute border-opacity-20 border-gray-700 h-full border-2 left-1/2 transform -translate-x-1/2"></div>

          <div className="mb-8 flex justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 p-6 bg-gray-700 rounded-lg shadow-xl">
              <h2 className="text-xl font-semibold text-white">Price Scraper Project</h2>
              <p className="mt-2 text-gray-300">Upcoming project...</p>
              <a href="#" className="text-yellow-300 mt-2 block hover:underline">Learn more</a>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 p-6 bg-gray-700 rounded-lg shadow-xl">
              <h2 className="text-xl font-semibold text-white">Ecommerce Site</h2>
              <p className="mt-2 text-gray-300">Upcoming project...</p>
              <a href="#" className="text-yellow-300 mt-2 block hover:underline">Learn more</a>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 p-6 bg-gray-700 rounded-lg shadow-xl">
              <h2 className="text-xl font-semibold text-white">Blog Platform</h2>
              <p className="mt-2 text-gray-300">Upcoming project...</p>
              <a href="#" className="text-yellow-300 mt-2 block hover:underline">Learn more</a>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 p-6 bg-gray-700 rounded-lg shadow-xl">
              <h2 className="text-xl font-semibold text-white">Portfolio Site</h2>
              <p className="mt-2 text-gray-300">Upcoming project...</p>
              <a href="#" className="text-yellow-300 mt-2 block hover:underline">Learn more</a>
            </div>
          </div>

          {/* Add more projects following the same structure */}
        </div>
      </div>
    </div>
  );
};

export default Home;
