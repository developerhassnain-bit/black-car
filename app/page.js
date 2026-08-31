import {
  Plane,
  HeartHandshake,
  Flower2,
  Music4,
  PartyPopper,
  Package,
  Clock,
  ShieldCheck,
  BadgeDollarSign,
  Users,
  MapPin,
  Star,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Accordion } from "@/components/Accordion";

const services = [
  {
    icon: Plane,
    title: "Airport Round Trips",
    text: "On-time pickups and flight-tracked returns for groups of every size.",
    image: "/service-airport.jpg",
  },
  {
    icon: HeartHandshake,
    title: "Weddings",
    text: "Move the whole party in style — bridal, family and guest shuttles.",
    image: "/service-wedding.jpg",
  },
  {
    icon: Music4,
    title: "Stadium & Concerts",
    text: "Door-to-door game day and concert transport with zero parking stress.",
    image: "/service-events.jpg",
  },
];

const moreServices = [
  { icon: Flower2, title: "Funerals", text: "Quiet, respectful family transportation." },
  { icon: PartyPopper, title: "Events & Night Clubs", text: "Safe rides all night, 24/7." },
  { icon: Package, title: "Cargo Delivery", text: "Local and long-distance van freight." },
  { icon: MapPin, title: "Long Distance", text: "City to city, state to state travel." },
];

const features = [
  {
    icon: BadgeDollarSign,
    title: "Affordable Group Travel",
    text: "One van, one flat rate — far cheaper than booking multiple cars for your group.",
  },
  {
    icon: Users,
    title: "Late-Model Sprinter Fleet",
    text: "Spacious Mercedes Sprinters with leather seating, climate control and room for luggage.",
  },
  {
    icon: Clock,
    title: "Open 24/7, Mon–Sun",
    text: "Early flights or 3 AM club runs — we answer and we show up on time.",
  },
];

const steps = [
  { n: "01", title: "Tell us the trip", text: "Call or email your date, pickup and headcount." },
  { n: "02", title: "Get a flat quote", text: "Clear pricing up front. No surge, no surprises." },
  { n: "03", title: "Ride in comfort", text: "Your chauffeur arrives early and handles the rest." },
];

const reviews = [
  {
    quote:
      "Booked the Sprinter for our wedding party of 14. Nadir was early, the van was spotless, and everyone arrived relaxed.",
    name: "Ashley R.",
    city: "Philadelphia, PA",
  },
  {
    quote:
      "Airport round trip for our whole team. Flight was delayed two hours and the driver still waited. Unbeatable value.",
    name: "Marcus D.",
    city: "Cherry Hill, NJ",
  },
  {
    quote:
      "Used them for a concert night out and again for a long-distance move. Professional both times, great rates.",
    name: "Tanya W.",
    city: "Wilmington, DE",
  },
];

