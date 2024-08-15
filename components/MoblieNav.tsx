"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { links } from "@/contants/NavBar";

type Props = {};

const MoblieNav = (props: Props) => {
  const pathname = usePathname();

  return (
    <div>
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-4xl text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <div className="mt-32 mb-10 text-center text-2xl">
            <Link href={"/"}>
              <h1 className="font-bold">
                <span className="text-accent">Thien</span>Phat:
              </h1>
            </Link>
          </div>
          <nav className="flex flex-col gap-5 justify-center items-center capitalize">
            {links.map(({ name, path }) => (
              <Link key={name} href={path} className={`relative group`}>
                {name}
                <span
                  className={`block absolute bottom-[-2px] left-0 h-[2px] bg-accent-hover transition-all duration-500 group-hover:w-fit ${
                    pathname === path ? "w-full" : "w-0"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MoblieNav;
