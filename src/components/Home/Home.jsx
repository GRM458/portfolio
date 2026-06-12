import React from "react";
import Button from "../utlity Components/Button";

export default function Home() {
  return (
    <div
      id="Home"
      className="bg-white px-25 min-h-[100vh] flex  gap-10 justify-center items-center"
    >
      <div className=" h-[400px] w-[400px] bg-red-50 rounded-full flex overflow-hidden object-contains">
        <img
          src="https://cdn.creativefabrica.com/2021/06/14/Software-Developer-Flat-Icon-Graphics-13375448-1.jpg"
          alt=""
        />
      </div>
      <div className=" w-[60%] px-3 ">
        <div className="">
          <h2 className="font-bold text-4xl mb-3">Hello, Myself</h2>
          <h1 className="font-bold text-6xl mb-3">Ghulam Rasool</h1>
          <div className="font-bold text-4xl mb-3">
            And I'm a{" "}
            <span className="text-PrimaryColor text-4xl">
              Frontend Developer|
            </span>
          </div>
          <p className="my-6">
            I provide Frontend Web Development, React.js Application
            Development, and Responsive Website Design services. I build modern,
            interactive, and user-friendly web applications using HTML, CSS,
            JavaScript, and React.js. My focus is on creating clean, efficient,
            and responsive interfaces that work seamlessly across desktops,
            tablets, and mobile devices while delivering a smooth user
            experience and high performance.
          </p>
          <Button text={"Download"} link={"#"} />
        </div>
      </div>
    </div>
  );
}
