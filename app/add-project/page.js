"use client";
import React, { useState } from "react";
import AddProjectForm from "@/app/components/AddProjectForm";

export default function Page() {
    // Access the client
  const [projects, setProjects] = useState([]);

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
    console.log("Project added:", newProject); // Replace with API call for backend integration
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 py-8">
       <div className="max-w-6xl mx-auto px-4 py-10"></div>
      <AddProjectForm onSubmit={handleAddProject} />
      <div className="mt-10 max-w-6xl mx-auto">
        
    
      </div>
    </div>
  );
};


