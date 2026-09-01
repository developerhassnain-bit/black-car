"use client";

import { useState } from "react";
import { Star, CheckCircle2, MapPin, Calendar, Quote, ThumbsUp, Filter, Sparkles, Phone, ArrowRight } from "lucide-react";

const allReviews = [
  {
    id: 1,
    name: "Marcus & Elena Sterling",
    location: "Center City, Philadelphia, PA",
    category: "Weddings",
    rating: 5,
    date: "August 2026",
    trip: "Bridal Party & Family Venue Shuttle (14 Passengers)",
    quote: "Nadir was our wedding day lifesaver. The van was pristine, cold AC, and he was 20 minutes early for every single photo stop.",
    story: "We had 14 people in our bridal party plus dress bags and bouquets. Booking 4 separate Ubers would have been a chaotic nightmare. Nadir showed up in a sharp suit, greeted my parents with genuine warmth, helped everyone with heavy garment bags, and guided us through Center City traffic like a pro. Everyone is still talking about how smooth the ride was.",
    tags: ["14 Passengers", "Multi-Stop Schedule", "Spotless Mercedes", "Suited Chauffeur"],
    verified: true,
  },
  {
    id: 2,
    name: "David Chen",
    location: "Cherry Hill, NJ",
    category: "Airport",
    rating: 5,
    date: "July 2026",
    trip: "Family PHL International Round Trip with 8 Suitcases",
    quote: "Our flight home was delayed by nearly 2 hours. I walked out at 1:45 AM expecting extra penalty fees, but Nadir was already there waiting with cold waters.",
    story: "Travelling with 6 family members and 8 large suitcases usually causes pure airport stress. Nadir tracked our flight from Europe, adjusted his dispatch time automatically, and texted me right when the wheels touched down. The flat quote was 100% honored with zero surge or delay fees. Best car service on the East Coast.",
    tags: ["Flight Tracked", "Delayed 2 Hrs (No Extra Fee)", "8 Large Bags", "24/7 Dispatch"],
    verified: true,
  },
  {
    id: 3,
    name: "Sarah Jenkins & Friends",
    location: "King of Prussia, PA",
    category: "Concerts",
    rating: 5,
    date: "July 2026",
    trip: "Stadium Concert at Lincoln Financial Field (12 Passengers)",
    quote: "Skipping the stadium parking lot traffic was worth every single penny. Dropped at the VIP gate and picked up immediately after the show.",
    story: "Anyone who has ever tried to order an Uber after a 60,000-person stadium concert knows the 3x surge pricing and 90-minute wait times. With Black Car Service 360, we booked one flat rate for the entire group. The Sprinter sound system got the party started on the way in, and Nadir had the van cooled down waiting right at our agreed pickup spot.",
    tags: ["Gate Drop-off", "Bluetooth Surround Sound", "Zero Surge Pricing", "Group Travel"],
    verified: true,
  },
  {
    id: 4,
    name: "Reginald Vance",
    location: "Wilmington, DE",
    category: "Corporate",
    rating: 5,
    date: "June 2026",
    trip: "Executive Team Out-of-State Conference in New York City",
    quote: "Our executives were able to hold a full confidential meeting while traveling on I-95. Fast charging at every row and extreme privacy.",
    story: "We needed our senior leadership team in Manhattan for a 9:00 AM investor meeting. Nadir picked us up in Delaware at 5:30 AM on the dot. The high-roof cabin allowed everyone to move freely, the privacy glass kept screens confidential, and the smooth ride made working on laptops completely effortless.",
    tags: ["Interstate Travel", "WiFi / USB Fast Charging", "Executive Discretion", "Smooth Ride"],
    verified: true,
  },
  {
    id: 5,
    name: "Brianna & The Bachelorette Crew",
    location: "Philadelphia, PA",
    category: "Nightlife",
    rating: 5,
    date: "June 2026",
    trip: "All-Night Bachelorette Party & Dinner Shuttle (11 Guests)",
    quote: "Having one dedicated, trusted driver for the entire night gave us total peace of mind. Nadir made us feel like true VIPs.",
    story: "We booked an all-evening charter from 7 PM to 2 AM across 4 different dinner and lounge stops. Nadir was always on standby, opening doors and making sure everyone was accounted for. Safe, clean, stylish, and far more cost-effective than splitting into multiple ride apps all evening.",
    tags: ["Hourly All-Night Charter", "11 Guests", "Safe Night Out", "VIP Experience"],
    verified: true,
  },
  {
    id: 6,
    name: "Thomas Gallagher",
    location: "Main Line, PA",
    category: "Funerals",
    rating: 5,
    date: "May 2026",
    trip: "Family Funeral & Memorial Service Transportation",
    quote: "Handled our family's most difficult day with dignity, patience, and profound respect.",
    story: "During an emotional time for our family, Nadir took all the transportation burden off our shoulders. He coordinated with the procession schedule seamlessly, never rushed anyone, and treated my elderly grandmother with exceptional gentleness and care. We are deeply grateful.",
    tags: ["Dignified Chauffeur", "Procession Coordination", "Gentle Care", "Family Priority"],
    verified: true,
  },
  {
    id: 7,
    name: "Apex Logistics Group",
    location: "Allentown, PA",
    category: "Cargo",
    rating: 5,
    date: "May 2026",
    trip: "Urgent Same-Day Commercial Equipment Freight Delivery",
    quote: "Delivered our critical high-value broadcast equipment across state lines in under 4 hours with zero damage.",
    story: "We had an emergency equipment transfer for an ongoing production. Black Car Service 360 dispatched within 45 minutes of our phone call. The driver was careful with heavy Pelican cases and maintained constant GPS check-ins until final handoff.",
    tags: ["Same-Day Expedited", "Secure Chain of Custody", "Careful Handling", "Direct Route"],
    verified: true,
  },
  {
    id: 8,
    name: "The Miller Family Reunion",
    location: "Trenton, NJ",
    category: "Airport",
    rating: 5,
    date: "April 2026",
    trip: "JFK International Group Arrival to Pennsylvania (13 Travelers)",
    quote: "One van swallowed 13 people and 16 bags effortlessly. We arrived home relaxed instead of exhausted.",
    story: "After a 14-hour international flight, nobody wanted to coordinate train tickets or 3 separate rideshares from New York to Pennsylvania. Nadir greeted us at JFK, loaded every single bag into the deep cargo bay, and gave us a whisper-quiet ride home.",
    tags: ["JFK Long Distance", "13 Travelers", "16 Bags Fitted", "Flat Rate"],
    verified: true,
  },
];

