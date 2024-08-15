import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MoblieNav from "./MoblieNav";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="py-8 xl:pt-12">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <h1 className="text-4xl font-bold">
              <span className="text-accent">Thien</span>Phat:
            </h1>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Nav />
            <Link href={"/"}>
              <Button className="">Hire me</Button>
            </Link>
          </div>

          <div className="lg:hidden">
            <MoblieNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
