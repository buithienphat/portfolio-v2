"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

const cubeSnipener = [
  { urlImg: "/assets/cubeimg/nodejs.png" },
  { urlImg: "/assets/cubeimg/nextjs.png" },
  { urlImg: "/assets/cubeimg/css.png" },
  { urlImg: "/assets/cubeimg/js.png" },
  { urlImg: "/assets/cubeimg/react.png" },
  { urlImg: "/assets/cubeimg/html.png" },
];

const CubeSnipener = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
    >
      <div className="cubespinner">
        {cubeSnipener.map((item, i) => (
          <div
            key={i}
            className={`cube flex items-center justify-center ite face${i + 1}`}
          >
            <Image
              width={150}
              height={150}
              quality={100}
              priority
              className=""
              src={item.urlImg}
              alt=""
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CubeSnipener;
