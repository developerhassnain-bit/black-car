import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Mail,
  Clock,
  MapPin,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Users,
  Compass,
  Quote,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Zap,
  Luggage,
  Award,
} from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Accordion } from "@/components/Accordion";

export const metadata = {
  title: "About Black Car Service 360 | Our Story & Standards",
  description:
    "Meet Nadir Nichols and the team behind Black Car Service 360 — a Sprinter-only group travel company built on punctuality, flat pricing and 24/7 care.",
  openGraph: {
    title: "About Black Car Service 360 | Our Story & Standards",
    description:
      "Our story, our standards and the people who keep your group moving — 24/7 Sprinter travel, local and long distance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const values = [
  {
    icon: Clock,
    title: "Punctual, always",
    text: "We arrive before you need us. Flight delayed? We wait, no extra drama.",
  },
  {
    icon: HeartHandshake,
    title: "Honest pricing",
    text: "A flat quote before you book. No surge, no hidden add-ons at drop-off.",
  },
  {
    icon: ShieldCheck,
    title: "Safety first",
    text: "Serviced, insured Sprinters and licensed chauffeurs on every single run.",
  },
  {
    icon: Sparkles,
    title: "Detail obsessed",
    text: "The van is cleaned and reset between every trip — inside and out.",
  },
];

const timeline = [
  {
    year: "The idea",
    title: "One van, one promise",
    text: "Nadir started with a single Sprinter and a simple belief: groups shouldn't have to split into four cars just to arrive together.",
  },
  {
    year: "Growing",
    title: "Word of mouth",
    text: "Weddings, airport runs and game-day charters turned first-time riders into regulars across the region.",
  },
  {
    year: "Today",
    title: "Round-the-clock service",
    text: "Monday to Sunday, 24 hours a day, covering a 50-mile local radius plus long-distance travel and cargo delivery.",
  },
];

const stats = [
  { k: "24/7", v: "Always dispatching" },
  { k: "50 mi", v: "Local service radius" },
  { k: "100%", v: "Flat-rate quotes" },
  { k: "1 van", v: "For the whole group" },
];

const aboutFaqs = [
  {
    q: "How many passengers and luggage items can the Sprinter accommodate?",
    a: "Our late-model Mercedes Sprinters comfortably seat up to 14 adult passengers with dedicated high-capacity rear luggage space. Whether you have bulky airport suitcases, golf bags, or wedding equipment, everything fits in one vehicle.",
  },
  {
    q: "How does flat-rate pricing work and are there any hidden fees?",
    a: "We believe in complete transparency. When you contact us with your date, pickup, destination, and headcount, we provide an all-inclusive flat rate quote. That quote covers the entire trip — no surge pricing, no toll surprises, and no added drop-off charges.",
  },
  {
    q: "Do you service long-distance and out-of-state trips?",
    a: "Yes! In addition to our everyday 50-mile local dispatch radius, we frequently handle long-distance trips, city-to-city corporate travel, sporting event charters, and out-of-state destinations across the region.",
  },
  {
    q: "What happens if our incoming flight is delayed or rescheduled?",
    a: "We actively monitor live flight status for all scheduled airport pickups. If your flight is delayed or lands early, your chauffeur automatically adjusts the schedule — without charging unnecessary wait fees or leaving you stranded.",
  },
  {
    q: "How far in advance should I reserve a Sprinter?",
    a: "We recommend booking as early as possible to secure your desired time slot, especially for weddings, concerts, and weekend airport runs. However, we operate 24/7 and also accommodate urgent and same-day dispatch based on vehicle availability.",
  },
  {
    q: "Can I book for corporate events, funerals, or specialized cargo delivery?",
    a: "Yes. Our fleet is equipped for executive corporate charters, dignified funeral family transportation, concert & nightclub VIP shuttles, as well as expedited high-value cargo delivery.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background flex flex-col">
      <Nav />

      {/* 1. Hero — split editorial */}
      <section className="relative px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink sm:rounded-[2.5rem]">
          <img
            src="/about-hero.jpg"
            alt="Black Mercedes Sprinter under a glass canopy at sunrise"
            width={1920}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/65 to-ink/95" />

          <div className="relative mx-auto grid max-w-6xl gap-10 px-6 pb-14 pt-36 sm:px-10 sm:pb-20 sm:pt-44 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 bg-ink-foreground/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-ink-foreground/85 backdrop-blur">
                  About us
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.05] text-ink-foreground sm:text-6xl lg:text-7xl">
                  We move groups
                  <br />
                  like they're <span className="text-gradient">family.</span>
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-6 max-w-xl text-base text-ink-foreground/75 sm:text-lg leading-relaxed">
                  Black Car Service 360 is an owner-operated Sprinter company built around one
                  question: how do we get everyone there together, on time, without overpaying?
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/#services"
                    className="group inline-flex items-center gap-3 rounded-full bg-gradient-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-lift transition-transform duration-300 hover:scale-105"
                  >
                    Explore our services
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <a
                    href="tel:+12674088229"
                    className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 bg-ink-foreground/5 px-6 py-4 text-sm font-semibold text-ink-foreground backdrop-blur-md transition-colors hover:bg-ink-foreground/15"
                  >
                    <Phone className="h-4 w-4 text-primary" /> (267) 408-8229
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={380} variant="right">
              <div className="grid grid-cols-2 gap-3.5">
                {stats.map((s) => (
                  <div
                    key={s.k}
                    className="rounded-3xl border border-ink-foreground/15 bg-ink/65 p-6 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1 hover:border-primary/50 shadow-soft"
                  >
                    <p className="font-display text-3xl font-semibold text-ink-foreground sm:text-4xl">
                      {s.k}
                    </p>
                    <p className="mt-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-ink-foreground/70">
                      {s.v}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Story */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 w-full">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal variant="left">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Our story
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Built on one van and a lot of early mornings
            </h2>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed">
              From our first airport run to hundreds of happy wedding parties, sports fans, and corporate travelers — our mission has remained unchanged: luxury group travel with warmth, integrity, and extreme punctuality.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm font-medium text-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
              <span>Licensed, insured &amp; commercially certified</span>
            </div>
          </Reveal>
          <div className="space-y-4">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 130} variant="right">
                <div className="group grid gap-4 rounded-3xl border border-border bg-card p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:grid-cols-[140px_minmax(0,1fr)]">
                  <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    {t.year}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-semibold">{t.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Owner spotlight */}
      <section className="px-3 sm:px-5 w-full">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft sm:rounded-[2.5rem]">
          <div className="grid lg:grid-cols-2">
            <Reveal variant="left">
              <div className="relative h-full min-h-[380px] bg-muted">
                <img
                  src="/owner.jpg"
                  alt="Nadir Nichols, owner of Black Car Service 360"
                  loading="lazy"
                  width={1000}
                  height={1200}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal variant="right" delay={140}>
              <div className="flex h-full flex-col justify-center p-8 sm:p-12 lg:p-14">
                <Quote className="h-10 w-10 text-primary" />
                <p className="mt-6 font-display text-2xl font-semibold leading-snug sm:text-3xl">
                  "Every ride is somebody's wedding day, somebody's flight home, somebody's last
                  goodbye. We treat it that way."
                </p>
                <div className="mt-8 border-t border-border pt-6">
                  <p className="font-display text-xl font-semibold">Nadir Nichols</p>
                  <p className="text-sm text-muted-foreground">Owner &amp; Lead Chauffeur</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="mailto:360mediaent@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <Mail className="h-4 w-4 text-primary" /> 360mediaent@gmail.com
                  </a>
                  <a
                    href="tel:+12674088229"
                    className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Phone className="h-4 w-4" /> (267) 408-8229
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Values */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 w-full">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            What we stand on
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">
            Four standards we never bend
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 110}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                <span className="absolute -right-6 -top-6 font-display text-7xl font-semibold text-primary-soft transition-transform duration-700 group-hover:scale-125 select-none pointer-events-none">
                  0{i + 1}
                </span>
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-sm">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="relative mt-5 font-display text-lg font-semibold">{v.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. The 360 Difference — Modern Dual Battle Deck & Bento Highlights */}
      <section className="border-t border-border bg-gradient-to-b from-card via-background to-secondary/30 py-20 sm:py-28 w-full">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                <Award className="h-3.5 w-3.5" /> The 360 Difference
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">
                Why groups choose us over <span className="text-gradient">4 separate cabs</span>
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                When you're heading to the airport, a wedding, or a stadium concert, split rideshares mean staggered arrivals, lost luggage, surge pricing, and endless phone calls. With Black Car Service 360, your entire group travels together in first-class comfort.
              </p>
            </Reveal>
          </div>

          {/* 3 Core Highlight Cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Keep Everyone Together",
                text: "Zero coordination hassle — everybody departs, travels, and arrives simultaneously.",
              },
              {
                icon: Zap,
                title: "Cost-Effective Group Value",
                text: "One flat quote is almost always cheaper than 3 or 4 surge-priced rideshares.",
              },
              {
                icon: Luggage,
                title: "Massive Luggage Capacity",
                text: "No luggage crammed between knees — dedicated cargo zone for all bags & gear.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="group h-full rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Side-by-Side Dual Comparison Battle Deck */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            
            {/* 1. Standard Cabs / Rideshares (Pain points) */}
            <Reveal variant="left" delay={120}>
              <div className="relative flex h-full flex-col justify-between rounded-3xl border border-border bg-card/70 p-7 sm:p-9 shadow-sm">
                <div>
                  <div className="flex items-center justify-between border-b border-border pb-5">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Standard Option
                      </span>
                      <h3 className="mt-1 font-display text-2xl font-semibold text-foreground">
                        Multiple Cabs / Rideshares
                      </h3>
                    </div>
                    <span className="rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
                      High Stress
                    </span>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {[
                      {
                        title: "Whole Group Split Up",
                        desc: "Requires booking 3–4 separate cars with mismatched arrival times.",
                      },
                      {
                        title: "Unpredictable Surge Pricing",
                        desc: "Subject to random peak multipliers, high tolls, and cancellation charges.",
                      },
                      {
                        title: "Inconsistent Chauffeur & Vehicle",
                        desc: "Random gig drivers with unpredictable driving habits and car conditions.",
                      },
                      {
                        title: "Strict 5-Minute Airport Timer",
                        desc: "Drivers leave after 5 minutes; flight delay penalties apply immediately.",
                      },
                      {
                        title: "No Cleaning Between Passengers",
                        desc: "Back-to-back passenger pickups with zero cabin disinfection or reset.",
                      },
                    ].map((row, idx) => (
                      <li key={idx} className="flex items-start gap-3.5">
                        <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-destructive/10 text-destructive">
                          <XCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{row.title}</p>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{row.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 rounded-2xl bg-muted/60 p-4 text-center text-xs text-muted-foreground">
                  Result: Stressful coordination, extra cost, and delayed arrivals.
                </div>
              </div>
            </Reveal>

            {/* 2. Black Car Service 360 (VIP Solution) */}
            <Reveal variant="right" delay={180}>
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border-2 border-primary/40 bg-ink p-7 text-ink-foreground shadow-lift sm:p-9">
                {/* Subtle luxury glow effect */}
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center justify-between border-b border-ink-foreground/15 pb-5">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Recommended Group Choice
                      </span>
                      <h3 className="mt-1 font-display text-2xl font-semibold text-ink-foreground">
                        Black Car Service 360
                      </h3>
                    </div>
                    <span className="rounded-full bg-primary-soft/20 border border-primary/30 px-3 py-1 text-xs font-semibold text-primary">
                      100% Guaranteed
                    </span>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {[
                      {
                        title: "Whole Group in 1 Mercedes Sprinter",
                        desc: "Up to 14 passengers together with room to relax, talk, and arrive as one.",
                      },
                      {
                        title: "100% Flat-Rate Upfront Pricing",
                        desc: "All-inclusive quote before you book. Zero surge, no surprise drop-off fees.",
                      },
                      {
                        title: "Suited & Licensed Chauffeurs",
                        desc: "Commercially insured professional who opens doors and handles all heavy baggage.",
                      },
                      {
                        title: "Free Flight Tracking & Delay Buffer",
                        desc: "We actively track delays and wait patiently without charging penalty drama.",
                      },
                      {
                        title: "Pristine Reset Between Trips",
                        desc: "Deep vacuumed, sanitized, leather conditioned, and temperature pre-set.",
                      },
                    ].map((row, idx) => (
                      <li key={idx} className="flex items-start gap-3.5">
                        <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-ink-foreground">{row.title}</p>
                          <p className="text-xs sm:text-sm text-ink-foreground/75 mt-0.5">{row.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-ink-foreground/15 pt-6">
                  <div>
                    <p className="text-xs font-medium text-ink-foreground/60 uppercase tracking-wider">Ready for the group upgrade?</p>
                    <p className="font-display text-sm font-semibold text-ink-foreground">Get a flat quote in minutes</p>
                  </div>
                  <a
                    href="tel:+12674088229"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 hover:scale-105"
                  >
                    <Phone className="h-4 w-4" /> (267) 408-8229
                  </a>
                </div>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* 6. Craft gallery band */}
      <section className="border-y border-border bg-card w-full">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Behind the ride
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              The details you feel before you notice
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { 
                img: "/detail-care.jpg", 
                t: "Reset between trips", 
                d: "Wiped, vacuumed, restocked." 
              },
              { 
                img: "/interior.jpg", 
                t: "Cabin comfort", 
                d: "Leather seats, climate, real legroom." 
              },
              { 
                img: "/chauffeur.jpg", 
                t: "Chauffeur ready", 
                d: "Suited, licensed, early every time." 
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 130} variant="scale">
                <figure className="group relative h-80 overflow-hidden rounded-3xl bg-ink shadow-soft">
                  <img
                    src={c.img}
                    alt={c.t}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-lg font-semibold text-ink-foreground">
                      {c.t}
                    </h3>
                    <p className="mt-1 text-sm text-ink-foreground/80">{c.d}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NEW SECTION 2: Frequently Asked Questions (FAQ) */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 w-full">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal variant="left">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              <HelpCircle className="h-3.5 w-3.5" /> Have questions?
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Everything you need to know about reserving your luxury Sprinter, our flat-rate pricing structure, flight tracking, and custom itineraries.
            </p>

            {/* Quick contact card */}
            <div className="mt-8 rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-foreground">Need a custom route or quote?</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Have a special request, wedding schedule, or multi-day trip? Speak directly with Nadir Nichols anytime.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+12674088229"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
                >
                  <Phone className="h-4 w-4" /> (267) 408-8229
                </a>
                <a
                  href="mailto:360mediaent@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  <Mail className="h-4 w-4 text-primary" /> Email Us
                </a>
              </div>
            </div>
          </Reveal>

          {/* Accordion list */}
          <Reveal variant="right" delay={120}>
            <Accordion items={aboutFaqs} />
          </Reveal>
        </div>
      </section>

      {/* 8. Coverage */}
      <section className="border-t border-border bg-secondary/20 py-20 sm:py-28 w-full">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal variant="left">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Where we go
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
                Local farming radius, long-distance reach
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Fifty miles of everyday local coverage for airport runs, events and cargo — plus
                city-to-city and out-of-state charters whenever the trip calls for it.
              </p>
              <ul className="mt-8 space-y-3.5">
                {[
                  { icon: MapPin, t: "50-mile local service radius" },
                  { icon: Compass, t: "Long-distance & out-of-state travel" },
                  { icon: Users, t: "Group charters of every size" },
                  { icon: Clock, t: "Monday to Sunday, 24 hours" },
                ].map((r) => (
                  <li key={r.t} className="flex items-center gap-3 text-sm font-medium">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                      <r.icon className="h-4 w-4" />
                    </span>
                    {r.t}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="right" delay={140}>
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-primary p-8 text-primary-foreground shadow-lift sm:p-12">
                <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-primary-foreground/20 pointer-events-none" />
                <div className="absolute -bottom-16 -left-10 h-64 w-64 rounded-full border border-primary-foreground/15 pointer-events-none" />
                <div className="relative">
                  <p className="font-display text-sm uppercase tracking-[0.25em] text-primary-foreground/80 font-medium">
                    Dispatch line
                  </p>
                  <a
                    href="tel:+12674088229"
                    className="mt-4 block font-display text-3xl font-semibold sm:text-5xl hover:underline"
                  >
                    (267) 408-8229
                  </a>
                  <p className="mt-4 max-w-sm text-primary-foreground/90 text-sm leading-relaxed">
                    Call any hour with your date, pickup point and headcount — you'll have a flat
                    quote in minutes.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 w-full">
        <Reveal variant="scale">
          <div className="grid gap-6 rounded-[2rem] bg-ink p-8 text-ink-foreground shadow-lift sm:p-14 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Ready when your group is.
              </h2>
              <p className="mt-3 max-w-lg text-ink-foreground/75 text-sm sm:text-base leading-relaxed">
                See everything we cover — airports, weddings, funerals, concerts, night clubs and
                cargo delivery.
              </p>
            </div>
            <Link
              href="/#services"
              className="group inline-flex items-center gap-3 self-start rounded-full bg-gradient-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 hover:scale-105 lg:self-auto"
            >
              View services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