const faqs = [
  {
    q: "How far do you travel?",
    a: "We cover a 50-mile local radius for everyday trips and also handle long-distance, city-to-city and out-of-state travel on request.",
  },
  {
    q: "How many passengers fit in the Sprinter?",
    a: "Our late-model Mercedes Sprinters comfortably seat large groups with dedicated luggage space, which keeps group travel affordable in a single vehicle.",
  },
  {
    q: "Are you available at night and on weekends?",
    a: "Yes. We operate Monday through Sunday, 24 hours a day — including late-night club runs and pre-dawn airport pickups.",
  },
  {
    q: "Do you deliver cargo as well as passengers?",
    a: "We do. Our vans handle local and long-distance cargo delivery alongside our passenger services.",
  },
  {
    q: "How do I book and pay?",
    a: "Call (267) 408-8229 or email 360mediaent@gmail.com with your date, pickup location and headcount. You'll get a flat quote before you confirm.",
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Nav />

      {/* 1. Hero */}
      <section id="home" className="relative min-h-[92vh] px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="relative min-h-[92vh] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-ink shadow-lift">
          <img
            src="/hero-sprinter.jpg"
            alt="Black late-model Mercedes Sprinter van on a city street at night"
            className="absolute inset-0 h-full w-full object-cover scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/30" />

          <div className="relative flex min-h-[92vh] flex-col justify-end gap-10 px-6 pb-10 pt-32 sm:px-12 sm:pb-14">
            <div className="max-w-3xl">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 bg-ink-foreground/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink-foreground/90 backdrop-blur-md">
                  Group Travel • Local &amp; Long Distance
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-ink-foreground sm:text-6xl lg:text-7xl">
                  Black car travel
                  <br />
                  built for the <span className="text-gradient">whole group</span>
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-5 max-w-xl text-base text-ink-foreground/80 sm:text-lg leading-relaxed">
                  Late-model Mercedes Sprinters, professional chauffeurs and honest flat rates —
                  airports, weddings, events, cargo and every journey unique to you.
                </p>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="tel:+12674088229"
                    className="group inline-flex items-center gap-3 rounded-full bg-gradient-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-lift transition-transform duration-300 hover:scale-105"
                  >
                    Get in touch
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/20 transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </a>
                  <a
                    href="#services"
                    className="rounded-full border border-ink-foreground/25 px-6 py-4 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
                  >
                    View services
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <Reveal delay={420}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs uppercase font-semibold tracking-[0.2em] text-ink-foreground/60">
                    Popular
                  </span>
                  {["Airport Runs", "Weddings", "Concerts", "Cargo"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-ink-foreground/20 bg-ink-foreground/10 px-4 py-1.5 text-xs font-medium text-ink-foreground/90 backdrop-blur-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={520} variant="scale">
                <div className="float-slow w-full max-w-xs rounded-3xl border border-ink-foreground/15 bg-ink/65 p-5 backdrop-blur-xl shadow-lift">
                  <div className="flex items-center gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-ink-foreground/75">
                    Rated by riders for punctuality and clean, comfortable Sprinters.
                  </p>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="font-display text-4xl font-semibold text-ink-foreground">
                      4.9
                    </span>
                    <span className="pb-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/60">
                      rating
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Marquee strip */}
      <section className="mt-6 overflow-hidden border-y border-border bg-card py-5">
        <div className="marquee-track flex gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex gap-10 shrink-0">
              {[
                "24/7 Availability",
                "Mercedes Sprinter Fleet",
                "Flat Rate Pricing",
                "50 Mile Local Radius",
                "Long Distance Travel",
                "Professional Chauffeurs",
              ].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* 3. Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Our Services
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">
            Start your journey today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            One fleet, every occasion. Tell us where the group needs to be and we'll handle the
            route, the timing and the comfort.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 120} variant="up">
              <article className="group relative h-[420px] overflow-hidden rounded-3xl bg-ink shadow-soft">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-sm">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm text-ink-foreground/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                    {s.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {moreServices.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <article className="surface-card group h-full rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary-soft text-primary transition-all duration-500 group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. Why us + interior */}
      <section id="why" className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Reveal variant="left">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Why ride with us
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
                Your journey, made
                <br className="hidden sm:block" /> effortless and affordable
              </h2>
            </Reveal>
            <div className="mt-8 space-y-2">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 120} variant="left">
                  <div className="group flex items-start gap-4 rounded-3xl border border-transparent p-4 transition-all duration-500 hover:border-border hover:bg-card hover:shadow-soft">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary transition-transform duration-500 group-hover:scale-110">
                      <f.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal variant="right" delay={160}>
            <div className="relative overflow-hidden rounded-[2rem] bg-ink shadow-lift group">
              <img
                src="/interior.jpg"
                alt="Luxury Mercedes Sprinter interior with black leather captain seats"
                loading="lazy"
                className="h-full w-full object-cover min-h-[380px] transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-card/90 border border-border p-4 backdrop-blur-xl shadow-soft">
                <p className="font-display text-sm font-semibold text-foreground">Executive Sprinter cabin</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Leather seating, climate control and space for the whole crew plus luggage.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Highway band */}
      <section id="fleet" className="px-3 sm:px-5">
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-ink shadow-lift">
          <img
            src="/band-highway.jpg"
            alt="Black luxury van driving on a highway at dusk"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/25" />
          <div className="relative grid gap-10 px-6 py-16 sm:px-12 sm:py-24 lg:grid-cols-2 lg:items-end">
            <div>
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Local radius • Long distance
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold text-ink-foreground sm:text-5xl">
                  Where comfort meets
                  <br className="hidden sm:block" /> the open road.
                </h2>
                <p className="mt-4 max-w-lg text-ink-foreground/80 leading-relaxed">
                  Fifty miles or five hundred — the same clean Sprinter, the same chauffeur, the
                  same flat rate you agreed to before departure.
                </p>
                <a
                  href="mailto:360mediaent@gmail.com"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105 shadow-lift"
                >
                  Start booking today <ArrowRight className="h-4 w-4" />
                </a>
              </Reveal>
            </div>

            <Reveal variant="right" delay={160}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { k: "24/7", v: "Mon to Sun service" },
                  { k: "50 mi", v: "Local coverage radius" },
                  { k: "Flat", v: "Rates quoted up front" },
                  { k: "Sprinter", v: "Late-model Mercedes fleet" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-3xl border border-ink-foreground/15 bg-ink/50 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 shadow-soft"
                  >
                    <p className="font-display text-2xl font-semibold text-ink-foreground">{s.k}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink-foreground/70">
                      {s.v}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Cargo + chauffeur split */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            More than passengers
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">
            Chauffeured people. Delivered cargo.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_1fr]">
          <Reveal variant="left">
            <div className="group relative h-full min-h-[340px] overflow-hidden rounded-[2rem] bg-ink shadow-soft">
              <img
                src="/cargo.jpg"
                alt="Black Sprinter cargo van being loaded with boxes"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-display text-2xl font-semibold text-ink-foreground">
                  Cargo delivery
                </h3>
                <p className="mt-2 max-w-md text-sm text-ink-foreground/80">
                  Same-day local runs and long-haul van freight, handled with the care we give our
                  passengers.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={140}>
            <div className="grid h-full gap-5">
              <div className="group relative min-h-[220px] overflow-hidden rounded-[2rem] bg-ink shadow-soft">
                <img
                  src="/chauffeur.jpg"
                  alt="Professional chauffeur in a suit beside a black van"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl font-semibold text-ink-foreground">
                    Vetted chauffeurs
                  </h3>
                  <p className="mt-1 text-sm text-ink-foreground/80">
                    Courteous, licensed and always early.
                  </p>
                </div>
              </div>
              <div className="surface-card rounded-[2rem] p-7 transition-all duration-500 hover:shadow-lift">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-xl font-semibold">Safety first, always</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Regularly serviced vehicles, insured trips and live communication from pickup to
                  drop-off.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Process */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              How it works
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              Booking takes three minutes
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 140}>
                <div className="group relative h-full rounded-3xl border border-border bg-background p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="font-display text-5xl font-semibold text-muted-foreground/40 transition-colors duration-500 group-hover:text-primary">
                    {s.n}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Reviews */}
      <section id="reviews" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Rider stories
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">
              Groups that keep coming back
            </h2>
          </div>
          <a
            href="tel:+12674088229"
            className="inline-flex items-center gap-2 self-start rounded-full bg-ink px-5 py-3 text-sm font-semibold text-ink-foreground transition-all duration-300 hover:scale-105 sm:self-auto"
          >
            Book a ride <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 130}>
              <figure className="surface-card h-full rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-foreground/85">
                    "{r.quote}"
                  </blockquote>
                </div>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-display font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.city}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 9. FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal variant="left">
            <div className="relative h-full min-h-[340px] overflow-hidden rounded-[2rem] bg-ink shadow-soft">
              <img
                src="/service-airport.jpg"
                alt="Chauffeur loading luggage into a black Sprinter at the airport"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-display text-2xl font-semibold text-ink-foreground">
                  Need any help? Don't hesitate to reach out.
                </h3>
                <a
                  href="tel:+12674088229"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
                >
                  <Phone className="h-4 w-4" /> (267) 408-8229
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Common questions
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl mb-6">
                Everything you asked
              </h2>
              <Accordion items={faqs} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. Contact CTA */}
      <section id="contact" className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-primary px-6 py-14 text-center sm:px-12 sm:py-20 shadow-lift">
            <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 pointer-events-none" />
            <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-white/10 pointer-events-none" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-primary-foreground sm:text-5xl">
                Ready to move your group in comfort?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90 leading-relaxed font-medium">
                Available Monday to Sunday, 24 hours a day. Tell us the date and headcount and we'll
                send a flat quote.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="tel:+12674088229"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-ink-foreground shadow-lift transition-transform duration-300 hover:scale-105"
                >
                  <Phone className="h-4 w-4 text-primary" /> (267) 408-8229
                </a>
                <a
                  href="mailto:360mediaent@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-6 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/20"
                >
                  <Mail className="h-4 w-4" /> 360mediaent@gmail.com
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
