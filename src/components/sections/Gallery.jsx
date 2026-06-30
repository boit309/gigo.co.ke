import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Container from "../ui/Container";

import gallery from "../../data/profile/gallery";

import GalleryHeader from "../gallery/GalleryHeader";
import GalleryFilters from "../gallery/GalleryFilters";
import GalleryCard from "../gallery/GalleryCard";
import GalleryModal from "../gallery/GalleryModal";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const filteredAlbums = useMemo(() => {
    if (activeFilter === "All") {
      return gallery.albums;
    }

    return gallery.albums.filter(
      (album) => album.category === activeFilter
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
        <GalleryHeader />

        <GalleryFilters
          filters={gallery.filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredAlbums.map((album) => (
              <GalleryCard
                key={album.id}
                album={album}
                onOpen={setSelectedAlbum}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <GalleryModal
          album={selectedAlbum}
          isOpen={Boolean(selectedAlbum)}
          onClose={() => setSelectedAlbum(null)}
        />
      </Container>
    </section>
  );
}