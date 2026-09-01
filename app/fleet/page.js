import Link from "next/link";
import {
  Users,
  Luggage,
  ShieldCheck,
  Sparkles,
  Phone,
  ArrowRight,
  Check,
  Volume2,
  Wind,
  BatteryCharging,
  Eye,
  Award,
  ChevronRight,
  Radio,
} from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Our Fleet | Mercedes-Benz Sprinter Executive Luxury | Black Car Service 360",
  description:
    "Explore our flagship fleet of late-model Mercedes-Benz high-roof Sprinters. Featuring 14-passenger leather seating, massive luggage capacity, 6'4\" standing height, and 24/7 chauffeur care.",
  openGraph: {
    title: "Black Car Service 360 — Luxury Mercedes Sprinter Fleet",
    description:
      "High-roof Mercedes-Benz Sprinters with leather seating, climate zones, USB power, and deep luggage bays. Flat rates and 24/7 dispatch.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const specs = [
  {
    icon: Users,
    label: "Passenger Capacity",
    value: "Up to 14 Passengers",
    desc: "Plush leather-appointed captain seating with ample legroom for full groups.",
  },
  {
    icon: Luggage,
    label: "Luggage Bay",
    value: "14+ Full Size Bags",
    desc: "Deep dedicated rear cargo zone that easily swallows suitcases, golf bags, and gear.",
  },
  {
    icon: Wind,
    label: "Cabin Environment",
    value: "Dual-Zone Climate",
    desc: "Independent front and rear AC/heating systems for ideal passenger comfort in every season.",
  },
  {
    icon: Sparkles,
    label: "Standing Headroom",
    value: "6'4\" High-Roof",
    desc: "Walk in standing straight — no hunching, ducking, or awkward crouching.",
  },
  {
    icon: BatteryCharging,
    label: "Connectivity",
    value: "USB Fast Charging",
    desc: "Dedicated power and charging access at every row for phones and devices.",
  },
  {
    icon: Volume2,
    label: "Entertainment",
    value: "Bluetooth Surround",
    desc: "High-fidelity audio system for your custom music playlist during the ride.",
  },
  {
    icon: Eye,
    label: "Privacy & Comfort",
    value: "Limo-Tinted Glass",
    desc: "Deep factory privacy tinting to keep the cabin cool and private on every journey.",
  },
  {
    icon: ShieldCheck,
    label: "Safety & Insurance",
    value: "Fully Insured & Serviced",
    desc: "Rigorous mechanical inspection, commercial insurance, and advanced electronic stability.",
  },
];

const galleryItems = [
  {
    img: "/interior.jpg",
    title: "Executive Cabin Comfort",
    desc: "Ergonomic leather seating, spacious center aisle, and LED ambient lighting.",
    tag: "Cabin Interior",
  },
  {
    img: "/hero-sprinter.jpg",
    title: "Sleek Jet-Black Exterior",
    desc: "Pristine, photo-ready styling suited for VIP galas, weddings, and executive arrivals.",
    tag: "Exterior",
  },
  {
    img: "/detail-care.jpg",
    title: "Sanitized & Reset Routine",
    desc: "Deep-cleaned, vacuumed, surfaces disinfected, and restocked between every single trip.",
    tag: "White Glove Care",
  },
  {
    img: "/chauffeur.jpg",
    title: "Suited Lead Chauffeur",
    desc: "Commercially licensed driver who opens doors, manages baggage, and navigates seamlessly.",
    tag: "Chauffeur Service",
  },
];

const fleetAdvantages = [
  {
    title: "6'4\" Walk-In Standing Height",
    desc: "Unlike standard SUVs where passengers must squeeze and crawl into cramped third-row seats, our high-roof Sprinter allows everyone to walk straight to their seat with dignity.",
  },
  {
    title: "Separate Dedicated Luggage Compartment",
    desc: "No bags under feet, no luggage piled on empty seats, and no blocking rear windows. A massive partition isolates your baggage safely behind the cabin.",
  },
  {
    title: "Group Chemistry & Togetherness",
    desc: "Instead of dividing your wedding party, corporate team, or family into four separate Uber rides, everyone travels in a single luxury cabin and shares the experience.",
  },
  {
    title: "100% Reset & Sanitized Standard",
    desc: "Our vehicles never take back-to-back rides without a complete interior wipe-down, vacuum, and reset by our chauffeur team.",
  },
];

