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
    default: 'Exorous',
    template: '%s | Exorous',
  },
  description: 'Exorous - Advanced AI Automation Agency. We build intelligent systems that capture leads, qualify customers, and automate operations 24/7. Turn your business into an AI-powered machine.',
  keywords: [
    'AI Automation',
    'AI Agency',
    'Lead Automation',
    'Intelligent Workflows',
    'AI Agents',
    'Business Process Automation',
    'Next.js',
    'TypeScript',
    'Web Development',
    'Digital Transformation',
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
    title: 'Exorous | AI Automation Agency',
    description: 'Eliminate repetitive manual work. We build intelligent AI systems that capture leads, qualify customers, and automate operations 24/7.',
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
    title: 'Exorous | AI Automation Agency',
    description: 'Turn your business into an AI-powered machine with custom automation ecosystems.',
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
                description: 'Done-for-you AI automation agency for marketing agencies. We build custom systems that capture leads, qualify customers, and automate operations 24/7.',
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
                  'Lead Automation Workflows',
                  'AI Follow-up Systems',
                  'CRM Automation',
                  'Client Onboarding Automation',
                  'Reporting Automation',
                  'Internal Operations Workflows',
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