import { motion } from "framer-motion";
import {
  FaReact,
  FaLinux,
  FaNetworkWired,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import profile from "../../data/profile";
import FloatingBadge from "./FloatingBadge";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: .8 }}
      className="relative flex justify-center"
    >
      <div className="glass relative rounded-[40px] border border-blue-500/30 p-4 shadow-[0_0_80px_rgba(37,99,235,.25)]">

        <img
          src={profile.personal.photo}
          alt={profile.personal.fullName}
          className="h-[550px] w-[420px] rounded-[28px] object-cover"
        />

        <FloatingBadge
          icon={<FaReact className="text-cyan-400" />}
          title="React"
          className="-left-10 top-10"
        />

        <FloatingBadge
          icon={<SiJavascript className="text-yellow-400" />}
          title="JavaScript"
          className="-left-14 bottom-24"
          delay={1}
        />

        <FloatingBadge
          icon={<FaLinux className="text-white" />}
          title="Linux"
          className="-right-10 top-24"
          delay={2}
        />

        <FloatingBadge
          icon={<FaNetworkWired className="text-blue-400" />}
          title="Networking"
          className="-right-12 bottom-20"
          delay={3}
        />

      </div>
    </motion.div>
  );
}