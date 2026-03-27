export function ButtonLink({ href, variant = "primary", className = "", children, ...props }) {
  return (
    <a href={href} className={`buttonLink buttonLink--${variant} ${className}`.trim()} {...props}>
      <span>{children}</span>
      {variant === "text" ? <i aria-hidden="true" /> : null}
    </a>
  );
}

export function SectionTitle({ eyebrow, title, tone = "dark", body, align = "left" }) {
  return (
    <div className={`sectionTitle sectionTitle--${tone} sectionTitle--${align}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p className="sectionTitle__body">{body}</p> : null}
    </div>
  );
}

export function EyebrowTag({ children, tone = "dark" }) {
  return <p className={`eyebrow eyebrow--${tone}`}>{children}</p>;
}

export function IconBadge({ icon, label, value, tone = "light" }) {
  const Icon = icon;

  return (
    <article className={`iconBadge iconBadge--${tone}`} data-reveal>
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
