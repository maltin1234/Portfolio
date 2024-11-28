"use client";
import React, { useState } from "react";

const AddProjectForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    imageSrc: "",
    title: "",
    description: "",
    tags: "",
    techStack: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const processedData = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
      techStack: formData.techStack.split(",").map((tech) => tech.trim()),
    };
    onSubmit(processedData);
    setFormData({
      imageSrc: "",
      title: "",
      description: "",
      tags: "",
      techStack: "",
      rating: 0,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-6 text-white">Add New Project</h2>

      <label className="block mb-4">
        <span className="text-white">Image URL</span>
        <input
          type="text"
          name="imageSrc"
          value={formData.imageSrc}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 mt-1 bg-gray-700 text-white rounded-md"
        />
      </label>

      <label className="block mb-4">
        <span className="text-white">Title</span>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Project Title"
          className="w-full p-2 mt-1 bg-gray-700 text-white rounded-md"
        />
      </label>

      <label className="block mb-4">
        <span className="text-white">Description</span>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Project Description"
          className="w-full p-2 mt-1 bg-gray-700 text-white rounded-md"
        />
      </label>

      <label className="block mb-4">
        <span className="text-white">Tags (comma-separated)</span>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="e.g., JavaScript, React"
          className="w-full p-2 mt-1 bg-gray-700 text-white rounded-md"
        />
      </label>

      <label className="block mb-4">
        <span className="text-white">Tech Stack (comma-separated)</span>
        <input
          type="text"
          name="techStack"
          value={formData.techStack}
          onChange={handleChange}
          placeholder="e.g., Next.js, Node.js"
          className="w-full p-2 mt-1 bg-gray-700 text-white rounded-md"
        />
      </label>

      <label className="block mb-4">
        <span className="text-white">Rating (1-5)</span>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          min="1"
          max="5"
          className="w-full p-2 mt-1 bg-gray-700 text-white rounded-md"
        />
      </label>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500"
      >
        Add Project
      </button>
    </form>
  );
};

export default AddProjectForm;
