"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { skill } from "@/constants/ResumeData";
import { motion } from "framer-motion";
import { BiMedal } from "react-icons/bi";
import { IoSchool } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";

type Props = {
  data: any;
};

function SectionResume({ data }: Props) {
  const { about, education, experience } = data;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 1, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">Info</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.desc}
                </p>
                <div className="w-full h-[1px] bg-white/20"></div>
                <div className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item: any, i: number) => (
                      <li
                        key={i}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/70">{item.fieldName}:</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.desc}
                </p>
                <ScrollArea className="h-[500px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.jobs.map(
                      (
                        { conpany, duration, position, desc }: any,
                        idx: number
                      ) => (
                        <li
                          key={idx}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-between items-center lg:items-start gap-5"
                        >
                          <span className="flex gap-4 justify-center items-center">
                            <MdOutlineAccessTime className="text-accent" />
                            {duration}
                          </span>
                          <h3>{position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="size-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/70">{conpany}</p>
                          </div>
                          <p className="text-white/70 flex-1"> {desc}</p>
                        </li>
                      )
                    )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.desc}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.schools.map(
                      (
                        { school, duration, position, desc, icon }: any,
                        idx: number
                      ) => (
                        <li
                          key={idx}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-between items-center lg:items-start gap-4"
                        >
                          <div className="flex gap-4 justify-center items-center">
                            {icon === "education" ? (
                              <IoSchool className="text-accent size-10" />
                            ) : (
                              <BiMedal className="text-accent size-10" />
                            )}
                            <span>{duration}</span>
                          </div>
                          <h3 className="min-h-[70px]">{school}</h3>
                          <div className="flex items-center gap-3">
                            <span className="size-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/70">{position}</p>
                          </div>
                          <p className="text-white/70 flex-1"> {desc}</p>
                        </li>
                      )
                    )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{skill.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {skill.desc}
                </p>
                <div className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skill.skillList.map((skill, i) => (
                      <li key={i} className="">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col gap-4 justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-main">
                                {skill.icon}
                              </div>
                              <span className="text-base group-hover:text-accent transition-all duration-main">
                                {skill.name}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default SectionResume;
