import { FaCss3, FaHtml5, FaJs, FaReact, FaWordpress } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export const about = {
  title: "About me",
  desc: "I have developed a solid foundation in information technology and problem-solving abilities. Now, I am looking to apply and expand my skills in the field of web development, where I can contribute not only technically but also creatively.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Bui Thien Phat",
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
  desc: "I have almost 1 year of experience",
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
  title: "My experience",
  desc: "I have developed a solid foundation in information technology and problem-solving abilities. Now, I am looking to apply and expand my skills in the field of web development, where I can contribute not only technically but also creatively.",
  schools: [
    {
      icon: "education",
      school: "HCM University of Natural Resources and Environment",
      position: "SYSTEM INFORMATION",
      duration: "7/2016 - 4/2021",
      desc: "Build website html css from figma for custumer",
    },
    {
      icon: "certification",
      school: "CFD Circle",
      position: "FRONTEND MASTER COURSE",
      duration: "5/2023 - 11/2023",
      desc: "Build 5 projects, Certification Training: CFD Circle good",
    },
  ],
};

export const skill = {
  title: "My skills",
  desc: "You have strong skills in frontend development with React.js and Next.js, including API integration and user interface optimization. You are proficient in using Tailwind CSS, Shadcn UI, and Ant Design, and have experience with TypeScript to ensure code safety and efficiency. You are always striving to develop your skills to work effectively and meet the project's requirements.",
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

[
  {
    resume: {
      about: {
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
      },

      experience: {
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
      },

      education: {
        title: "My experience",
        desc: "I have developed a solid foundation in information technology and problem-solving abilities. Now, I am looking to apply and expand my skills in the field of web development, where I can contribute not only technically but also creatively.",
        schools: [
          {
            icon: "education",
            school: "HCM University of Natural Resources and Environment",
            position: "SYSTEM INFORMATION",
            duration: "7/2016 - 4/2021",
            desc: "Build website html css from figma for custumer",
          },
          {
            icon: "certification",
            school: "CFD Circle",
            position: "FRONTEND MASTER COURSE",
            duration: "5/2023 - 11/2023",
            desc: "Build 5 projects, Certification Training: CFD Circle good",
          },
        ],
      },
    },
  },
];
