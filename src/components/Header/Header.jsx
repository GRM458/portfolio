import React from "react";
export default function Header() {
  return (
    <nav className="flex justify-between px-20 py-5 w-full bg-PrimaryColor text-white items-center font-bold sticky top-0 z-10">
      <h1 className="text-3xl">Ghulam Rasool</h1>
      <ul className="flex gap-10 text-xl">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Services">Services</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
      </ul>
    </nav>
  );
}
