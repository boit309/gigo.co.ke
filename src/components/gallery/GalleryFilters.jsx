export default function GalleryFilters({
  filters,
  activeFilter,
  setActiveFilter,
}) {
  return (
    <div className="mb-14 flex flex-wrap justify-center gap-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
            activeFilter === filter
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
              : "border border-blue-500/20 bg-blue-500/10 text-blue-300 hover:bg-blue-600 hover:text-white"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}