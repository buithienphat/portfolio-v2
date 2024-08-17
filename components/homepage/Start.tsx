"use client";
import { animate, motion } from "framer-motion";
import React from "react";
import CountUp from "react-countup";

type Props = {};

const stats = [
  {
    num: 1,
    text: "Experience of years",
    character: "~",
  },
  {
    num: 10,
    text: "Projects",
    character: "+",
  },

  {
    num: 10,
    text: "Technologies",
    character: ">",
  },
  {
    character: "~",
    text: "Users",
    num: 10000,
  },
];

const Start = (props: Props) => {
  return (
    <section className="">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="flex flex-wrap gap-6 xl:max-w-none justify-between items-center"
        >
          {stats.map((stat) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              key={stat.text}
            >
              <CountUp
                end={stat.num}
                duration={3}
                delay={1}
                className="text-4xl xl:text-6xl font-semibold"
              />
              <p className="text-white/80 leading-snug">{stat.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Start;
