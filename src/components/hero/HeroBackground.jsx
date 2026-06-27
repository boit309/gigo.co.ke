import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [.4, .8, .4],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]"
      />

      {/* Bottom Right Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [.3, .6, .3],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-[120px]"
      />
    </>
  );
}