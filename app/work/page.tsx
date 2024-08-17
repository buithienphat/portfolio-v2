"use client";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tooltip } from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsArrowDownRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, facilis? Vitae officiis ducimus voluptas, cupiditate molestiae repellat perspiciatis veniam sequi itaque corporis et eaque blanditiis officia pariatur sunt amet at?",
    stack: [
      { name: "html5" },
      { name: "css" },
      { name: "rectjs" },
      { name: "NextJs" },
      { name: "typeScript" },
    ],
    name: "Javascript",
    img: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, facilis? Vitae officiis ducimus voluptas, cupiditate molestiae repellat perspiciatis veniam sequi itaque corporis et eaque blanditiis officia pariatur sunt amet at?",
    stack: [
      { name: "html5" },
      { name: "css" },
      { name: "rectjs" },
      { name: "nextjs14" },
      { name: "tyscript" },
    ],
    name: "Javascript",
    img: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, facilis? Vitae officiis ducimus voluptas, cupiditate molestiae repellat perspiciatis veniam sequi itaque corporis et eaque blanditiis officia pariatur sunt amet at?",
    stack: [
      { name: "html5" },
      { name: "css" },
      { name: "rectjs" },
      { name: "nextjs14" },
      { name: "tyscript" },
    ],
    name: "Javascript",
    img: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

type project = {
  num: string;
  category: string;
  title: string;
  desc: string;
  stack: { name: string }[];
  name: string;
  img: string;
  live: string;
  github: string;
};
const Work = () => {
  const [project, setProject] = useState<project>(projects[0]);

  const handleSilceChange = (swiper: any) => {
    console.log("swiper.activeIndex", swiper.activeIndex);
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 1.5,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col xl gap-[30px] h-1/2">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent duration-main capitalize">
                {project.category} project
              </h2>
              <p className="text-white/80"> {project.desc}</p>

              <ul className="flex gap-4 capitalize flex-wrap">
                {project.stack.map((item, i) => (
                  <li key={i} className="text-xl text-accent">
                    {item.name}
                    {i !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="size-[60px] rounded-full bg-white/5 flex justify-center items-center hover:text-accent group">
                        <BsArrowDownRight className="text-2xl group-hover:-rotate-90 duration-main" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="size-[60px] rounded-full bg-white/5 flex justify-center items-center hover:text-accent">
                        <BsGithub className="text-2xl duration-main" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSilceChange}
            >
              {projects.map((project, i) => (
                <SwiperSlide key={i} className="w-full">
                  <div className="h-[460px] relative group flex justify-center bg-pink-50/20">
                    <div className="absolute inset-0 bg-black/10 z-10"></div>
                    <div className="size-full">
                      <Image
                        src={project.img}
                        fill
                        alt=""
                        quality={100}
                        priority
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className=""></div>
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="border-accent border hover:bg-accent-hover text-accent hover:text-primary text-[22px] size-[44px] flex justify-center items-center duration-main transition-all"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
