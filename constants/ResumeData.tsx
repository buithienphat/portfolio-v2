import { FaCss3, FaHtml5, FaJs, FaReact, FaWordpress } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export const about = {
  title: "About me",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eum, amet temporibus commodi harum non optio earum porro modi cupiditate facere quos ab distinctio officia tempore rerum. Dicta, voluptate laboriosam.",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Thien Phat",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+84) 0374 267 700",
    },
    {
      fieldName: "Experience",
      fieldValue: "~1 year",
    },
    {
      fieldName: "Zalo",
      fieldValue: "0374267700",
    },
    {
      fieldName: "Jobs",
      fieldValue: "Open to work",
    },
    {
      fieldName: "Email",
      fieldValue: "buithienphat.btp@gmail.com",
    },
  ],
};

export const experience = {
  icon: "/assets/resume/bage.svg",
  title: "My experience",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eum, amet temporibus commodi harum non optio earum porro modi cupiditate facere quos ab distinctio officia tempore rerum. Dicta, voluptate laboriosam.",
  jobs: [
    {
      conpany: "Be earning jsc",
      position: "Fresher frontend developer",
      duration: "1/2024 - 7/2024",
      desc: "Process template pages according to assigned requirements. Learn also approach web3 processing techniques. Optimize website performance as well as improve user experience",
    },
    {
      conpany: "Freelance",
      position: "Frontend developer",
      duration: "7/2024 - now",
      desc: "Build website html css from figma for custumer",
    },
  ],
};

export const education = {
  icon: "/assets/resume/bage.svg",
  title: "My experience",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eum, amet temporibus commodi harum non optio earum porro modi cupiditate facere quos ab distinctio officia tempore rerum. Dicta, voluptate laboriosam.",
  jobs: [
    {
      conpany: "Be earning jsc",
      position: "Fresher frontend developer",
      duration: "1/2024 - 7/2024",
    },
    {
      conpany: "Freelance",
      position: "Frontend developer",
      duration: "7/2024 - now",
      desc: "Build website html css from figma for custumer",
    },
  ],
};

export const skill = {
  title: "My skills",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eum, amet temporibus commodi harum non optio earum porro modi cupiditate facere quos ab distinctio officia tempore rerum. Dicta, voluptate laboriosam.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "Css",
    },
    {
      icon: <FaJs />,
      name: "Js",
    },
    {
      icon: <FaReact />,
      name: "ReactJs",
    },
    {
      icon: <RiNextjsFill />,
      name: "NextJs",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaWordpress />,
      name: "WordPress",
    },
  ],
};
