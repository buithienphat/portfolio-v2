"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";

type Props = {};

const services = [
  {
    href: "",
    num: "01",
    title: "Web Developer",
    desc: "A web developer is responsible for building and maintaining the structure, layout, and functionality of a website. This role involves converting design files into functional web pages using HTML, CSS, and JavaScript, ensuring that the website is both user-friendly and optimized for performance.",
  },
  {
    href: "",
    num: "02",
    title: "Responsive Design",
    desc: "Responsive design ensures that a website's layout and content adjust seamlessly across various screen sizes and devices. This approach is crucial in providing a consistent user experience, whether on a smartphone, tablet, or desktop, by using flexible grids, images, and CSS media queries.",
  },
  {
    href: "",
    num: "03",
    title: "Performance Optimization",
    desc: "Performance optimization focuses on enhancing the speed and efficiency of a website. This involves techniques such as minimizing file sizes, optimizing images, leveraging browser caching, and reducing server response times to ensure that pages load quickly, improving user satisfaction and search engine rankings.",
  },
  {
    href: "",
    num: "04",
    title: "SEO WEBSITE",
    desc: "SEO involves optimizing a website’s content, structure, and performance to improve its visibility in search engine results. For web developers, this means implementing best practices like clean code, fast loading times, mobile-friendliness, and proper use of meta tags and structured data to help search engines better understand and rank the site.",
  },
];

const Explorer = (props: Props) => {
  return (
    <section className="md:pt-20 pt-10 select-text">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.4,
                  delay: 1 + index * 0.3,
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explorer;
