"use client";
import Link from "next/link";
import { use, useState } from "react";

export default function Navbar() {
  const [open, setopen] = useState(false);

  return (
    <>
      <div className="w-screeen flex justify-between p-5 bg-[rgba(22,24,49,1)] ">
        <div className="text-white">logo</div>

        <div>
          <ul className="hidden md:flex justify-between gap-10 text-white ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/robomax">RoboMax</Link>
            </li>
            <li>
              <Link href="/ourteam">Our Team</Link>
            </li>
            <li>
              <Link href="/pastevents">Past Events</Link>
            </li>
          </ul>
        </div>

        {/* Hamburger button */}

        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setopen(!open)}
        >
          ☰
        </button>

        {open && (
          <ul className="md-hidden text-white absolute top-16 left-0 w-full flex flex-col gap-5 p-6 font-semibold items-center bg-gradient-to-b from-blue-950 to-blue-800">
  
  <li className="flex flex-col w-full text-center">
    <Link href="/" className="block">
      Home
    </Link>
    <hr className="w-full h-[1px] bg-white border-0 mt-2" />
  </li>

  <li className="flex flex-col w-full text-center">
    <Link href="/robomax" className="block">
      RoboMax
    </Link>
    <hr className="w-full h-[1px] bg-white border-0 mt-2" />
  </li>

  <li className="flex flex-col w-full text-center">
    <Link href="/ourteam" className="block">
      Our Team
    </Link>
    <hr className="w-full h-[1px] bg-white border-0 mt-2" />
  </li>

  <li className="flex flex-col w-full text-center">
    <Link href="/pastevents" className="block">
      Past Events
    </Link>
    <hr className="w-full h-[1px] bg-white border-0 mt-2" />
  </li>
  
</ul>
        )}
      </div>
    </>
  );
}
