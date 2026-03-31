"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { business, navLinks } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = Math.max(window.innerHeight - 140, 140);
      setScrolled(window.scrollY >= threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

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
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href={business.phoneHref} className="button button--ghost" onClick={() => setOpen(false)}>
            Call
          </a>
          <Link href="/contact-us#booking" className="button button--primary" onClick={() => setOpen(false)}>
            Book
          </Link>
        </nav>
      </div>
    </header>
  );
}
