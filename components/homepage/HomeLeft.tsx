"use client";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoMdDownload } from "react-icons/io";

type Props = { cv: any };

const HomeLeft = ({ cv }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
      }}
      className="text-center xl:text-left "
    >
      <span className="text-xl capitalize tracking-[5px]">
        Software developer
      </span>
      <h1 className="h1 mb-9 mt-4">
        Hello I'am
        <br />
        <span className="tracking-widest bg-gradient-to-r from-[#b2f7ef] to-accent bg-clip-text text-transparent font-extrabold">
          Thien Phat
        </span>
      </h1>
      <p className="mb-9 max-w-[500px] text-white/80">
        I translate designs into dynamic user experiences while ensuring
        seamless integration with backend systems and cross-browser
        compatibility.
      </p>
      <div className="flex flex-col xl:flex-row items-center gap-8">
        <Button variant={"outline"} size={"lg"}>
          <Link target="_blank" href={cv.cv}>
            Download CV <IoMdDownload className="text-2xl inline" />
          </Link>
        </Button>
        <div className="mb-8 xl:mb-0">
          <Socials />
        </div>
      </div>
    </motion.div>
  );
};

export default HomeLeft;
