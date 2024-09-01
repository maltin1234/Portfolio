"use client";
import React from "react";
import Image from "next/image";

const Home = () => {
  const projects = [
    {
      imageSrc: "/assets/lampword.jpg",
      title: "Cloud based lamp ",
      description: "I hosted a cloud-based LAMP (Linux, Apache, MySQL, PHP) server with WordPress to build and manage a dynamic website. The setup involved configuring an Apache server on a Linux environment, securing the server using UFW firewalls, and deploying a MySQL database for efficient data management. Additionally, I purchased a domain to give the project a professional presence. This project allowed me to gain hands-on experience with cloud-based server administration, web hosting, and database integration, while ensuring robust security measures were in place."
    },
    {
      imageSrc: "/assets/Pazter_1.jpg",
      title: "Chrome Extension",
      description: "I started creating my own Chrome extension using Chromes API to utilize the context menu for pasting notes that I can create myself. I wanted to create this extension to learn how extensions are developed and published, and for security and customization purposes."
    },
    {
      imageSrc: "/assets/SoundPlayer.jpg",
      title: "Sound Player Project",
      description: "This is a smaller project for a support call function at an entrance. The technology used includes Next.js with React, running on a Chrome OS kiosk. This kiosk app was created to be used at my work"
    },
    {
      imageSrc: "/assets/maxico.jpg",
      title: "Maxico Blog Site",
      description: "As an intern at Maxico, I was the first to help create a blog website from scratch using Vue, MongoDB, and Node.js. Later, our team migrated the project to React. Unfortunately, the company no longer exists."
    },
    {
      imageSrc: "/assets/Sysadmin_bat.jpg",
      title: "System Admin Manual Project",
      description: "I aim to use the command line (cmd) as much as possible in my work and daily life. CMD is a powerful tool, and I've created a script that allows me to use commands without having to remember them all."
    },
    {
      imageSrc: "/assets/llama.jpg",
      title: "Fine-tuning and Hosting AI",
      description: "I hosted an AI locally on my computer and trained the Llama2 model on a custom dataset from Hugging Face. I am currently working on further developments in this area."
    },
    {
      imageSrc: "/assets/sapcommerce.png",
      title: "Selenium automated sap robot",
      description: "I used selenium to automate a robot that made orders for me by specifying the things I needed and what company I wanted to order. This robot was used for myself to make my job easier and faster by automating"
    },
  ];

  return (
    <div className="text-white min-h-screen py-10 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <section className="mb-16">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-4xl font-extrabold mb-4 text-white">About Me</h2>
            <p className="text-lg text-gray-300 mb-4">
              Hello! I am <span className="font-semibold">Maltin</span>, a passionate tech enthusiast. I love working on projects in my free time. This website showcases some of my experiments and projects along with my CV. I specialize in <span className="font-semibold">system support and maintenance</span> and enjoy <span className="font-semibold">networking security, Linux, and Windows</span>.
            </p>
            <p className="text-lg text-gray-300">
              Feel free to explore my projects and get in touch if you would like to collaborate!
            </p>
          </div>
        </section>

        <h1 className="text-4xl font-extrabold mb-16 text-center text-white">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg shadow-xl p-6 flex flex-col">
              {project.imageSrc && (
                <div className="image-container">
                  <Image src={project.imageSrc} alt={project.title} layout="fill" className="object-cover rounded-lg" />
                </div>
              )}
              <h2 className="text-xl font-semibold text-white mt-4">{project.title}</h2>
              <div className="text-gray-300 flex-grow overflow-y-auto mt-2 max-h-40 custom-scrollbar">
                {project.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
