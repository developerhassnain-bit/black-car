import { Mail, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-12 overflow-hidden rounded-t-[2.5rem] bg-ink text-ink-foreground">
      <img
        src="/band-highway.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-20 pointer-events-none"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center">
              <div className="rounded-2xl bg-white/95 px-3 py-1.5 shadow-md border border-white/60">
                <img
                  src="/logo.png"
                  alt="Black Car Service 360"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/75">
              Affordable group travel in late-model Mercedes Sprinters. Local &amp; long distance,
              available 24/7 for every ride that matters.
            </p>
            <a
              href="tel:+12674088229"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 hover:scale-105"
            >
              <Phone className="h-4 w-4" /> Book your ride
            </a>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Contact
            </h4>
            <ul className="mt-5 space-y-3.5 text-sm text-ink-foreground/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+12674088229" className="hover:text-primary transition-colors">
                  (267) 408-8229
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:360mediaent@gmail.com"
                  className="break-all hover:text-primary transition-colors"
                >
                  360mediaent@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Monday – Sunday, 24/7
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Serving a 50-mile local radius + long distance
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-ink-foreground/80">
              {[
                "Airport round trips",
                "Weddings",
                "Funerals",
                "Stadium & concerts",
                "Events & night clubs",
                "Cargo delivery",
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="transition-colors hover:text-primary">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-foreground/15 pt-6 text-xs text-ink-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Black Car Service 360. All rights reserved.</p>
          <p>
            Owner: <span className="font-semibold text-ink-foreground">Nadir Nichols</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
