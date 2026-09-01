import Link from "next/link";
import {
  Plane,
  HeartHandshake,
  Flower2,
  Music4,
  PartyPopper,
  Package,
  ArrowRight,
  Phone,
  Check,
  Clock,
  MapPin,
  Users,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  CalendarCheck,
  Luggage,
} from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Accordion } from "@/components/Accordion";

export const metadata = {
  title: "Services | Airport, Wedding, Event & Cargo Sprinter Travel | Black Car Service 360",
  description:
    "Every Black Car Service 360 service in one place: airport round trips, weddings, funerals, stadium and concert runs, night clubs, cargo delivery and long-distance charters.",
  openGraph: {
    title: "Black Car Service 360 — Our Luxury Sprinter Services",
    description:
      "Sprinter group travel for airports, weddings, funerals, concerts, clubs and cargo. Flat rates, 24/7, local and long distance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const catalog = [
  {
    id: "airport",
    icon: Plane,
    badge: "Most Popular",
    title: "Airport Round Trips",
    image: "/service-airport.jpg",
    text: "Door-to-terminal and back with live flight tracking so a delayed flight never costs you your ride or leaves your group stranded.",
    points: [
      "Real-time flight tracking & delay buffer",
      "Spacious rear luggage bay for the whole group",
      "Early-morning & red-eye departures 24/7",
      "Curbside greeting with luggage assistance",
    ],
  },
  {
    id: "weddings",
    icon: HeartHandshake,
    badge: "Special Occasion",
    title: "Weddings & Celebrations",
    image: "/service-wedding.jpg",
    text: "Bridal party, immediate family, and guest shuttles that keep your entire wedding itinerary running precisely on time.",
    points: [
      "Multi-stop venue & photo session timelines",
      "Continuous venue-to-hotel guest shuttles",
      "Pristine, photo-ready black exterior",
      "Courteous suited chauffeurs for VIP comfort",
    ],
  },
  {
    id: "concerts",
    icon: Music4,
    badge: "Zero Parking Stress",
    title: "Stadium & Concerts",
    image: "/service-events.jpg",
    text: "Skip the parking lot nightmare and surge pricing chaos — we drop you right at the entrance gate and wait for you after the encore.",
    points: [
      "VIP stadium gate drop-off & pickup",
      "Tailgate friendly with premium Bluetooth audio",
      "Zero post-event surge pricing multipliers",
      "Everyone arrives together and returns safe",
    ],
  },
  {
    id: "nightlife",
    icon: PartyPopper,
    badge: "Night Out VIP",
    title: "Events & Night Clubs",
    image: "/nightclub.jpg",
    text: "One safe, luxury ride for the entire night — from five-star dinner reservations to the late-night club scene and safely back home.",
    points: [
      "Custom hourly and all-night charters",
      "Dedicated chauffeur on standby all evening",
      "Climate-controlled leather lounge interior",
      "Safe, reliable 24/7 return transportation",
    ],
  },
  {
    id: "funerals",
    icon: Flower2,
    badge: "Dignified Care",
    title: "Funerals & Memorials",
    image: "/funeral.jpg",
    text: "Quiet, respectful family transportation handled with utmost discretion, sensitivity, and punctual coordination.",
    points: [
      "Procession timing & route coordination",
      "Discreet, courteous professional chauffeurs",
      "Family-first comfort with zero rush",
      "Flexible multi-location stops",
    ],
  },
  {
    id: "cargo",
    icon: Package,
    badge: "Secure Freight",
    title: "Cargo & High-Value Delivery",
    image: "/cargo.jpg",
    text: "High-capacity van freight for local same-day urgent deliveries and secure long-haul transport across city and state lines.",
    points: [
      "Expedited same-day local delivery runs",
      "Secure long-distance city-to-city transport",
      "Careful white-glove loading and handling",
      "Direct point-to-point chain of custody",
    ],
  },
];

const included = [
  { title: "Flat Upfront Pricing", desc: "100% transparent quote before booking with zero surge or hidden post-trip fees." },
  { title: "Late-Model Mercedes Sprinter", desc: "Executive high-roof luxury van with leather seating and dual climate controls." },
  { title: "Licensed Suited Chauffeur", desc: "Commercially insured, background-checked professional at your service." },
  { title: "Cleaned & Reset Cabin", desc: "Meticulously sanitized, vacuumed, and restocked between every single trip." },
  { title: "Deep Luggage Capacity", desc: "Dedicated rear cargo section for suitcases, golf bags, and event equipment." },
  { title: "24/7 Round-the-Clock Dispatch", desc: "Available 24 hours a day, 7 days a week for scheduled and urgent runs." },
];

const steps = [
  { n: "01", t: "Share the trip", d: "Date, pickup location, destination, and passenger headcount." },
  { n: "02", t: "Lock the quote", d: "A transparent flat rate is confirmed before you commit." },
  { n: "03", t: "We arrive early", d: "Your suited chauffeur arrives on site ahead of scheduled pickup." },
  { n: "04", t: "Ride and relax", d: "One luxury van, one bill, and everyone traveling together." },
];

const faqs = [
  {
    q: "Can I book multiple pickup or drop-off stops in one trip?",
    a: "Yes, absolutely. Weddings, night-out charters, and corporate events often involve multiple stops. Simply specify your stops when requesting a quote and we will tailor the timeline and flat rate accordingly.",
  },
  {
    q: "Do you charge extra for late-night, early morning, or holiday rides?",
    a: "No hidden charges. Your flat rate quote is locked in upfront before booking. We operate 24/7, Monday through Sunday, with no unexpected peak-hour surge fees.",
  },
  {
    q: "How far in advance should I book my service?",
    a: "We recommend booking as early as possible for weddings, concerts, and airport runs. However, we also accommodate urgent, same-day dispatch based on vehicle availability. Call us anytime to check availability.",
  },
  {
    q: "Can you handle both passengers and cargo on the same trip?",
    a: "Yes! Our high-roof Mercedes Sprinters have dedicated deep luggage compartments that accommodate passengers and substantial cargo simultaneously.",
  },
  {
    q: "What is your coverage area for local and long-distance charters?",
    a: "We maintain an everyday 50-mile local dispatch radius, and we also provide city-to-city charters, out-of-state travel, and multi-day tours across the entire East Coast region.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background flex flex-col">
      <Nav />

      {/* 1. Improved Luxury Hero Section */}
      <section className="relative px-3 pt-3 sm:px-5 sm:pt-5 w-full">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink sm:rounded-[2.5rem]">
          {/* Background image & gradient overlays */}
          <img
            src="/services-hero.jpg"
            alt="Fleet of black Mercedes Sprinter luxury vans"
            width={1920}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/95 via-ink/75 to-ink/95" />
          
          {/* Decorative ambient glowing lights */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/15 blur-[120px] pointer-events-none" />

          <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-36 text-center sm:pb-24 sm:pt-48">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 bg-ink-foreground/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-ink-foreground/90 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-primary" /> Premium Sprinter Services
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.05] text-ink-foreground sm:text-6xl lg:text-7xl">
                Six ways we move
                <br />
                your group in <span className="text-gradient">pure style.</span>
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mx-auto mt-6 max-w-2xl text-base text-ink-foreground/80 sm:text-lg leading-relaxed">
                Airport transfers, luxury weddings, VIP concerts, dignified funerals, vibrant nightlife, and van freight — all in late-model Mercedes Sprinters with 100% upfront flat-rate pricing.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap justify-center gap-3.5">
                <a
                  href="tel:+12674088229"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-lift transition-transform duration-300 hover:scale-105"
                >
                  <Phone className="h-4 w-4" /> Call (267) 408-8229
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 bg-ink-foreground/5 px-6 py-4 text-sm font-semibold text-ink-foreground backdrop-blur-md transition-colors hover:bg-ink-foreground/15"
                >
                  About our standards <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            {/* Quick Feature Metric Cards */}
            <Reveal delay={380}>
              <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { icon: Clock, t: "24/7 Dispatch", d: "Always Available" },
                  { icon: MapPin, t: "50 Mi + Long Distance", d: "Local & Regional" },
                  { icon: Users, t: "Up to 14 Passengers", d: "One Single Van" },
                  { icon: ShieldCheck, t: "Flat-Rate Quotes", d: "Zero Surge Pricing" },
                ].map((s) => (
                  <div
                    key={s.t}
                    className="flex flex-col items-center justify-center rounded-2xl border border-ink-foreground/15 bg-ink/65 p-4 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5"
                  >
                    <s.icon className="h-5 w-5 text-primary mb-1.5" />
                    <span className="font-display text-sm font-semibold text-ink-foreground">{s.t}</span>
                    <span className="text-[0.7rem] text-ink-foreground/60 tracking-wider uppercase mt-0.5">{s.d}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Quick Interactive Jump Navigation Pills */}
            <Reveal delay={450}>
              <div className="mt-10 pt-8 border-t border-ink-foreground/10">
                <p className="text-xs uppercase tracking-[0.2em] text-ink-foreground/60 font-medium mb-3">
                  Jump to specific service:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {[
                    { label: "Airport", href: "#airport" },
                    { label: "Weddings", href: "#weddings" },
                    { label: "Concerts & Sports", href: "#concerts" },
                    { label: "Events & Nightlife", href: "#nightlife" },
                    { label: "Funerals", href: "#funerals" },
                    { label: "Cargo Delivery", href: "#cargo" },
                  ].map((btn) => (
                    <a
                      key={btn.label}
                      href={btn.href}
                      className="rounded-full border border-ink-foreground/20 bg-ink-foreground/5 px-4 py-1.5 text-xs font-medium text-ink-foreground/90 transition-all hover:bg-primary hover:border-primary hover:text-primary-foreground"
                    >
                      {btn.label} ↓
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Alternating Service Catalog */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 w-full">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Complete Service Catalog
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
            Tailored solutions for every journey
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            Every trip is handled with professional chauffeur care, guaranteed punctuality, and pristine Mercedes Sprinter comfort.
          </p>
        </div>

        <div className="space-y-8">
          {catalog.map((s, i) => (
            <div key={s.id} id={s.id} className="scroll-mt-28">
              <Reveal variant={i % 2 === 0 ? "left" : "right"}>
                <article
                  className={`group grid overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition-all duration-500 hover:shadow-lift lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                  }`}
                >
                  <figure className="relative min-h-[300px] lg:min-h-[420px] bg-muted overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/80 border border-white/15 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md shadow-md">
                        <Sparkles className="h-3 w-3 text-primary" /> {s.badge}
                      </span>
                    </div>
                  </figure>
                  <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-14">
                    <div>
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors duration-500 group-hover:bg-gradient-primary group-hover:text-primary-foreground shadow-sm">
                        <s.icon className="h-6 w-6" />
                      </span>
                      <h3 className="mt-5 font-display text-2xl font-semibold sm:text-3xl">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {s.text}
                      </p>
                      <ul className="mt-6 space-y-2.5">
                        {s.points.map((p) => (
                          <li key={p} className="flex items-center gap-3 text-sm font-medium text-foreground">
                            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                              <Check className="h-3.5 w-3.5" />
                            </span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="tel:+12674088229"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 hover:scale-105"
                      >
                        <Phone className="h-4 w-4" /> Book (267) 408-8229
                      </a>
                      <a
                        href="mailto:360mediaent@gmail.com"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform hover:translate-x-1"
                      >
                        Request Quote <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* 3. What's Included */}
      <section className="border-y border-border bg-card w-full">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal variant="left">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Standard On Every Ride
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl leading-tight">
              No hidden tiers, no upsells — just complete VIP service
            </h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              Every charter includes our highest standard of care, commercial insurance, pristine vehicle detailing, and a suited lead chauffeur.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {included.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-background p-4.5 shadow-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-primary text-primary-foreground">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <h3 className="font-display font-semibold text-foreground text-sm sm:text-base">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed pl-9.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          
          <Reveal variant="right" delay={140}>
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-lift border border-border bg-ink">
              <img
                src="/interior.jpg"
                alt="Sprinter cabin with executive leather seating"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-ink-foreground">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Executive Fleet</span>
                <p className="mt-1 font-display text-lg font-semibold">Custom Mercedes Sprinter High-Roof Cabin</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Booking Steps */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 w-full">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            How Booking Works
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">
            Four simple steps to your ride
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            No complex apps or surge pricing calculators. Direct, fast confirmation.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                <span className="font-display text-5xl font-semibold text-primary-soft transition-colors duration-500 group-hover:text-primary select-none">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-primary transition-all duration-700 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. Coverage Band */}
      <section className="px-3 sm:px-5 w-full">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink sm:rounded-[2.5rem] shadow-lift">
          <img
            src="/service-events.jpg"
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={900}
            height={1100}
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="relative grid max-w-6xl gap-8 px-6 py-16 sm:px-12 sm:py-24 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Local &amp; Long Distance
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink-foreground sm:text-5xl">
                Fifty miles out, or five states over.
              </h2>
              <p className="mt-4 max-w-lg text-ink-foreground/75 text-sm sm:text-base leading-relaxed">
                Our local dispatch radius covers everyday airport and event trips, while our long-distance charters keep the same luxury Sprinter and same dedicated chauffeur with your group the entire journey.
              </p>
            </Reveal>
            <Reveal variant="right" delay={140}>
              <div className="rounded-[2rem] border border-ink-foreground/15 bg-ink/75 p-8 backdrop-blur-xl shadow-soft">
                <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
                  24/7 Live Dispatch Line
                </p>
                <a
                  href="tel:+12674088229"
                  className="mt-3 block font-display text-3xl font-semibold text-ink-foreground sm:text-4xl hover:underline"
                >
                  (267) 408-8229
                </a>
                <a
                  href="mailto:360mediaent@gmail.com"
                  className="mt-2 block break-all text-sm text-ink-foreground/75 transition-colors hover:text-primary"
                >
                  360mediaent@gmail.com
                </a>
                <div className="mt-6 pt-5 border-t border-ink-foreground/15 flex items-center gap-2 text-xs text-ink-foreground/60">
                  <Clock className="h-4 w-4 text-primary" /> Available Monday through Sunday, 24 Hours
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Service FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28 w-full">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            <HelpCircle className="h-3.5 w-3.5" /> Service Questions
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
            Everything you need to know before you book
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10">
            <Accordion items={faqs} />
          </div>
        </Reveal>
      </section>

      {/* 7. Bottom CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 w-full">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-primary px-6 py-14 text-center text-primary-foreground shadow-lift sm:px-12 sm:py-20">
            <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-primary-foreground/10 pointer-events-none" />
            <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-primary-foreground/10 pointer-events-none" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold sm:text-5xl">
                Tell us your destination. We'll handle the rest.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-primary-foreground/90 text-sm sm:text-base leading-relaxed">
                Call now with your date, pickup point, and headcount for a fast flat quote in minutes.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3.5">
                <a
                  href="tel:+12674088229"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-ink-foreground shadow-soft transition-transform duration-300 hover:scale-105"
                >
                  <Phone className="h-4 w-4" /> (267) 408-8229
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-7 py-4 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
