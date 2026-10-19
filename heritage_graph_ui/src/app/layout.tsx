import type { Metadata } from 'next';
import {
  Barlow,
  Fraunces,
  Instrument_Serif,
  Geist_Mono,
  Noto_Sans_Devanagari,
  Noto_Serif_Devanagari,
} from 'next/font/google';
import './globals.css';
import NextAuthSessionProvider from './SessionProvider';
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

// Body face. Barlow replaced Poppins with the liquid-glass refresh (spec 008):
// Poppins' geometric rounds read as app chrome against the display serif,
// where Barlow's slightly condensed grotesque sits under it as text. The same
// five weights are loaded, so the font payload is unchanged — 700 stays
// because ~100 components use `font-bold` and would otherwise get faux bold.
const barlow = Barlow({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

// Display face for headlines, used through the `font-display` utility (which
// adds the italic and the tracking). Ships one weight in two styles; it has no
// Devanagari, so `body:lang(ne)` rebinds --font-display in globals.css.
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
  display: 'swap',
});

// Devanagari. Neither Barlow nor Fraunces ships a Devanagari subset, so every
// ne.json string previously rendered in whatever the OS happened to fall back
// to — different on macOS, Windows and Android, and never the intended face.
// These two are bound to --font-sans / --font-serif for `body:lang(ne)` in
// globals.css, so existing font-sans / font-serif utilities pick them up with
// no per-component changes. Weights are kept tight to protect the LCP budget.
const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: '--font-devanagari',
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const notoSerifDevanagari = Noto_Serif_Devanagari({
  variable: '--font-devanagari-serif',
  subsets: ['devanagari'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title:
    'HeritageGraph: Preserving Cultural Heritage and Identity Through Knowledge Graphs',
  description:
    'HeritageGraph is a research initiative by CAIR-Nepal that uses AI and Knowledge Graphs to digitally preserve cultural heritage, history, art, and traditions—safeguarding shared identity for future generations.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: 'HeritageGraph',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${barlow.variable} ${instrumentSerif.variable} ${fraunces.variable} ${geistMono.variable} ${notoSansDevanagari.variable} ${notoSerifDevanagari.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
