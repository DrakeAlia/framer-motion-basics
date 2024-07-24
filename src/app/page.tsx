"use client";

import { motion } from "framer-motion";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >
        {/* Fade Up */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
      </motion.section>
    </div>
  );
}
