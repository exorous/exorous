import type { Metadata } from 'next';
import SectionWrapper from '@/components/section-wrapper';

export const metadata: Metadata = {
  title: 'Terms of Service | Exorous',
  description: 'Terms of Service for Exorous - Agency Automation & Consulting Services.',
};

export default function TermsOfService() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <SectionWrapper id="terms-of-service" className="pt-32 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Terms of Service</h1>
          <p className="text-zinc-400">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-invert max-w-none text-zinc-300">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p className="leading-relaxed">
              By accessing exorous.com, you agree to these Terms. Exorous provides Agency Automation consulting, system architecture, and development services ("Services").
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
            <p className="leading-relaxed mb-3">We specialize in building automated infrastructures for marketing agencies, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Lead processing & scoring systems</li>
              <li>CRM integrations & automated follow-ups</li>
              <li>Operational workflow automation</li>
              <li>Custom dashboard development</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Specific deliverables are defined in individual statements of work (SOW) or consulting agreements agreed upon separately during client onboarding.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
            <p className="leading-relaxed">
              Unless explicitly granted in a client agreement, all proprietary code, systems, and "Exorous Core" automation architectures remain the intellectual property of Exorous. Clients are granted a non-exclusive, perpetual license to use the delivered systems for their own business operations.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">4. Disclaimers & Limitation of Liability</h2>
            <p className="leading-relaxed mb-4">
              <strong>No Earnings Guarantee:</strong> While our systems are designed to improve efficiency and lead conversion, we do not guarantee specific revenue results. Your business results depend on various market factors beyond our control.
            </p>
            <p className="leading-relaxed">
              <strong>Limitation of Liability:</strong> To the maximum extent permitted by law, Exorous shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact</h2>
            <p className="leading-relaxed">
              For legal inquiries: <a href="mailto:contact@exorous.com" className="text-primary hover:underline">contact@exorous.com</a>
            </p>
          </section>
        </div>
      </div>
    </SectionWrapper>
  );
}
