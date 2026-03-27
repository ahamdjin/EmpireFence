import { useEffect, useMemo, useState } from "react";
import { CoverageSection } from "./components/CoverageSection";
import { EstimateSection } from "./components/EstimateSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { GallerySection } from "./components/GallerySection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProofSection } from "./components/ProofSection";
import { ServicesSection } from "./components/ServicesSection";
import { StorySection } from "./components/StorySection";
import {
  bookingWidget,
  business,
  chatWidget,
  coverage,
  estimate,
  faqs,
  gallery,
  hero,
  navigation,
  proof,
  services,
  story,
} from "./content/siteContent";
import { usePageEffects } from "./hooks/usePageEffects";

function buildMailto(values) {
  const body = [
    ["Name", values.name],
    ["Phone", values.phone],
    ["Email", values.email],
    ["Service", values.service],
    ["Project details", values.details],
  ]
    .map(([label, value]) => `${label}: ${value || ""}`)
    .join("\n");

  return `${business.emailHref}?subject=${encodeURIComponent(`Estimate request - ${business.name}`)}&body=${encodeURIComponent(body)}`;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    details: "",
  });
  const { heroOffset, isScrolled } = usePageEffects();

  const quoteMailto = useMemo(() => buildMailto(quoteForm), [quoteForm]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const chatScriptId = "empire-chat-widget";
    if (!document.getElementById(chatScriptId)) {
      const script = document.createElement("script");
      script.id = chatScriptId;
      script.src = chatWidget.loaderSrc;
      script.async = true;
      script.dataset.resourcesUrl = chatWidget.resourcesUrl;
      script.dataset.widgetId = chatWidget.widgetId;
      script.dataset.locationId = chatWidget.locationId;
      document.body.appendChild(script);
    }

    const bookingScriptId = "empire-booking-widget";
    if (!document.getElementById(bookingScriptId)) {
      const script = document.createElement("script");
      script.id = bookingScriptId;
      script.src = bookingWidget.scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setQuoteForm((current) => ({ ...current, [name]: value }));
  };

  return (
    <div className={`pageShell ${isScrolled ? "pageShell--scrolled" : ""}`}>
      <Header
        business={business}
        navigation={navigation}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        isScrolled={isScrolled}
      />

      <main id="top">
        <HeroSection hero={hero} heroOffset={heroOffset} />
        <StorySection business={business} hero={hero} story={story} />
        <ServicesSection services={services} />
        <GallerySection gallery={gallery} />
        <ProofSection proof={proof} />
        <CoverageSection coverage={coverage} business={business} />
        <EstimateSection
          business={business}
          bookingWidget={bookingWidget}
          estimate={estimate}
          quoteForm={quoteForm}
          quoteMailto={quoteMailto}
          onInputChange={handleInputChange}
        />
        <FaqSection faqs={faqs} />
      </main>

      <Footer business={business} navigation={navigation} services={services} />
    </div>
  );
}
