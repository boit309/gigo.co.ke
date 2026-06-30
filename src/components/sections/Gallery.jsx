import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTimes,
} from "react-icons/fa";

import Container from "../ui/Container";

import gallery from "../../data/profile/gallery";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return gallery.items;

    return gallery.items.filter(
      (item) => item.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-24"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      <Container>
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">
            Moments That Matter
          </span>

          <h2 className="mt-6 text-5xl font-black">
            <span className="gradient-text">
              {gallery.title}
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            {gallery.subtitle}
          </p>
        </motion.div>

        {/* Filters */}

        <div className="mb-14 flex flex-wrap justify-center gap-4">
          {gallery.filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${
                activeFilter === filter
                  ? "bg-blue-600 text-white"
                  : "border border-blue-500/20 bg-blue-500/10 text-blue-300 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery */}

        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: .9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: .35 }}
                className="glass group overflow-hidden rounded-3xl border border-white/10"
              >
                {/* Image */}

                <div
                  onClick={() => setSelectedImage(item)}
                  className="relative cursor-pointer overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />

                  <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white">
                    {item.category}
                  </span>
                </div>

                {/* Content */}

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-500">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-blue-400" />
                      {item.date}
                    </span>

                    {item.location && (
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-blue-400" />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
            >
              <motion.div
                initial={{ scale: .9 }}
                animate={{ scale: 1 }}
                exit={{ scale: .9 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-6xl"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute right-4 top-4 z-20 rounded-full bg-black/60 p-3 text-white"
                >
                  <FaTimes />
                </button>

                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[85vh] rounded-3xl object-contain"
                />

                <div className="mt-6 text-center">
                  <h3 className="text-3xl font-bold text-white">
                    {selectedImage.title}
                  </h3>

                  <p className="mt-4 max-w-3xl text-slate-300">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}