"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

import { areaPath, areasIndexPath, servicePath } from "@/lib/paths";
import { business } from "@/lib/site";

// Service icons mapping
const serviceIcons = {
  "vinyl-fence": "🏠",
  "wood-fence": "🌲",
  "wrought-iron-fence": "⚒️",
  "chain-link-fence": "🔗",
  "metal-fence": "🔩",
  "fence-repairs": "🔧",
  "fence-supply": "📦",
  "gazebo-builder": "🏛️",
  "patio-enclosures": "🏖️",
  "railing-contractor": "🛡️",
};

// Service descriptions for hover
const serviceDescriptions = {
  "vinyl-fence": "Privacy & durability",
  "wood-fence": "Natural beauty",
  "wrought-iron-fence": "Elegant security",
  "chain-link-fence": "Affordable protection",
  "metal-fence": "Long-lasting strength",
  "fence-repairs": "Restore & renew",
  "fence-supply": "Quality materials",
  "gazebo-builder": "Outdoor living",
  "patio-enclosures": "Extended spaces",
  "railing-contractor": "Safety & style",
};

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const forceScrolled = pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      const threshold = Math.max(window.innerHeight - 140, 140);
      setScrolled(forceScrolled || window.scrollY >= threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceScrolled]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  // Handle mobile services toggle
  const handleServicesToggle = (e) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      setServicesOpen(!servicesOpen);
    }
  };

  // Close services dropdown on mobile when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };

    if (window.innerWidth <= 900) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, []);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Filter services for dropdown
  const servicesList = [
    { slug: "vinyl-fence", title: "Vinyl Fence" },
    { slug: "wood-fence", title: "Wood Fence" },
    { slug: "wrought-iron-fence", title: "Wrought Iron" },
    { slug: "chain-link-fence", title: "Chain Link" },
    { slug: "metal-fence", title: "Metal Fence" },
    { slug: "fence-repairs", title: "Fence Repairs" },
    { slug: "fence-supply", title: "Fence Supply" },
    { slug: "gazebo-builder", title: "Gazebo Builder" },
    { slug: "patio-enclosures", title: "Patio Enclosures" },
    { slug: "railing-contractor", title: "Railing Contractor" },
  ];

  return (
    <header className={`siteHeader${scrolled ? " siteHeader--scrolled" : ""}`}>
      <div className="siteHeader__shell">
        <Link href="/" className="brandMark" aria-label={business.shortName}>
          <Image src="/client/logo.png" alt={business.shortName} width={64} height={64} />
          <div>
            <strong>{business.name}</strong>
            <span>{business.city}</span>
          </div>
        </Link>

        <button
          type="button"
          className={`menuToggle${open ? " is-open" : ""}`}
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`siteHeader__nav${open ? " is-open" : ""}`}>
          <Link href="/about-us" onClick={() => setOpen(false)}>About</Link>

          {/* Services Dropdown */}
          <div
            className={`navDropdown${servicesOpen ? " is-open" : ""}`}
            ref={servicesRef}
          >
            <div className="navDropdown__wrapper">
              <Link href="/services" className="navDropdown__link" onClick={() => setOpen(false)}>
                Services
              </Link>
              <button
                type="button"
                className="navDropdown__toggle"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-label="Toggle services menu"
                onClick={handleServicesToggle}
              >
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 4L6 8L10 4" />
                </svg>
              </button>
            </div>
            <div className="navDropdown__menu">
              <div className="navDropdown__header">
                <span className="navDropdown__title">Our Services</span>
                <Link href="/services" className="navDropdown__viewAll" onClick={() => setOpen(false)}>
                  View all →
                </Link>
              </div>
              <div className="navDropdown__grid">
                {servicesList.map((service) => (
                  <Link
                    key={service.slug}
                    href={servicePath(service.slug)}
                    className="navDropdown__item"
                    onClick={() => setOpen(false)}
                  >
                    <span className="navDropdown__icon">{serviceIcons[service.slug]}</span>
                    <span className="navDropdown__text">
                      <span className="navDropdown__label">{service.title}</span>
                      <span className="navDropdown__meta">{serviceDescriptions[service.slug]}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
          <Link href={areasIndexPath} onClick={() => setOpen(false)}>Areas</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/contact-us" onClick={() => setOpen(false)}>Contact</Link>

          <a href={business.phoneHref} className="button button--ghost" onClick={() => setOpen(false)}>
            Call
          </a>
          <Link href="/contact-us" className="button button--primary" onClick={() => setOpen(false)}>
            Estimate
          </Link>
        </nav>
      </div>
    </header>
  );
}
