import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Black Car Service 360 | Sprinter Group Travel & Airport Rides",
  description:
    "Affordable group travel in late-model Mercedes Sprinters. Airport round trips, weddings, funerals, concerts, night clubs and cargo delivery. Local & long distance, 24/7.",
  openGraph: {
    title: "Black Car Service 360 | Luxury Sprinter Group Travel",
    description:
      "Late-model Mercedes Sprinters for airport runs, weddings, events and long distance trips. Call (267) 408-8229 — available 24/7.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
