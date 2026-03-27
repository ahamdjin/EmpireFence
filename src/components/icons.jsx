function createIcon(path) {
  return function Icon() {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {path}
      </svg>
    );
  };
}

export const ShieldIcon = createIcon(
  <>
    <path d="M12 3 5 6v5c0 4.7 2.7 8.5 7 10 4.3-1.5 7-5.3 7-10V6l-7-3Z" />
    <path d="m9.5 12 1.7 1.8 3.4-3.8" />
  </>,
);

export const SparkIcon = createIcon(
  <>
    <path d="m12 2 1.6 4.4L18 8l-4.4 1.6L12 14l-1.6-4.4L6 8l4.4-1.6L12 2Z" />
    <path d="m18.5 15 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
  </>,
);

export const GateIcon = createIcon(
  <>
    <path d="M5 21V5.5A2.5 2.5 0 0 1 7.5 3h9A2.5 2.5 0 0 1 19 5.5V21" />
    <path d="M5 12h14" />
    <path d="M12 3v18" />
    <path d="M10 9h.01" />
    <path d="M14 15h.01" />
  </>,
);

export const PhoneIcon = createIcon(
  <>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19 19.4 19.4 0 0 1 5 12.8 19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 3a2 2 0 0 1-.6 1.8L7 10.4a16 16 0 0 0 6.6 6.6l1.9-1.9a2 2 0 0 1 1.8-.6l3 .4a2 2 0 0 1 1.7 2Z" />
  </>,
);

export const CompassIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="m14.8 9.2-1.9 5.6-5.7 1.9 1.9-5.6 5.7-1.9Z" />
  </>,
);

export const MailIcon = createIcon(
  <>
    <path d="M4 6h16v12H4z" />
    <path d="m4 7 8 6 8-6" />
  </>,
);

export const ArrowIcon = createIcon(
  <>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </>,
);

export const QuoteIcon = createIcon(
  <>
    <path d="M9 7H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3V7Z" />
    <path d="M20 7h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3V7Z" />
  </>,
);

export const StarIcon = createIcon(
  <>
    <path d="m12 3 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8L12 3Z" />
  </>,
);

export const ClockIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </>,
);

export const CheckIcon = createIcon(
  <>
    <path d="m5 12 4.2 4.2L19 6.5" />
  </>,
);
