"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
const service: string | undefined = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID;
const template: string | undefined = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID;
const publicKey: string | undefined = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY;

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
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { toast } = useToast();

  const onSubmit = async (formData: any) => {
    setLoading(true);
    try {
      await emailjs.send(service!, template!, formData, publicKey);
      toast({
        title:
          "Thank you for contacting me! I will respond as soon as possible.",
      });
      reset();
    } catch (error: any) {
      console.log(error.text);
      toast({
        title:
          "Thank you for contacting me! I will respond as soon as possible.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 1.2, ease: "easeInOut" },
      }}
    >
      <Toaster />

      <div className="container">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent font-bold">Contact Me</h3>
              <p className="text-white/80 font-medium">
                I’m always excited to connect with other professionals,
                potential clients, or anyone interested in my work. If you have
                any inquiries, project opportunities, or just want to chat about
                design and development, feel free to reach out. Use the contact
                form below or connect with me on social media. I look forward to
                hearing from you!
              </p>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 gap-y-8 text-primary">
                <div className="relative">
                  <Input
                    className={`w-full ${
                      errors.firstName
                        ? "border-red-400 focus:border-red-400"
                        : ""
                    }`}
                    placeholder="First Name"
                    {...register("firstName", {
                      required: "This field is required",
                    })}
                  />
                  {errors.firstName &&
                    typeof errors.firstName.message === "string" && (
                      <p className="absolute -bottom-6 text-red-400 text-sm pl-2">
                        {errors.firstName.message}
                      </p>
                    )}
                </div>
                <div className="relative">
                  <Input
                    className={`w-full ${
                      errors.lastName
                        ? "border-red-400 focus:border-red-400"
                        : ""
                    }`}
                    placeholder="Last Name"
                    {...register("lastName", {
                      required: "This field is required",
                    })}
                  />
                  {errors.lastName &&
                    typeof errors.lastName.message === "string" && (
                      <p className="absolute -bottom-6 text-red-400 text-sm pl-2">
                        {errors.lastName.message}
                      </p>
                    )}
                </div>
                <div className="relative">
                  <Input
                    className={`w-full ${
                      errors.email ? "border-red-400 focus:border-red-400" : ""
                    }`}
                    placeholder="Email address"
                    {...register("email", {
                      required: "This field is required",
                      pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        message: "Email not correct format",
                      },
                    })}
                  />
                  {errors.email && typeof errors.email.message === "string" && (
                    <p className="absolute -bottom-6 text-red-400 text-sm pl-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <Input
                    className={`w-full ${
                      errors.phone ? "border-red-400 focus:border-red-400" : ""
                    }`}
                    placeholder="Phone number"
                    {...register("phone", {
                      required: "This field is required",
                      pattern: {
                        value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
                        message: "Phone not correct format",
                      },
                      minLength: {
                        value: 10,
                        message: "Phone not correct format",
                      },
                      maxLength: {
                        value: 11,
                        message: "Phone not correct format",
                      },
                    })}
                  />
                  {errors.phone && typeof errors.phone.message === "string" && (
                    <p className="absolute -bottom-6 text-red-400 text-sm pl-2">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-1 relative">
                <Textarea
                  className={`h-[200px] w-full mb-4 ${
                    errors.message ? "border-red-400 focus:border-red-400" : ""
                  }`}
                  placeholder="Your message"
                  {...register("message", {
                    required: "This field is required",
                  })}
                />
                {errors.message &&
                  typeof errors.message.message === "string" && (
                    <p className="absolute -bottom-2 text-red-400 text-sm pl-2">
                      {errors.message.message}
                    </p>
                  )}
              </div>

              <Button
                variant={"outline"}
                className="max-w-40"
                onClick={handleSubmit(onSubmit)}
                disabled={loading}
              >
                {loading ? "Loading..." : "Send Message"}
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
