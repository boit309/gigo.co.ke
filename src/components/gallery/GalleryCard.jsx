import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaImages,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function GalleryCard({
  album,
  onOpen,
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -8 }}
      className="glass group overflow-hidden rounded-3xl border border-white/10 transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-600/10"
    >
      {/* Cover Image */}

      <div
        onClick={() => onOpen(album)}
        className="relative cursor-pointer overflow-hidden"
      >
        <img
          src={album.cover}
          alt={album.title}
          loading="lazy"
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent" />

        {/* Category */}

        <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
          {album.category}
        </span>

        {/* Featured */}

        {album.featured && (
          <span className="absolute right-5 top-5 rounded-full bg-amber-500 px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-900">
            Featured
          </span>
        )}

        {/* Photo Counter */}

        <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
          <FaImages />
          {album.photos.length} Photos
        </div>
      </div>

      {/* Content */}

      <div className="p-7">
        <h3 className="text-2xl font-bold text-white">
          {album.title}
        </h3>

        <p className="mt-4 line-clamp-3 leading-7 text-slate-400">
          {album.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <FaCalendarAlt className="text-blue-400" />
            {album.date}
          </span>

          {album.location && (
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" />
              {album.location}
            </span>
          )}
        </div>

        {album.organization && (
          <div className="mt-5 rounded-2xl border border-blue-500/20 bg-blue-500/10 px-4 py-3">
            <p className="text-sm text-blue-300">
              <span className="font-semibold">
                Organized by:
              </span>{" "}
              {album.organization}
            </p>
          </div>
        )}
      </div>
    </motion.article>
  );
}