"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import Stair from "./Stair";

type Props = {};

const StairTransition = (props: Props) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="h-screen w-screen fixed inset-0 pointer-events-none z-40 flex">
          <Stair />
        </div>
        {/* <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="fixed w-screen h-screen top-0 pointer-events-none bg-primary"
        /> */}
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
