export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        glass
        rounded-3xl
        p-6
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}