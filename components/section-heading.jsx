export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "split",
  tone = "default",
  className = "",
}) {
  const classes = [
    "sectionHeading",
    align === "center" ? "sectionHeading--center" : "",
    tone === "contrast" ? "sectionHeading--contrast" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <div>
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2>{title}</h2>
      </div>
      {copy ? (
        <div className="prose">
          <p>{copy}</p>
        </div>
      ) : null}
    </div>
  );
}
