import React from "react";
import Button from "../utlity Components/Button";

export default function About() {
  return (
    <div
      id="About"
      className="bg-PrimaryBackground px-20 min-h-[100vh] flex  gap-10 justify-center items-center"
    >
      <div className=" w-[60%] px-3 ">
        <div className="">
          <h2 className="font-bold text-5xl mb-3">
            About <span className="text-PrimaryColor text-6xl">ME</span>
          </h2>
          <h1 className="font-bold text-4xl mb-3">
            I'm a <span className="text-PrimaryColor"> Frontend Developer</span>
          </h1>
          <p className="my-6 font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
            doloremque, veritatis voluptatibus aspernatur necessitatibus earum,
            aliquam ipsa repellat iusto esse laudantium animi vitae consectetur
            obcaecati.
          </p>
          <Button text={"About me"} link={"#"} />
        </div>
      </div>
      <div className=" h-[400px] w-[400px] bg-red-50 rounded-full flex overflow-hidden object-contains">
        <img
          src="https://cdn.creativefabrica.com/2021/06/14/Software-Developer-Flat-Icon-Graphics-13375448-1.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
