import React from "react";
import Button from "../utlity Components/Button";
export default function ServiceCard({ title, para }) {
  return (
    <div className="flex flex-col justify-between items-center w-[350px] h-[400px] gap-4 bg-PrimaryBackground px-4 py-10 rounded-xl hover:scale-105 ease duration-300 hover:ring-4 ring-PrimaryColor cursor-pointer max-lg:w-[500px]">
      <span className="text-5xl font-extrabold text-PrimaryColor">{`<>`}</span>
      <div className="text-3xl font-bold text-center">{title}</div>
      <p className="text-center font-semibold">{para}</p>
      <Button text={"Read more"} />
    </div>
  );
}
