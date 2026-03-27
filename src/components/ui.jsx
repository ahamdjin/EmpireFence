export function ButtonLink({ href, variant = "primary", className = "", children, ...props }) {
  return (
    <a href={href} className={`buttonLink buttonLink--${variant} ${className}`.trim()} {...props}>
      <span>{children}</span>
      {variant === "text" ? <i aria-hidden="true" /> : null}
    </a>
  );
}

export function SectionTitle({ eyebrow, title, tone = "dark", body }) {
  return (
    <div className={`sectionTitle sectionTitle--${tone}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p className="sectionTitle__body">{body}</p> : null}
    </div>
  );
}

export function IconBadge({ icon, label, value }) {
  const Icon = icon;

  return (
    <article className="iconBadge" data-reveal>
      <div className="iconBadge__icon">
        <Icon />
      </div>
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
      </div>
    </article>
  );
}
