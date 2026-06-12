import React from "react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div
      id={"Services"}
      className="px-25 flex flex-col min-h-screen justify-center gap-14 pt-10 items-center "
    >
      <div className="text-7xl font-bold">
        My <span className="text-PrimaryColor">Services</span>
      </div>
    <div className="flex gap-10">
        <ServiceCard title={'Web Development'} para={'Build modern, responsive, and user-friendly websites using HTML, CSS, JavaScript, and React.js.'}/>
        <ServiceCard title={'React.js Application'} para={'Develop interactive and scalable web applications with reusable React components and clean code practices.'}/>
        <ServiceCard title={'Responsive Website Design'} para={'Create mobile-friendly and fully responsive interfaces that provide a seamless experience across all devices.'} />
      </div>
    </div>
  );
}
