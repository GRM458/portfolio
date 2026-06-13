import React from "react";
import ProjectCard from "./ProjectCard";
export default function Projects() {
  return (
    <div
      id="Projects"
      className="flex flex-col gap-10 px-25 py-10 justify-center items-center min-h-screen bg-PrimaryBackground"
    >
      <h1 className="text-6xl font-bold">My Projects</h1>
      <div className="flex gap-15 flex-wrap justify-center">
        <ProjectCard
          Title={"React Problem"}
          Description={
            "This project is built with React.js for practice purposes. It contains many challenges divided into Easy, Medium, and Hard levels. Users can view the UI and functionality of each challenge and then build it on their own to improve their React skills."
          }
        />
        <ProjectCard
          Title={"React Problem"}
          Description={
            "This project is built with React.js for practice purposes. It contains many challenges divided into Easy, Medium, and Hard levels. Users can view the UI and functionality of each challenge and then build it on their own to improve their React skills."
          }
        />
        <ProjectCard
          Title={"React Problem"}
          Description={
            "This project is built with React.js for practice purposes. It contains many challenges divided into Easy, Medium, and Hard levels. Users can view the UI and functionality of each challenge and then build it on their own to improve their React skills."
          }
        />
      </div>
    </div>
  );
}
