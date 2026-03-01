import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import SmoothScroll from '@/components/smooth-scroll';
import Analytics from '@/components/Analytics';
import CookieConsentBanner from '@/components/cookie-consent-banner';
import { Toaster } from '@/components/ui/sonner';
import Script from 'next/script';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || 'G-Q8DY78XBGD';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://exorous.com';

export const metadata: Metadata = {
  title: {
    default: 'Exorous — Competitor Ad Intelligence for Performance Agencies',
    template: '%s | Exorous',
  },
  description: 'Scan competitor ads, get AI analysis of what\'s working, generate branded variations. One pipeline replacing 3 tools.',
  keywords: [
    'Competitor Ad Intelligence',
    'Performance Marketing Agency',
    'Ad Analysis AI',
    'Creative Variation Generation',
    'Exorous',
  ],
  authors: [{ name: 'Exorous' }],
  creator: 'Exorous',
  publisher: 'Exorous',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Exorous | Competitor Ad Intelligence',
    description: 'Scan competitor ads, get AI analysis of what\'s working, generate branded variations. One pipeline replacing 3 tools.',
    siteName: 'Exorous',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Exorous AI Automation Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exorous | Competitor Ad Intelligence',
    description: 'Scan competitor ads, get AI analysis of what\'s working, generate branded variations. One pipeline replacing 3 tools.',
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable} font-sans antialiased`}>
          {/* Google structured data */}
          <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Exorous',
                url: siteUrl,
                logo: `${siteUrl}/logo.png`,
                description: 'Competitor ad intelligence for performance marketing agencies. Scan, analyze, generate — one pipeline replacing 3 tools and 6 hours of brief writing.',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Dhaka',
                  addressRegion: 'Dhaka',
                  addressCountry: 'BD',
                  streetAddress: 'Extension Pallabi, Mirpur 11.5',
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+880-1813316904',
                  contactType: 'Customer Service',
                  email: 'contact@exorous.com',
                },
                sameAs: [
                  'https://www.linkedin.com/company/exorous',
                  'https://www.facebook.com/exorous',
                ],
                areaServed: 'Worldwide',
                serviceType: [
                  'Competitor Ad Scanning',
                  'AI Ad Analysis',
                  'Branded Variation Generation',
                  'Weekly Intelligence Report',
                  'Managed Pilot Service',
                ],
              }),
            }}
          />
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){ dataLayer.push(arguments); }
                gtag('js', new Date());
                
                // Check cookie consent
                const cookieConsent = localStorage.getItem('cookieConsent');
                
                gtag('consent', 'default', {
                  analytics_storage: cookieConsent === 'accepted' ? 'granted' : 'denied'
                });
                
                if (cookieConsent === 'accepted') {
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                }
              `,
            }}
          />
          <Script
            id="apollo-tracker"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                function initApollo(){
                  var n=Math.random().toString(36).substring(7),
                  o=document.createElement("script");
                  o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,
                  o.async=true,
                  o.defer=true,
                  o.onload=function(){
                    window.trackingFunctions.onLoad({appId:"68ebeb6ff3ac340021c33295"})
                  },
                  document.head.appendChild(o);
                }
                initApollo();
              `,
            }}
          />
          <Analytics />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SmoothScroll>
              {children}
              <CookieConsentBanner />
              <Toaster />
            </SmoothScroll>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}