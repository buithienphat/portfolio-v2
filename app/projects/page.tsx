import Section from "./Section";

const projects = [
  {
    num: "01",
    category: "Front-end",
    desc: "The project introduces a coffee shop by creating an engaging and smooth website that allows users to experience the unique atmosphere and style of the shop, while enhancing the overall online interaction experience.",
    stack: [
      { name: "Tailwind" },
      { name: "NextJs" },
      { name: "typeScript" },
      { name: "GSAP" },
      { name: "Framer-Motion" },
      { name: "shadcn ui" },
    ],
    name: "Coffee shop",
    img: "https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D1%26deploymentId%3Ddpl_3mvoVWbmmFspvG8p8jki1mUpmFiU%26teamId%3Dbuithienphats-projects%26withStatus%3D1&w=1920&q=75&dpl=dpl_HEU2pGu4cXcREoxzyBrXVvpUMzZR",
    live: "https://coffee-umber-alpha.vercel.app/",
    github: "https://github.com/buithienphat/coffee",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 1",
    desc: "Your e-commerce website project is an online shopping platform with a user-friendly interface that allows users to view products, see details, and easily manage their cart, along with other functions, etc. The entire experience is optimized for both desktop and mobile devices.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Scss" },
      { name: "ReactJs" },
      { name: "Redux-Toolkit" },
      { name: "Ant-Design" },
      { name: "React-hook-from" },
    ],
    name: "shop ecommerce",
    img: "/assets/work/shop-ecommerce.png",
    live: "https://cfdproject-shop.vercel.app/",
    github: "https://github.com/buithienphat/cfdproject-shop",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 1",
    desc: "Study and practice clone projects",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Scss" },
      { name: "ReactJs" },
      { name: "Redux-Toolkit" },
      { name: "Ant-Design" },
      { name: "React-hook-from" },
    ],
    name: "Clone pages course",
    img: "https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D0%26deploymentId%3Ddpl_C4Y7GyyJL51ZuY8N6pUhvjp3WEzn%26teamId%3Dbuithienphats-projects%26withStatus%3D1&w=1920&q=75&dpl=dpl_HEU2pGu4cXcREoxzyBrXVvpUMzZR",
    live: "https://cfd-course-nu.vercel.app/",
    github: "https://github.com/buithienphat/cfd14-course",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 1",
    desc: "Introduces about myseft",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Scss" },
      { name: "ReactJs" },
      { name: "Redux-Toolkit" },
      { name: "Ant-Design" },
      { name: "React-hook-from" },
    ],
    name: "Portfolio-v1",
    img: "https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D0%26deploymentId%3Ddpl_6XpBbpiVMSrPeJ9rwmx6kZWz29sp%26teamId%3Dbuithienphats-projects%26withStatus%3D1&w=1920&q=75&dpl=dpl_HEU2pGu4cXcREoxzyBrXVvpUMzZR",
    live: "https://portfolio-tphat.vercel.app/",
    github: "https://github.com/buithienphat/Portfolio",
  },
];

const Projects = () => {
  return <Section projects={projects} />;
};

export default Projects;
