"use client";

import { motion, AnimatePresence, easeOut } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PageTransition = ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <div>
      <AnimatePresence>
        <div key={pathname}>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: {
                delay: 1,
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
            className="fixed inset-0 pointer-events-none z-20"
          />
          {children}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
