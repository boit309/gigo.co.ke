import { motion } from "framer-motion";

export default function FloatingBadge({
  icon,
  title,
  className = "",
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        delay,
        duration: 4,
        repeat: Infinity,
      }}
      className={`
        glass
        absolute
        rounded-2xl
        p-4
        text-center
        shadow-xl
        ${className}
      `}
    >
      <div className="mb-2 text-4xl">{icon}</div>

      <p className="text-sm">{title}</p>
    </motion.div>
  );
}