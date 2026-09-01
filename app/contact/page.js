import {
  Phone,
  Mail,
  Clock,
  MapPin,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Users,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "./ContactForm";

export const metadata = {
  title: "Contact & Book Online | Black Car Service 360 | 24/7 Sprinter Dispatch",
  description:
    "Get in touch with Black Car Service 360 for guaranteed flat-rate Sprinter quotes. Available 24/7 for airport round trips, weddings, concerts, events, and cargo. Call (267) 408-8229.",
  openGraph: {
    title: "Contact Black Car Service 360 — 24/7 Dispatch Hotline",
    description:
      "Direct quote requests and immediate dispatch for Mercedes Sprinter group travel. Call (267) 408-8229 or request a quote online.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background flex flex-col">
      <Nav />

      {/* 1. Hero */}
      <section className="relative px-3 pt-3 sm:px-5 sm:pt-5 w-full">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink sm:rounded-[2.5rem]">
          <img
            src="/about-hero.jpg"
            alt="Black Car Service 360 Dispatch"
            width={1920}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/95 via-ink/75 to-ink/95" />
          
          <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-36 text-center sm:pb-24 sm:pt-48">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 bg-ink-foreground/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink-foreground/90 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-primary" /> 24/7 Direct Dispatch
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.05] text-ink-foreground sm:text-6xl lg:text-7xl">
                Ready for the ride?
                <br />
                <span className="text-gradient">Let's talk trip details.</span>
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mx-auto mt-6 max-w-xl text-base text-ink-foreground/80 sm:text-lg leading-relaxed">
                Whether you need immediate 24/7 airport dispatch or want to lock a flat quote for an upcoming wedding or corporate charter, we're always available.
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
                <a
                  href="mailto:360mediaent@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 bg-ink-foreground/5 px-6 py-4 text-sm font-semibold text-ink-foreground backdrop-blur-md transition-colors hover:bg-ink-foreground/15"
                >
                  <Mail className="h-4 w-4 text-primary" /> 360mediaent@gmail.com
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid: Interactive Form + VIP Contact Information */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 w-full">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          
          {/* Left Column: Interactive Booking / Quote Request Form */}
          <Reveal variant="left">
            <div className="rounded-[2.5rem] border border-border bg-card p-7 sm:p-10 shadow-soft">
              <div className="border-b border-border pb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Fast Online Quote
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-foreground">
                  Tell us about your trip
                </h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Fill in your itinerary below and we'll reply shortly with an exact, all-inclusive flat rate quote.
                </p>
              </div>

              {/* Client Component Form */}
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          {/* Right Column: Direct Dispatch & Contact Cards */}
          <div className="space-y-6">
            
            {/* VIP Direct Dispatch Card */}
            <Reveal variant="right" delay={120}>
              <div className="overflow-hidden rounded-[2rem] border border-border bg-ink p-7 text-ink-foreground shadow-lift sm:p-9">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs font-semibold text-primary">
                  <Clock className="h-3.5 w-3.5" /> 24 Hours / 7 Days
                </span>
                
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink-foreground">
                  Immediate Dispatch Line
                </h3>
                <p className="mt-2 text-sm text-ink-foreground/75 leading-relaxed">
                  Need a van right now or within 24 hours? Call Nadir Nichols directly on the dispatch line for real-time confirmation.
                </p>

                <div className="mt-6 space-y-4 border-t border-ink-foreground/15 pt-6">
                  <a
                    href="tel:+12674088229"
                    className="flex items-center gap-3.5 rounded-2xl bg-ink-foreground/5 border border-ink-foreground/15 p-4 transition-all hover:bg-ink-foreground/10"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-sm">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-ink-foreground/60 uppercase font-medium">Direct Phone / Text</p>
                      <p className="font-display text-lg font-semibold text-ink-foreground">(267) 408-8229</p>
                    </div>
                  </a>

                  <a
                    href="mailto:360mediaent@gmail.com"
                    className="flex items-center gap-3.5 rounded-2xl bg-ink-foreground/5 border border-ink-foreground/15 p-4 transition-all hover:bg-ink-foreground/10"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary shadow-sm">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-ink-foreground/60 uppercase font-medium">Email Dispatch</p>
                      <p className="font-display text-sm sm:text-base font-semibold text-ink-foreground break-all">360mediaent@gmail.com</p>
                    </div>
                  </a>
                </div>

                <div className="mt-6 rounded-2xl bg-primary-soft/10 border border-primary/20 p-4">
                  <p className="text-xs text-ink-foreground/80 leading-relaxed">
                    <span className="font-semibold text-primary">Owner Operated:</span> Lead chauffeur <span className="text-ink-foreground font-semibold">Nadir Nichols</span> manages bookings personally to ensure 100% punctuality.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Coverage Details Card */}
            <Reveal variant="right" delay={180}>
              <div className="rounded-[2rem] border border-border bg-card p-7 shadow-sm sm:p-8">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Coverage &amp; Service Radius
                </h3>
                
                <ul className="mt-5 space-y-3.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span><strong className="text-foreground">50-Mile Local Radius:</strong> Fast everyday pickups across the regional metro area.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span><strong className="text-foreground">Long-Distance &amp; Interstate:</strong> Out-of-state charters, multi-city corporate runs, and sporting events.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span><strong className="text-foreground">Flat-Rate Guarantee:</strong> Zero surge pricing, no meter anxiety, all tolls and fees quoted upfront.</span>
                  </li>
                </ul>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
