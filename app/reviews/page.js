import Link from "next/link";
import {
  Star,
  ShieldCheck,
  Sparkles,
  Phone,
  ArrowRight,
  CheckCircle2,
  Users,
  Clock,
  HeartHandshake,
  Award,
  Quote,
  MessageSquareHeart,
} from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ReviewsExplorer } from "./ReviewsExplorer";

export const metadata = {
  title: "Client Reviews & Stories | 5.0 Star Rated | Black Car Service 360",
  description:
    "Read real, verified reviews from wedding parties, airport travelers, concert-goers, and corporate executives who trust Black Car Service 360 for luxury Sprinter travel.",
  openGraph: {
    title: "Black Car Service 360 — 5.0 Star Client Reviews & Stories",
    description:
      "100% on-time arrivals, flat-rate pricing, and spotless Mercedes Sprinter vans. Read verified rider experiences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background flex flex-col">
      <Nav />

      {/* 1. High-Impact Social Proof Hero */}
      <section className="relative px-3 pt-3 sm:px-5 sm:pt-5 w-full">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink sm:rounded-[2.5rem]">
          {/* Background image & gradient */}
          <img
            src="/band-highway.jpg"
            alt="Sprinter traveling smoothly on the road"
            width={1920}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/95 via-ink/80 to-ink/95" />

          {/* Ambient glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/20 blur-[130px] pointer-events-none" />

          <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-36 text-center sm:pb-24 sm:pt-48">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 bg-ink-foreground/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink-foreground/90 backdrop-blur-md">
                <Star className="h-3.5 w-3.5 text-primary fill-primary" /> 5.0 Average Rating Across 100+ Rides
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.05] text-ink-foreground sm:text-6xl lg:text-7xl">
                Real stories from
                <br />
                groups that <span className="text-gradient">rely on us.</span>
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mx-auto mt-6 max-w-2xl text-base text-ink-foreground/80 sm:text-lg leading-relaxed">
                From high-stress wedding timelines and delayed red-eye flights to sold-out stadium concerts and out-of-state corporate meetings — discover why clients trust Nadir Nichols and Black Car Service 360 every single time.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap justify-center gap-3.5">
                <a
                  href="tel:+12674088229"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-lift transition-transform duration-300 hover:scale-105"
                >
                  <Phone className="h-4 w-4" /> Book Your 5-Star Ride
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 bg-ink-foreground/5 px-6 py-4 text-sm font-semibold text-ink-foreground backdrop-blur-md transition-colors hover:bg-ink-foreground/15"
                >
                  Request Online Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            {/* Scorecard Metric Badges */}
            <Reveal delay={380}>
              <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { k: "5.0 ★", v: "Overall Score", sub: "100% Positive Feedback" },
                  { k: "100%", v: "On-Time Arrival", sub: "Never Missed a Flight" },
                  { k: "98%", v: "Repeat & Referral", sub: "Loyal Long-Term Riders" },
                  { k: "500+", v: "Groups Moved", sub: "Safe & Stress-Free" },
                ].map((stat) => (
                  <div
                    key={stat.v}
                    className="flex flex-col items-center justify-center rounded-2xl border border-ink-foreground/15 bg-ink/65 p-5 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5 shadow-sm"
                  >
                    <span className="font-display text-3xl sm:text-4xl font-semibold text-ink-foreground">{stat.k}</span>
                    <span className="text-xs font-semibold text-ink-foreground/90 uppercase tracking-wider mt-1">{stat.v}</span>
                    <span className="text-[0.7rem] text-ink-foreground/60 mt-0.5">{stat.sub}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Featured Deep-Dive Case Studies */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 w-full">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Featured Case Studies
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
            When every minute &amp; detail matters
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            Two real-world examples of how our owner-operated chauffeur care creates unforgettable experiences.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* Spotlight 1: Wedding Day */}
          <Reveal variant="left">
            <div className="group overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-sm transition-all duration-500 hover:shadow-lift flex flex-col justify-between h-full">
              <div className="relative h-64 sm:h-72 overflow-hidden bg-ink">
                <img
                  src="/service-wedding.jpg"
                  alt="Wedding bridal party transportation"
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-primary text-primary-foreground px-3.5 py-1 text-xs font-semibold uppercase tracking-wider shadow-sm">
                    Wedding Case Study
                  </span>
                </div>
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <h3 className="font-display text-xl font-semibold mt-1">
                    "14 Bridal Party Guests Across 4 Tight Photo Stops"
                  </h3>
                </div>
              </div>

              <div className="p-7 sm:p-9 flex flex-col justify-between flex-grow">
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">The Challenge:</strong> Coordinating a large bridal party from a Center City hotel to photo locations at the Art Museum and City Hall, then to the ceremony venue with heavy dresses, zero parking, and weekend traffic.
                  </p>
                  <p>
                    <strong className="text-foreground">The Solution:</strong> Nadir mapped out buffer routes 48 hours prior, arrived 25 minutes early with an ice-cold cabin, assisted with dresses and flowers, and kept the entire timeline running 10 minutes ahead of schedule.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                  <div>
                    <p className="font-display font-semibold text-foreground">Elena &amp; Marcus Sterling</p>
                    <p className="text-xs text-muted-foreground">Bride &amp; Groom • Philadelphia, PA</p>
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase">August 2026</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Spotlight 2: Delayed Red-Eye Airport Flight */}
          <Reveal variant="right" delay={140}>
            <div className="group overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-sm transition-all duration-500 hover:shadow-lift flex flex-col justify-between h-full">
              <div className="relative h-64 sm:h-72 overflow-hidden bg-ink">
                <img
                  src="/service-airport.jpg"
                  alt="Airport arrival late night"
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-primary text-primary-foreground px-3.5 py-1 text-xs font-semibold uppercase tracking-wider shadow-sm">
                    Airport Case Study
                  </span>
                </div>
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <h3 className="font-display text-xl font-semibold mt-1">
                    "2-Hour Flight Delay Landed at 1:45 AM"
                  </h3>
                </div>
              </div>

              <div className="p-7 sm:p-9 flex flex-col justify-between flex-grow">
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">The Challenge:</strong> An international family of six with 8 large bags faced unexpected weather delays, pushing their PHL landing from 11:45 PM to nearly 2:00 AM on a stormy weeknight.
                  </p>
                  <p>
                    <strong className="text-foreground">The Solution:</strong> Live automated radar flight tracking alerted Nadir in real-time. Instead of cancelling or charging steep wait fees, he greeted them curbside with warm cabin climate and cold drinks, loading every suitcase smoothly.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                  <div>
                    <p className="font-display font-semibold text-foreground">David Chen &amp; Family</p>
                    <p className="text-xs text-muted-foreground">International Travelers • Cherry Hill, NJ</p>
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase">July 2026</span>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 3. Interactive Reviews Explorer (Filter, Search & Detailed Cards) */}
      <section className="border-t border-border bg-secondary/30 py-20 sm:py-28 w-full">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              <MessageSquareHeart className="h-3.5 w-3.5" /> Verified Rider Testimonials
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">
              Explore reviews by service &amp; trip type
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              Filter through authentic stories from travelers across the Philadelphia tri-state area and beyond.
            </p>
          </div>

          <ReviewsExplorer />
        </div>
      </section>

      {/* 4. The 4 Trust Standards Behind Our 5-Star Reviews */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 w-full">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Our Commitment
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">
            Why our reviews stay 5 stars
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            We don't leave customer satisfaction to chance. Four ironclad promises on every trip.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Clock,
              title: "Early Arrival Guarantee",
              desc: "Chauffeur on site 15 minutes before your scheduled pickup. Zero waiting anxiety.",
            },
            {
              icon: ShieldCheck,
              title: "100% Flat-Rate Honored",
              desc: "No surge pricing, no meter inflation, and no surprise toll add-ons at drop-off.",
            },
            {
              icon: Sparkles,
              title: "Hospitality Cleanliness",
              desc: "Deep vacuumed, disinfected, leather-treated, and sanitized before every trip.",
            },
            {
              icon: HeartHandshake,
              title: "Owner-Operated Care",
              desc: "Nadir Nichols personally oversees dispatching and service execution.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-gradient-primary group-hover:text-primary-foreground shadow-sm">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-primary transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. Bottom Reservation CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 w-full">
        <Reveal variant="scale">
          <div className="grid gap-6 rounded-[2rem] bg-ink p-8 text-ink-foreground shadow-lift sm:p-14 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Experience The Difference
              </span>
              <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
                Ready to make your next group trip seamless?
              </h2>
              <p className="mt-3 max-w-lg text-ink-foreground/75 text-sm sm:text-base leading-relaxed">
                Join hundreds of satisfied wedding parties, airport travelers, and corporate teams. Call now for your flat quote.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+12674088229"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 hover:scale-105"
              >
                <Phone className="h-4 w-4" /> (267) 408-8229
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-foreground/25 bg-ink-foreground/10 px-6 py-4 text-sm font-semibold text-ink-foreground backdrop-blur-md transition-colors hover:bg-ink-foreground/20"
              >
                Book Online <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
