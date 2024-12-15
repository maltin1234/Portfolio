"use client";
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import  {postProject} from "@/app/api/projects";
import axios from 'axios';
import AddProjectForm from "../components/AddProjectForm";

export default function Page() {
  // Access the React Query client

  return (
    <div>
     
        <AddProjectForm />
        
     
    </div>
  )
}
// mutation.mutate({
//   title: "A",
//   image: "B",
//   project_description: "C",
//   tags: "D",
//   link_url: "E",
//   github_url: "F",
//   completed: false,