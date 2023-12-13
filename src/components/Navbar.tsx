import React from "react";
import Theme from "./Theme";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className=" flex justify-around  p-2">
      <div className="icon flex ">
        <Avatar className="m-2">
          <AvatarImage src="https://github.com/iam8uman.png" alt="@iam8uman" />
          <AvatarFallback>SS</AvatarFallback>
        </Avatar>
        <h2 className="font-bold my-4 hidden sm:flex">WhySumanCode?</h2>
      </div>
      <div className="flex-row gap-5 hidden sm:flex">
        <ul className="flex flex-row gap-6 my-4 text-sm">
          <li className="mx-5"> 
            <Link href="/">Navbars</Link>
          </li>
          <li className="mx-5">
            <Link href="/about">About</Link>
          </li>
          <li className="mx-5">
            <Link href="/card">Cards</Link>
          </li>
          <li className="mx-5">
            <Link href="/card">Footer</Link>
          </li>
          <li className="mx-5 hover:font-semibold transition 2s">
            <Link href="/mobile">Mobile</Link>
          </li>
        </ul>
      </div>{" "}
      <Theme />
    </div>
  );
};

export default Navbar;
