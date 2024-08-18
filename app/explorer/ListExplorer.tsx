"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

import React from "react";
import { Service } from "./page";

type Props = {
  service: Service;
  index: number;
};

const ListExplorer = ({ service, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 1 + index * 0.2,
          ease: "easeInOut",
        },
      }}
      key={index}
      className="flex-1 flex flex-col justify-center gap-6 group"
    >
      <div className="w-full flex justify-between items-center">
        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover duration-main">
          {service.num}
        </div>
        <Link
          href={service.href}
          className="size-[50px] rounded-full bg-white group-hover:bg-accent duration-main flex justify-center items-center group-hover:-rotate-90"
        >
          <BsArrowDownRight className="text-primary text-3xl" />
        </Link>
      </div>

      <h2 className="text-4xl group-hover:text-accent duration-main">
        {service.title}
      </h2>
      <p className="text-white/80">{service.desc}</p>
      <div className="flex-1 border-b border-white/20 w-full"></div>
    </motion.div>
  );
};

export default ListExplorer;
