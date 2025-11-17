"use client";

import Image from "next/image";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const DESCRIPTION =
  "Krypto b Darija is a Moroccan educational project that explains blockchain, cryptocurrency, and Web3 in simple Darija. We share short videos and visual explainers to make complex ideas easy to understand. Everything we create is purely educational with no investment advice.";

const DESCRIPTION_HEADING = "Inspiring confidence in Morocco’s digital future.";

const SOCIAL_LINKS: Array<{
  href: string;
  label: string;
  Icon: IconType;
  color: string;
  hover: string;
}> = [
  {
    href: "https://www.instagram.com/krypto_bdarija",
    label: "Instagram",
    Icon: BsInstagram,
    color: "#E4405F",
    hover: "#d93354",
  },
  {
    href: "https://www.tiktok.com/@krypto_bdarija",
    label: "TikTok",
    Icon: BsTiktok,
    color: "#010101",
    hover: "#050505",
  },
  {
    href: "https://www.linkedin.com/in/mouadbinouni",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
    color: "#0A66C2",
    hover: "#0957a3",
  },
  {
    href: "https://x.com/mouadbinouni",
    label: "X",
    Icon: FaXTwitter,
    color: "#000000",
    hover: "#0f172a",
  },
  {
    href: "https://www.youtube.com/@krypto_bdarija",
    label: "YouTube",
    Icon: BsYoutube,
    color: "#FF0000",
    hover: "#e00000",
  },
];

const heroContainer: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.18,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const socialContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.45, staggerChildren: 0.14 },
  },
};

const socialItem: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 240, damping: 20 },
  },
};

export default function Home() {
  return (
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f9fd] px-4 py-12 text-slate-700 sm:px-8 md:py-24"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="relative z-10 mx-auto w-full max-w-4xl"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="relative overflow-hidden rounded-[2.75rem] border border-white/60 bg-white/85 p-[1.5px] shadow-[0_50px_140px_-90px_rgba(15,23,42,0.55)]"
          variants={fadeInUp}
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(191,219,254,0.26),transparent_65%)]" />
          <motion.div
            className="relative flex flex-col gap-10 rounded-[2.5rem] bg-white/96 px-6 py-10 text-left backdrop-blur-md sm:px-10 sm:py-12"
            variants={fadeInUp}
          >
            <motion.div
              className="flex flex-col items-center gap-8 md:flex-row-reverse md:items-center md:justify-between md:gap-16"
              variants={fadeInUp}
            >
              <div className="flex w-full justify-center md:basis-[340px]">
                <Image
                  src="/logo.svg"
                  alt="Krypto b Darija logo"
                  width={320}
                  height={320}
                  className="h-auto w-full max-w-[220px] sm:max-w-[260px] md:max-w-[320px]"
                  priority
                />
              </div>

              <motion.section
                className="flex w-full flex-col gap-6 md:max-w-2xl"
                variants={fadeInUp}
              >
                <motion.h2
                  className="text-center text-2xl font-semibold leading-tight text-slate-800 sm:text-3xl md:text-left"
                  variants={fadeInUp}
                >
                  {DESCRIPTION_HEADING}
                </motion.h2>
                <motion.p
                  className="text-center text-base leading-7 text-slate-600 sm:text-lg md:text-left"
                  variants={paragraphVariants}
                >
                  {DESCRIPTION}
                </motion.p>
              </motion.section>
            </motion.div>

            <motion.nav
              className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5"
              variants={socialContainer}
            >
              {SOCIAL_LINKS.map(({ href, label, Icon, color, hover }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-16 w-16 items-center justify-center rounded-full border border-slate-200/70 bg-white/94 text-slate-500 shadow-sm transition"
                  aria-label={label}
                  variants={socialItem}
                  style={{ color }}
                  whileTap={{ scale: 0.94 }}
                  whileHover={{ scale: 1.08, backgroundColor: hover, color: "#ffffff" }}
                >
                  <Icon className="text-[2.25rem]" />
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}
