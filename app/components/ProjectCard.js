"use client";
import React from "react";
import Image from "next/image";

const ProjectCard = () => {
  const projects = [
    {
      imageSrc: "/assets/lampword.jpg",
      title: "Cloud based lamp",
      description:
        "I hosted a cloud-based LAMP (Linux, Apache, MySQL, PHP) server with WordPress to build and manage a dynamic website...",
      tags: ["Linux", "MySQL", "WordPress"],
      techStack: ["LAMP Stack", "Apache", "PHP"],
      rating: 5,
    },
    {
      imageSrc: "/assets/Pazter_1.jpg",
      title: "Chrome Extension",
      description:
        "I started creating my own Chrome extension using Chrome's API to utilize the context menu for pasting notes...",
      tags: ["JavaScript", "Chrome API", "Security"],
      techStack: ["JavaScript", "HTML", "CSS"],
      rating: 4,
    },
    {
      imageSrc: "/assets/SoundPlayer.jpg",
      title: "Sound Player Project",
      description:
        "This is a smaller project for a support call function at an entrance. The technology used includes Next.js with React...",
      tags: ["Next.js", "React", "Chrome OS"],
      techStack: ["Next.js", "React", "Node.js"],
      rating: 4,
    },
  ];

  return (
    <div className="text-white min-h-screen py-10 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <section className="mb-16">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-4xl font-extrabold mb-4 text-white">About Me</h2>
            <p className="text-lg text-gray-300 mb-4">
              Hello! I am <span className="font-semibold">Maltin</span>, a
              passionate tech enthusiast. I love working on projects in my free
              time. This website showcases some of my experiments and projects
              along with my CV. I specialize in{" "}
              <span className="font-semibold">
                system support and maintenance
              </span>{" "}
              and enjoy{" "}
              <span className="font-semibold">
                networking security, Linux, and Windows
              </span>
              .
            </p>
            <p className="text-lg text-gray-300">
              Feel free to explore my projects and get in touch if you would
              like to collaborate!
            </p>
          </div>
        </section>

        <h1 className="text-4xl font-extrabold mb-16 text-center text-white">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg shadow-xl p-6 flex flex-col"
            >
              {project.imageSrc && (
                <div className="relative w-full h-48">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    layout="fill"
                    className="object-cover rounded-lg"
                  />
                </div>
              )}
              <h2 className="text-xl font-semibold text-white mt-4">
                {project.title}
              </h2>
              <div className="text-gray-300 flex-grow overflow-y-auto mt-2 max-h-40 custom-scrollbar">
                {project.description}
              </div>
              {/* Tags Section */}
              <div className="flex flex-wrap mt-4 gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-600 text-white text-sm py-1 px-3 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Tech Stack Section */}
              <div className="flex flex-wrap mt-2 gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-purple-600 text-white text-sm py-1 px-3 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Ratings Section */}
              <div className="mt-4 text-yellow-400">
                {"⭐".repeat(project.rating)}
                {"☆".repeat(5 - project.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
