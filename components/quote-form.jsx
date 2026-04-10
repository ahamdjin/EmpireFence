"use client";

import { useMemo, useState } from "react";

import { business } from "@/lib/site";

function createMailto(values) {
  const lines = [
    ["Name", values.name],
    ["Phone", values.phone],
    ["Email", values.email],
    ["Service", values.service],
    ["City", values.city],
    ["Project details", values.details],
  ]
    .map(([label, value]) => `${label}: ${value || ""}`)
    .join("\n");

  return `${business.emailHref}?subject=${encodeURIComponent(
    `Estimate request - ${business.shortName}`,
  )}&body=${encodeURIComponent(lines)}`;
}

export function QuoteForm({ compact = false }) {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    city: "",
    details: "",
  });

  const mailto = useMemo(() => createMailto(values), [values]);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    window.location.href = mailto;
  }

  return (
    <form className={`quoteForm${compact ? " quoteForm--compact" : ""}`} onSubmit={handleSubmit}>
      <div className="quoteForm__grid">
        <label>
          <span>Name</span>
          <input name="name" placeholder="Your name" value={values.name} onChange={handleChange} required />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" placeholder="Phone" value={values.phone} onChange={handleChange} required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" placeholder="Email" value={values.email} onChange={handleChange} required />
        </label>
        <label>
          <span>Service</span>
          <select name="service" value={values.service} onChange={handleChange} required>
            <option value="">Select service</option>
            <option value="Vinyl fence">Vinyl fence</option>
            <option value="Wood fence">Wood fence</option>
            <option value="Wrought iron fence">Wrought iron fence</option>
            <option value="Chain link fence">Chain link fence</option>
            <option value="Metal fence">Metal fence</option>
            <option value="Fence repairs">Fence repairs</option>
          </select>
        </label>
        <label>
          <span>City</span>
          <input name="city" placeholder="Project city" value={values.city} onChange={handleChange} />
        </label>
        <label className="quoteForm__field--wide">
          <span>Project details</span>
          <textarea
            name="details"
            rows={compact ? 4 : 6}
            placeholder="Fence type, rough scope, timeline, and anything the team should know."
            value={values.details}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit" className="button button--primary">
        Send estimate request
      </button>
    </form>
  );
}
