import React, { useState } from "react";
export default function Header() {
  return (
    <nav
      className={`flex justify-between px-20 py-5 w-full bg-PrimaryColor text-white items-center font-bold sticky top-0 z-10 max-md:bg-green-600 max-sm:bg-yellow-400`}
    >
      <h1 className="text-3xl max-lg:text-2xl">Ghulam Rasool</h1>
      <li className="md:hidden">i am </li>
      <ul
        className="flex gap-10 text-xl max-lg:text-lg max-lg:gap-5 max-md:absolute max-md:bg-PrimaryColor max-md:flex-col max-md:px-30 max-md:top-17 max-md:right-0 max-md:py-5 max-md:h-screen ease-in duration-700 max-md:hidden"
        id="nav_options "
      >
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Services">Services</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
      </ul>
    </nav>
  );
}
