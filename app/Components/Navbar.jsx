"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import GooeyNav from "../../reactBitsComponents/GooeyNav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Competitions", href: "/robomax" },
    { label: "Our Team", href: "/ourteam" },
    { label: "Past Events", href: "#pastevent" },
  ];

  return (
    <nav className="bg-[#161831] sticky top-0 z-50 border-b border-white/20 shadow-lg">
      <div className="flex justify-between items-center pr-5 md:p-5 md:px-8 h-20">
        {/* LOGO */}
        <div className="flex items-center ">
          <img
            src="/robotics_logo2R.png"
            alt="Robotics Logo"
            className="h-40 mt-5 w-auto object-contain "
          />
        </div>

        {/* GOOEY NAV - Visible on both Mobile and Desktop now */}
        <div
          className="flex-1 hidden md:flex justify-center md:justify-end mr-4"
          style={{ height: "40px", position: "relative" }}
        >
          <GooeyNav
            items={navItems}
            particleCount={20}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
          />
        </div>

        {/* HAMBURGER - Only shows on mobile if you still want the extra links */}
        <button
          className="md:hidden text-3xl text-white z-50 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        {/* MOBILE DROPDOWN */}
        <div
          className={`
            absolute top-20 left-0 w-full md:hidden
            bg-[#161831]/95 backdrop-blur-xl border-b border-white/10
            transition-all duration-300 ease-in-out overflow-hidden
            ${
              open
                ? "max-h-[300px] opacity-100"
                : "max-h-0 opacity-0 pointer-events-none"
            }
          `}
        >
          <ul className="flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.label} className="w-full">
                <Link 
                  href={item.href} 
                  onClick={() => setOpen(false)}
                  className={`block px-8 py-4 text-lg font-medium ${pathname === item.href ? 'text-black bg-white' : 'text-white/70'}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {/* <div
              className=" md:hidden flex flex-col justify-center md:justify-end mr-4"
              style={{ height: "40px", position: "relative" }}
            >
              <GooeyNav
                items={navItems}
                particleCount={20}
                particleDistances={[90, 10]}
                particleR={100}
                initialActiveIndex={0}
                animationTime={600}
                timeVariance={300}
                className=""
              />
            </div> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
