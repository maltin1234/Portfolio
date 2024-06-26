"use client";
import React from "react";
import Image from "next/image";

const Home = () => {
  const projects = [
    {
      title: "Chrome Extension",
      imageSrc: "/assets/Pazter_1.png",
      description: "I started creating my own extension where I use Chrome's API to utilize their context menu to paste my notes that I, as a user, can create by myself. The reason why I wanted to create it by myself is because I was curious on how extensions are created and published but also for security reasons and customization for my own preference."
    },
    {
      title: "Sound player project",
      imageSrc: "/assets/SoundPlayer.png",
      description: "A smaller project for a support call function for the entrance. The technology used was Next.js with React on a Chrome OS kiosk."
    },
    {
      title: "Maxico Blog site",
      imageSrc: "/assets/Maxico.jpg",
      description: "Started as an intern for a company called Maxico. I was the first one and helped create the blog website from scratch using Vue, MongoDB, and Node.js. Later we became a team and we migrated to React instead. The company does not exist today."
    },
    {
      title: "System admin manual project",
      imageSrc: "/assets/Sysadmin_bat.png",
      description: "In my work and daily life, I have a goal to use and utilize the cmd as much as I can. CMD is a powerful tool, and I have created a script where I can use the commands I want without remembering them."
    },
    {
      title: "Finetuning and hosting AI",
      imageSrc: "/assets/llama.jpg",
      description: "Hosted AI locally on my computer. Trained the Llama2 model on my custom dataset from Hugging Face. Currently working more on this."
    },
  ];

  return (
    <div className="text-white min-h-screen py-10 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <section className="mb-16">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-4xl font-extrabold mb-4 text-white">About Me</h2>
            <p className="text-lg text-gray-300 mb-4">
              Hello! I'm <span className="font-semibold">Maltin</span>, a passionate techgeek. I love creating projects on my free time. This website will showcase some of my experiements and projects that I can showcse for you with a contemplation of my cv. I specialize in <span className="font-semibold">system support and maintenance</span> and enjoy <span className="font-semibold">networking security, linux and windows </span>.
            </p>
            <p className="text-lg text-gray-300">
              Feel free to explore my projects and get in touch if you'd like to collaborate!
            </p>
          </div>
        </section>

        <h1 className="text-4xl font-extrabold mb-16 text-center text-white">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg shadow-xl p-6 flex flex-col">
              <h2 className="text-xl font-semibold text-white">{project.title}</h2>
              {project.imageSrc && (
                <Image src={project.imageSrc} alt={project.title} width={400} height={200} className="mt-2 rounded-lg" />
              )}
              <div className="text-gray-300 flex-grow overflow-y-auto mt-2 max-h-40 custom-scrollbar">
                {project.description}
              </div>
              <a href="#" className="mt-2 text-yellow-300 hover:underline">Learn more</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
