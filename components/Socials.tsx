import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";

type Props = {};

const socials = [
  {
    href: "https://github.com/buithienphat",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/thien-phat/",
    icon: <FaLinkedin />,
  },
  {
    href: "https://www.facebook.com/bui.phat.98541",
    icon: <FaFacebookF />,
  },
  {
    href: "/",
    icon: <FaEarthAsia />,
  },
];

const Socials = (props: Props) => {
  return (
    <div>
      <ul className="flex text-white text-xl gap-4">
        {socials.map((social, i) => (
          <Link
            key={i}
            target="_blank"
            href={social.href}
            className="size-12 border border-white rounded-full flex items-center justify-center hover:text-accent hover:border-accent duration-main text-white"
          >
            {social.icon}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
