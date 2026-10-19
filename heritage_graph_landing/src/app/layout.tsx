import type { Metadata } from 'next';
import { Barlow, Fraunces, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

// The same pairing as heritage_graph_ui (spec 008): Barlow for text,
// Instrument Serif for display through the `font-display` utility. Fraunces
// stays as `font-serif` for the record pages that still use it.
//
// The variables are the token names themselves (--font-sans, --font-serif), as
// in the main app, so next/font's class on <body> overrides the literal
// fallbacks in globals.css. Pointing the tokens at a differently named next/font
// variable fails silently: that variable only exists on <body>, so the token is
// invalid at :root and every font-family built on it falls back to the default.
const barlow = Barlow({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-display',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
});

const fraunces = Fraunces({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "HeritageGraph — Nepal's cultural heritage, connected",
  description:
    'An open knowledge graph of Newar and Nepali heritage — monuments, festivals, deities, guthis, and the stories that connect them.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${barlow.variable} ${instrumentSerif.variable} ${fraunces.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
