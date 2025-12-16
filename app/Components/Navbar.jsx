"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  // Use setOpen for clarity (standard convention)
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* The FIX: 
        1. Corrected the typo: w-screeen -> w-screen.
        2. Removed the separate HR tag.
        3. Applied the border-b class (border-bottom) directly to this sticky div. 
      */}
      <div 
        className=" flex justify-between p-5 px-8
                   bg-[rgba(22,24,49,1)] sticky top-0 z-50 
                   border-b border-white/20 shadow-lg" // Added border-b and shadow-lg for better visual separation
      >
        <div className="text-white font-bold text-xl">logo</div>

        {/* Desktop Menu */}
        <div>
          <ul className="hidden md:flex justify-between gap-10 text-white font-medium">
            <li>
              <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
            </li>
            <li>
              <Link href="/robomax" className="hover:text-indigo-400 transition">RoboMax</Link>
            </li>
            <li>
              <Link href="/ourteam" className="hover:text-indigo-400 transition">Our Team</Link>
            </li>
            <li>
              <Link href="/pastevents" className="hover:text-indigo-400 transition">Past Events</Link>
            </li>
          </ul>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-3xl text-white z-50"
          onClick={() => setOpen(!open)} // Changed setopen to setOpen
        >
          {open ? '✕' : '☰'}
        </button>

        {/* Mobile Menu */}
        <ul className={`
            md:hidden text-white absolute top-[65px] left-0 w-full 
            flex flex-col gap-0 font-semibold items-center 
            bg-blue-900 shadow-xl z-40
            transition-all duration-500 ease-in-out overflow-hidden
            ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} 
        `}>
          {/* Menu items structure simplified for readability and transition consistency */}
          {[
            { name: 'Home', href: '/' },
            { name: 'RoboMax', href: '/robomax' },
            { name: 'Our Team', href: '/ourteam' },
            { name: 'Past Events', href: '/pastevents' },
          ].map((item, index, array) => (
            <li 
              key={item.name} 
              className={`w-full text-center py-4 hover:bg-blue-800 transition ${index < array.length - 1 ? 'border-b border-white/10' : ''}`}
            >
              <Link 
                href={item.href} 
                className="block" 
                onClick={() => setOpen(false)} // Close menu on link click
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* REMOVED the problematic <hr> tag here: 
        <hr className="w-full h-[0.5px] bg-white border-0 mt-2 sticky top-[75px] md:top-[60px] z-50" />
      */}
    </>
  );
}