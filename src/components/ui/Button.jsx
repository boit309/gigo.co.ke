export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
}) {
  const classes =
    variant === "primary"
      ? "btn-primary inline-flex items-center gap-2"
      : "btn-secondary inline-flex items-center gap-2";

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}