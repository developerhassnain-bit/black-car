"use client";

import { useState } from "react";
import { Send, CheckCircle2, Phone, Sparkles } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Airport Round Trip",
    date: "",
    time: "",
    pickup: "",
    destination: "",
    passengers: "1-4",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-primary/30 bg-primary-soft/40 p-8 text-center sm:p-10">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
          Quote Request Received!
        </h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-foreground">{formData.name}</strong>. Nadir Nichols will review your itinerary and reply with your flat-rate quote shortly.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="tel:+12674088229"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:scale-105 transition-transform"
          >
            <Phone className="h-4 w-4" /> Need Faster Confirmation? Call (267) 408-8229
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name & Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            required
            name="name"
            placeholder="e.g. John Doe"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            name="phone"
            placeholder="(267) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>

      {/* Email & Service */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
            Email Address *
          </label>
          <input
            type="email"
            required
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
            Service Required *
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          >
            <option value="Airport Round Trip">Airport Round Trip</option>
            <option value="Weddings & Celebrations">Weddings &amp; Celebrations</option>
            <option value="Stadium & Concerts">Stadium &amp; Concerts</option>
            <option value="Events & Night Clubs">Events &amp; Night Clubs</option>
            <option value="Funerals & Memorials">Funerals &amp; Memorials</option>
            <option value="Cargo & High-Value Delivery">Cargo &amp; High-Value Delivery</option>
            <option value="Long-Distance & Interstate">Long-Distance &amp; Interstate Charter</option>
            <option value="Custom Hourly Charter">Custom Hourly Charter</option>
          </select>
        </div>
      </div>

      {/* Date & Time */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
            Date of Service *
          </label>
          <input
            type="date"
            required
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
            Estimated Pickup Time *
          </label>
          <input
            type="time"
            required
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>

      {/* Pickup & Destination */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
            Pickup Address / City *
          </label>
          <input
            type="text"
            required
            name="pickup"
            placeholder="e.g. Center City, Philadelphia, PA"
            value={formData.pickup}
            onChange={handleChange}
            className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
            Drop-off Destination *
          </label>
          <input
            type="text"
            required
            name="destination"
            placeholder="e.g. PHL Airport Terminal A"
            value={formData.destination}
            onChange={handleChange}
            className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>

      {/* Passengers count */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
          Estimated Passenger Headcount
        </label>
        <select
          name="passengers"
          value={formData.passengers}
          onChange={handleChange}
          className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        >
          <option value="1-4">1 – 4 Passengers</option>
          <option value="5-8">5 – 8 Passengers</option>
          <option value="9-12">9 – 12 Passengers</option>
          <option value="13-14">13 – 14 Passengers (Full Sprinter)</option>
          <option value="Cargo Only">Cargo / Freight Only (No Passengers)</option>
        </select>
      </div>

      {/* Additional Notes */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
          Additional Itinerary Details / Special Notes
        </label>
        <textarea
          rows={3}
          name="notes"
          placeholder="Flight number, multi-stop details, luggage requirements, or special timing..."
          value={formData.notes}
          onChange={handleChange}
          className="w-full rounded-2xl border border-border bg-background p-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-primary py-4 text-sm font-semibold text-primary-foreground shadow-lift transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
      >
        <Send className="h-4 w-4" /> Request Flat Quote
      </button>

      <p className="text-center text-xs text-muted-foreground">
        🔒 100% Privacy guaranteed. We never sell your info or spam your phone.
      </p>
    </form>
  );
}
