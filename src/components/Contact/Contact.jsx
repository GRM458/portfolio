import React, { useState } from "react";
import Input from "./Input";
import Button from "../utlity Components/Button";
export default function Contact() {
  const [FromData, setFromData] = useState({
    Name: "",
    Email: "",
    PhoneNumer: "",
    EmailSubject: "",
  });
  function inputHandler(e) {
    setFromData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <div
      className="flex flex-col px-25 font-bold justify-center items-center min-h-screen gap-10 "
      id="Contact"
    >
      <h1 className="text-6xl text-PrimaryColor">Contact Me</h1>
      <form action="submit" className="flex flex-col gap-4 justify-center items-center">
        <div className="flex gap-3">
          <Input
            placeholder={"Full Name"}
            value={FromData.Name}
            type={"text"}
            Name={"Name"}
            handler={inputHandler}
          />
          <Input
            placeholder={"Email Address"}
            value={FromData.Email}
            type={"email"}
            Name={"Email"}
            handler={inputHandler}
          />
        </div>
        <div className="flex gap-3">
          <Input
            placeholder={"Phone Number"}
            value={FromData.PhoneNumer}
            type={"number"}
            Name={"PhoneNumer"}
            handler={inputHandler}
          />
          <Input
            placeholder={"Email Subject"}
            value={FromData.EmailSubject}
            type={"email"}
            Name={"EmailSubject"}
            handler={inputHandler}
          />
        </div>
        <div>
          <input className="border-2 border-PrimaryColor px-3 py-2 rounded-md font-normal w-176 h-50" />
        </div>
        <div>
          <Button text={"Send message"}/>
        </div>
      </form>
    </div>
  );
}
