import React from "react";
import Button from "../utlity Components/Button";
export default function ProjectCard({ title, Description, Link }) {
  return (
    <div className="flex flex-col justify-center items-center w-[350px] h-[400px] gap-4 bg-white px-4 py-10 rounded-xl hover:scale-105 ease duration-300 hover:ring-4 ring-PrimaryColor cursor-pointer max-lg:w-[500px]">
      <span className="text-5xl font-extrabold text-PrimaryColor">
        {`<>`}react
      </span>
      <div className="text-3xl font-bold">{title}</div>
      <p className="text-center font-semibold">{Description}</p>
      <Button text={"Read more"} />
    </div>
  );
}
