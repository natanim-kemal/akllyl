import type { Metadata } from "next";
import { Marcellus } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
});

export const metadata: Metadata = {
  title: "Akllyl Professional Newborn Photography in Addis Ababa",
  description: "Professional newborn photography in Addis Ababa. Specializing in family photos. Book your session today!",
  keywords: ["photography", "newborn photography", "Addis Ababa", "family photos", "Akllyl"],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Akllyl Professional Photography in Addis Ababa",
    description: "Professional newborn photography in Addis Ababa. Specializing in family photos. Book your session today!",
    url: "https://akllyl.com",
    siteName: "Akllyl",
    images: [
      {
        url: "/hero-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Akllyl Photography",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akllyl Professional Photography in Addis Ababa",
    description: "Professional newborn photography in Addis Ababa. Specializing in family photos. Book your session today!",
    images: ["/hero-preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${marcellus.variable} font-serif antialiased transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