export default function FleetPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background flex flex-col">
      <Nav />

      {/* 1. Luxury Fleet Hero */}
      <section className="relative px-3 pt-3 sm:px-5 sm:pt-5 w-full">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink sm:rounded-[2.5rem]">
          {/* Background image & gradient overlay */}
          <img
            src="/hero-sprinter.jpg"
            alt="Mercedes-Benz High-Roof Sprinter Fleet"
            width={1920}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/95 via-ink/75 to-ink/95" />
          
          {/* Ambient light glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/20 blur-[130px] pointer-events-none" />

          <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-36 text-center sm:pb-24 sm:pt-48">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 bg-ink-foreground/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink-foreground/90 backdrop-blur-md">
                <Award className="h-3.5 w-3.5 text-primary" /> The Executive Fleet
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.05] text-ink-foreground sm:text-6xl lg:text-7xl">
                Late-Model Mercedes Sprinters.
                <br />
                <span className="text-gradient">Engineered for groups.</span>
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mx-auto mt-6 max-w-2xl text-base text-ink-foreground/80 sm:text-lg leading-relaxed">
                Step inside our flagship high-roof Mercedes-Benz Sprinters. Designed specifically to seat 14 passengers comfortably with dedicated luggage bays, dual climate control, and white-glove chauffeur standards.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap justify-center gap-3.5">
                <a
                  href="tel:+12674088229"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-lift transition-transform duration-300 hover:scale-105"
                >
                  <Phone className="h-4 w-4" /> Book the Sprinter
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 bg-ink-foreground/5 px-6 py-4 text-sm font-semibold text-ink-foreground backdrop-blur-md transition-colors hover:bg-ink-foreground/15"
                >
                  Explore Services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            {/* Quick Fleet Highlights Bar */}
            <Reveal delay={380}>
              <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { k: "14", v: "Passenger Seats", sub: "Leather Captain's Style" },
                  { k: "6'4\"", v: "Standing Height", sub: "Full Walk-In Cabin" },
                  { k: "14+", v: "Large Luggage Bags", sub: "Deep Cargo Bay" },
                  { k: "24/7", v: "Always Dispatched", sub: "Cleaned Every Run" },
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

      {/* 2. Full Vehicle Specification Grid */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 w-full">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Vehicle Specifications
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
            Everything built for your group's comfort
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Every feature in our Mercedes-Benz Sprinters is chosen to provide a relaxing, executive-level travel experience from start to finish.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-gradient-primary group-hover:text-primary-foreground shadow-sm">
                  <item.icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">
                  {item.label}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-foreground">
                  {item.value}
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

      {/* 3. Cabin & Fleet Photo Showcase */}
      <section className="border-y border-border bg-card w-full">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Visual Tour
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Inside & Outside the Sprinter
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              A closer look at the cabin finish, exterior presentation, and meticulous care given to every ride.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {galleryItems.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 120}>
                <div className="group overflow-hidden rounded-[2rem] border border-border bg-background shadow-sm transition-all duration-500 hover:shadow-lift">
                  <div className="relative h-72 sm:h-80 overflow-hidden bg-ink">
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-ink/75 border border-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Sprinter Beats Standard SUVs & Cabs */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 w-full">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal variant="left">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              The Sprinter Advantage
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl leading-tight">
              Why our Sprinter beats standard SUVs & multiple sedans
            </h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              Standard 7-seat SUVs claim to carry groups, but with luggage loaded, third-row passengers are squished with zero legroom. Our high-roof Mercedes Sprinter is in an entirely different class.
            </p>

            <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Radio className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-foreground">Have specific route or baggage questions?</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Contact our dispatch line anytime to verify vehicle dimensions, passenger setups, or cargo arrangements.
              </p>
              <a
                href="tel:+12674088229"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Call Nadir Nichols: (267) 408-8229 <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal variant="right" delay={140}>
            <div className="space-y-4">
              {fleetAdvantages.map((adv, i) => (
                <div
                  key={adv.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-soft hover:border-primary/40"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-base sm:text-lg font-semibold text-foreground">
                        {adv.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {adv.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Bottom Reservation CTA Banner */}
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 w-full">
        <Reveal variant="scale">
          <div className="grid gap-6 rounded-[2rem] bg-ink p-8 text-ink-foreground shadow-lift sm:p-14 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Instant Group Reservation
              </span>
              <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
                Ready to book the Sprinter for your next ride?
              </h2>
              <p className="mt-3 max-w-lg text-ink-foreground/75 text-sm sm:text-base leading-relaxed">
                Call any hour with your date, pickup point, and passenger count for a guaranteed flat-rate quote.
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
                Contact Form <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
