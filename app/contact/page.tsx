"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import "swiper/css";

type Props = {};

const info = [
  {
    icon: <FaPhone />,
    title: "Phone",
    desc: "0374267700",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    desc: "buithienphat.btp@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    desc: "Tan Binh, HCM City",
  },
];

const Contact = (props: Props) => {
  const onSubmit = () => {};

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 1.5, ease: "easeInOut" },
      }}
    >
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent font-bold">Contact Me</h3>
              <p className="text-white/60 font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                corrupti earum praesentium sequi repellendus recusandae porro
                molestias vel deserunt placeat, quibusdam facere quam eveniet
                harum qui delectus debitis numquam. Autem.
              </p>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 text-primary">
                <Input type="firstname" placeholder="FirstName" />
                <Input type="lastname" placeholder="LastName" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>

              <Textarea className="h-[200px]" placeholder="Your message" />

              <Button
                variant={"outline"}
                className="max-w-40"
                onClick={onSubmit}
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, i) => (
                <li key={i} className="flex items-center gap-6">
                  <div className="size-[52px] xl:size-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px] ">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <p className="text-xl whitespace-nowrap">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
