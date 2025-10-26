import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import SmoothScroll from '@/components/smooth-scroll';
import Analytics from '@/components/Analytics';
import BehavioralTriggers from '@/components/behavioral-triggers';
import Script from 'next/script';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || 'G-Q8DY78XBGD'; 

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Exorous',
  description: 'The whizz of web development, design, and digital marketing. We create stunning websites and applications that drive results. The whizz behind the next big ideas and innovation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
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
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
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
            <Navigation />
            <BehavioralTriggers>
              <main className="relative pt-20 md:pt-24">
                {children}
              </main>
            </BehavioralTriggers>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}