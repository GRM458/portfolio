import React from "react";

export default function Button({link,text,action}) {
  return (
      <a className="px-6 py-2 bg-PrimaryColor my-2 inline-block font-semibold text-white tracking-wide rounded-4xl transition-all duration-300 hover:shadow-[0_0_15px_3px] shadow-PrimaryBackground cursor-pointer" href={link}>{text}</a>
  );
}
