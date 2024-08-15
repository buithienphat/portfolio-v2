import { animate, easeInOut, motion } from "framer-motion";
import React from "react";

type Props = {};

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// caculate 6 column delay

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stair = (props: Props) => {
  return (
    <>
      {Array(6)
        .fill("")
        .map((_, index) => {
          return (
            <motion.div
              key={index}
              variants={stairAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reverseIndex(6 - index) * 0.1,
              }}
              className="h-full w-full bg-[#b2f7ef] relative"
            />
          );
        })}
    </>
  );
};

export default Stair;
