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
    <section className="pb-40">
      <div className="container flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="flex flex-wrap gap-6 xl:max-w-none justify-between sm:items-center flex-col max-w-[80vw] sm:flex-row sm:w-full items-start"
        >
          {stats.map((stat) => (
            <div key={stat.text}>
              <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                <CountUp
                  end={stat.num}
                  duration={3}
                  delay={1}
                  className="text-4xl xl:text-6xl font-semibold"
                />
                <p className="text-white/80 leading-snug">{stat.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Start;
