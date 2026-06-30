import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTimes,
} from "react-icons/fa";

export default function GalleryModal({
  album,
  isOpen,
  onClose,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset to first image whenever a new album opens
  useEffect(() => {
    if (album) {
      setCurrentIndex(0);
    }
  }, [album]);

  // Prevent background scrolling
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const nextPhoto = useCallback(() => {
    if (!album) return;

    setCurrentIndex((prev) =>
      prev === album.photos.length - 1 ? 0 : prev + 1
    );
  }, [album]);

  const previousPhoto = useCallback(() => {
    if (!album) return;

    setCurrentIndex((prev) =>
      prev === 0 ? album.photos.length - 1 : prev - 1
    );
  }, [album]);

  // Keyboard controls
  useEffect(() => {
    if (!isOpen || !album) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowRight":
          nextPhoto();
          break;

        case "ArrowLeft":
          previousPhoto();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [
    album,
    isOpen,
    nextPhoto,
    previousPhoto,
    onClose,
  ]);

  if (!album) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex h-full flex-col"
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {album.title}
                </h2>

                <div className="mt-2 flex flex-wrap gap-5 text-sm text-slate-400">
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt />
                    {album.date}
                  </span>

                  {album.location && (
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt />
                      {album.location}
                    </span>
                  )}

                  <span>
                    Photo {currentIndex + 1} of{" "}
                    {album.photos.length}
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="rounded-full bg-white/10 p-3 text-white transition hover:bg-red-500"
              >
                <FaTimes />
              </button>
            </div>

            {/* Main Image */}

            <div className="relative flex flex-1 items-center justify-center px-6 py-8 overflow-hidden">
              {album.photos.length > 1 && (
                <button
                  onClick={previousPhoto}
                  className="absolute left-6 z-20 rounded-full bg-black/60 p-4 text-white transition hover:bg-blue-600"
                >
                  <FaChevronLeft size={22} />
                </button>
              )}

              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={album.photos[currentIndex]}
                  alt={`${album.title} ${currentIndex + 1}`}
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="max-h-[75vh] rounded-3xl object-contain shadow-2xl"
                />
              </AnimatePresence>

              {album.photos.length > 1 && (
                <button
                  onClick={nextPhoto}
                  className="absolute right-6 z-20 rounded-full bg-black/60 p-4 text-white transition hover:bg-blue-600"
                >
                  <FaChevronRight size={22} />
                </button>
              )}
            </div>

            {/* Description */}

            <div className="mx-auto w-full max-w-5xl px-6">
              <p className="text-center leading-7 text-slate-300">
                {album.description}
              </p>
            </div>

            {/* Thumbnails */}

            <div className="mt-6 flex gap-3 overflow-x-auto border-t border-white/10 px-6 py-6">
              {album.photos.map((photo, index) => (
                <button
                  key={`${photo}-${index}`}
                  onClick={() =>
                    setCurrentIndex(index)
                  }
                  className={`overflow-hidden rounded-xl border-2 transition-all ${
                    currentIndex === index
                      ? "border-blue-500"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={photo}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-20 w-28 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}