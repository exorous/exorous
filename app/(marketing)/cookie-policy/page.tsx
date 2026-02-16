import type { Metadata } from 'next';
import SectionWrapper from '@/components/section-wrapper';

export const metadata: Metadata = {
  title: 'Cookie Policy | Exorous',
  description: 'Cookie Usage Policy for Exorous.',
};

export default function CookiePolicy() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <SectionWrapper id="cookie-policy" className="pt-32 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Cookie Policy</h1>
          <p className="text-zinc-400">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-invert max-w-none text-zinc-300">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies?</h2>
            <p className="leading-relaxed">
              Cookies are small text files placed on your device to help us analyze website traffic and improve your experience.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">2. Cookies We Use</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Google Analytics</h3>
                <p className="leading-relaxed">
                  We use Google Analytics to understand how visitors interact with our site. This helps us optimize our content and structure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Calendly</h3>
                <p className="leading-relaxed">
                  Our booking page embeds Calendly, which may set functional cookies to enable the appointment scheduling process.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">3. Managing Cookies</h2>
            <p className="leading-relaxed">
              Most browsers allow you to block or delete cookies. You can also opt out of Google Analytics specifically by using their <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener" className="text-primary hover:underline">Opt-out Browser Add-on</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">4. Contact</h2>
            <p className="leading-relaxed">
              Questions? Email us at <a href="mailto:contact@exorous.com" className="text-primary hover:underline">contact@exorous.com</a>
            </p>
          </section>
        </div>
      </div>
    </SectionWrapper>
  );
}
