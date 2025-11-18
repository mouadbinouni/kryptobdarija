"use client";

import Image from "next/image";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const DESCRIPTION =
  "Krypto b Darija is a Moroccan project that teaches blockchain and crypto in simple Darija. All our content is purely educational, with no investment advice.";

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
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-8"
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
            className="relative flex flex-col gap-8 rounded-[2.5rem] bg-white/96 px-6 py-10 text-left backdrop-blur-md sm:px-10 sm:py-12"
            variants={fadeInUp}
          >
            <motion.div
              className="flex flex-col items-center gap-8 md:flex-row-reverse md:items-center md:justify-between md:gap-12"
              variants={fadeInUp}
            >
              <div className="flex w-full justify-center pt-2 md:basis-[340px] md:pt-4">
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
                className="flex w-full flex-col gap-4 md:max-w-2xl"
                variants={fadeInUp}
              >
                <motion.h2
                  className="text-left text-lg font-semibold text-slate-800 sm:text-xl"
                  variants={fadeInUp}
                >
                  {DESCRIPTION_HEADING}
                </motion.h2>
                <motion.p
                  lang="en"
                  className="mx-auto text-pretty text-justify text-base leading-7 hyphens-auto text-slate-600 sm:text-lg md:mx-0 md:max-w-[58ch]"
                  variants={paragraphVariants}
                >
                  {DESCRIPTION}
                </motion.p>
              </motion.section>
            </motion.div>

            <motion.p
              className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500"
              variants={fadeInUp}
            >
              Follow us on
            </motion.p>

            <motion.nav
              className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4"
              variants={socialContainer}
            >
              {SOCIAL_LINKS.map(({ href, label, Icon, color, hover }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/70 bg-white/94 text-slate-500 shadow-sm transition sm:h-14 sm:w-14"
                  aria-label={label}
                  variants={socialItem}
                  style={{ color }}
                  whileTap={{ scale: 0.94 }}
                  whileHover={{ scale: 1.08, backgroundColor: hover, color: "#ffffff" }}
                >
                  <Icon className="text-[1.8rem] sm:text-[2rem]" />
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-[2.25rem] border border-slate-100/70 bg-white/90 p-[1.5px] shadow-[0_36px_90px_-70px_rgba(15,23,42,0.55)]"
          variants={fadeInUp}
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(165,243,252,0.3),transparent_65%)]" />
          <div className="flex flex-col items-center gap-6 rounded-4xl bg-white/96 px-8 py-10 text-center backdrop-blur-md sm:flex-row sm:items-center sm:gap-10 sm:text-left">
            <div className="relative flex shrink-0 items-center justify-center">
              <Image
                src="/profile.png"
                alt="Mouad Bin Ouni portrait"
                width={192}
                height={192}
                className="h-28 w-28 rounded-3xl object-cover shadow-lg ring-4 ring-white/80 sm:h-32 sm:w-32"
                priority
              />
              <span className="absolute -bottom-3 right-2 inline-flex items-center rounded-full bg-emerald-600 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-white shadow">
                Founder
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-slate-800 sm:text-xl">Mr BINOUNI Mouad</h3>
              <p className="mx-auto text-left text-pretty text-sm leading-6 hyphens-auto text-slate-600 sm:text-base sm:leading-7 sm:max-w-[52ch] sm:text-justify">
                I’m a blockchain and crypto consultant helping individuals and businesses understand crypto, security, and practical blockchain solutions.
              </p>
              <motion.div
                className="mt-4 flex items-center justify-center gap-3"
                variants={socialContainer}
              >
                <motion.a
                  href="https://wa.me/212600889206"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/70 bg-white/94 shadow-sm transition sm:h-14 sm:w-14"
                  aria-label="WhatsApp"
                  variants={socialItem}
                  whileTap={{ scale: 0.94 }}
                  whileHover={{ scale: 1.08, backgroundColor: "#128C7E", color: "#ffffff" }}
                  style={{ color: "#25D366" }}
                >
                  <FaWhatsapp className="text-[1.8rem] sm:text-[2rem]" />
                  <span className="sr-only">Chat on WhatsApp +212600889206</span>
                </motion.a>
                <motion.a
                  href="mailto:binounimouad.work@gmail.com"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/70 bg-white/94 shadow-sm transition sm:h-14 sm:w-14"
                  aria-label="Email"
                  variants={socialItem}
                  whileTap={{ scale: 0.94 }}
                  whileHover={{ scale: 1.08, backgroundColor: "#EA4335", color: "#ffffff" }}
                  style={{ color: "#EA4335" }}
                >
                  <SiGmail className="text-[1.8rem] sm:text-[2rem]" />
                  <span className="sr-only">Email binounimouad.work@gmail.com</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
