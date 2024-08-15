"use client";

import { links } from "@/contants/NavBar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const Nav = (props: Props) => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8 capitalize text-lg tracking-widest font-medium">
      {links.map(({ name, path }) => (
        <Link
          key={name}
          href={path}
          className={`hover:text-accent-hover drop-shadow hover:text-shadow-main duration-main relative group ${
            pathname === path ? "text-accent" : "text-white"
          }`}
        >
          {name}
          <span
            className={`block absolute bottom-[-2px] left-0 h-[2px] bg-accent-hover transition-all duration-500 group-hover:w-full ${
              pathname === path ? "w-full" : "w-0"
            }`}
          ></span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
