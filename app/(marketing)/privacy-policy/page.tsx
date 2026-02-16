import type { Metadata } from 'next';
import SectionWrapper from '@/components/section-wrapper';

export const metadata: Metadata = {
  title: 'Privacy Policy | Exorous',
  description: 'Privacy Policy for Exorous - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <SectionWrapper id="privacy-policy" className="pt-32 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Privacy Policy</h1>
          <p className="text-zinc-400">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-invert max-w-none text-zinc-300">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="leading-relaxed mb-4">
              Exorous ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit exorous.com.
            </p>
            <p className="leading-relaxed">
              We operate as a B2B Agency Automation Partner. Our primary interaction with clients is through direct consultation bookings via Calendly. We do not store personal lead data in our own databases for marketing purposes; all scheduling data is managed securely by Calendly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.1 Information You Provide</h3>
            <p className="leading-relaxed mb-3">We collect information you voluntarily provide when you:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Book a call via our <strong>Calendly</strong> integration (Name, Email, Meeting details).</li>
              <li>Contact us via email.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Automated Collection</h3>
            <p className="leading-relaxed mb-3">We use third-party analytics tools to understand website usage:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Analytics:</strong> Collects anonymous data like IP address, browser type, and page usage statistics.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed mb-3">We use your data solely to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Schedule and conduct consultation calls.</li>
              <li>Respond to your inquiries.</li>
              <li>Improve our website functionality.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              <strong>We never sell your data to third parties.</strong>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
            <p className="leading-relaxed mb-3">We utilize trusted third-party providers:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Calendly:</strong> For appointment scheduling. Their privacy policy applies to data entered into the booking widget.</li>
              <li><strong>Google Analytics:</strong> For website analysis.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about this policy, please contact us at:
              <br />
              <a href="mailto:contact@exorous.com" className="text-primary hover:underline font-bold mt-2 inline-block">contact@exorous.com</a>
            </p>
          </section>
        </div>
      </div>
    </SectionWrapper>
  );
}
