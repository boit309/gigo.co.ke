export default function SectionTitle({
  title,
  subtitle,
  center = true,
}) {
  return (
    <div
      className={`mb-16 ${
        center ? "text-center" : ""
      }`}
    >
      <p className="uppercase tracking-[6px] text-blue-400 font-semibold">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold mt-3">
        {title}
      </h2>
    </div>
  );
}