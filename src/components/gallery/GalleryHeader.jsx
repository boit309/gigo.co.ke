import { motion } from "framer-motion";

import gallery from "../../data/profile/gallery";

export default function GalleryHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-16 max-w-4xl text-center"
    >
      <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-blue-400">
        Moments That Matter
      </span>

      <h2 className="mt-6 text-5xl font-black lg:text-6xl">
        <span className="gradient-text">
          {gallery.title}
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
        {gallery.subtitle}
      </p>
    </motion.div>
  );
}