const categories = [
  { label: "All Stories", value: "All" },
  { label: "Airport Runs", value: "Airport" },
  { label: "Weddings", value: "Weddings" },
  { label: "Concerts & Sports", value: "Concerts" },
  { label: "Nightlife & Events", value: "Nightlife" },
  { label: "Corporate & Long Distance", value: "Corporate" },
  { label: "Funerals & Cargo", value: "Funerals" },
];

export function ReviewsExplorer() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredReviews = allReviews.filter((r) => {
    const matchesCategory =
      activeCategory === "All" ||
      r.category === activeCategory ||
      (activeCategory === "Funerals" && (r.category === "Funerals" || r.category === "Cargo"));

    const matchesSearch =
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.story.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.trip.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.location.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Category Pills & Live Search Bar */}
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between mb-10">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setActiveCategory(c.value)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === c.value
                  ? "bg-primary text-primary-foreground shadow-soft scale-105"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="w-full md:w-72">
          <input
            type="text"
            placeholder="Search reviews by keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full border border-border bg-card px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredReviews.map((r) => (
          <article
            key={r.id}
            className="group relative flex flex-col justify-between rounded-[2rem] border border-border bg-card p-7 sm:p-9 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
          >
            <div>
              {/* Header: Rating & Verified Stamp */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: r.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                  <span className="ml-1.5 font-display text-sm font-semibold text-foreground">
                    5.0
                  </span>
                </div>

                <span className="inline-flex items-center gap-1 rounded-full bg-primary-soft px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-primary">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Verified Trip
                </span>
              </div>

              {/* Trip Label & Date */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                <span className="font-semibold text-primary">{r.trip}</span>
                <span className="flex items-center gap-1 text-[0.75rem]">
                  <Calendar className="h-3 w-3" /> {r.date}
                </span>
              </div>

              {/* Quote Headline */}
              <blockquote className="mt-4 font-display text-lg sm:text-xl font-semibold leading-snug text-foreground">
                "{r.quote}"
              </blockquote>

              {/* Detailed Narrative Story */}
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {r.story}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {r.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-secondary px-2.5 py-1 text-[0.7rem] font-medium text-foreground/80"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Footer */}
            <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
              <div>
                <h4 className="font-display font-semibold text-foreground text-base">
                  {r.name}
                </h4>
                <p className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                  <MapPin className="h-3 w-3 text-primary" /> {r.location}
                </p>
              </div>

              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-primary-soft text-primary font-display font-semibold text-sm">
                {r.name.charAt(0)}
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredReviews.length === 0 && (
        <div className="rounded-3xl border border-border bg-card p-12 text-center my-8">
          <p className="font-display text-lg font-semibold text-foreground">No matching reviews found</p>
          <p className="mt-1 text-sm text-muted-foreground">Try clearing your search query or selecting a different category filter.</p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchTerm("");
            }}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
