import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Privacy Policy | Exorous',
  description: 'Privacy Policy for Exorous - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl mb-2">Privacy Policy</CardTitle>
          <CardDescription>
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="pt-4 sm:pt-6 space-y-4 sm:space-y-6 text-muted-foreground text-sm sm:text-base">
          
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
            <p>
              Exorous (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website located at exorous.com and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
            <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 mt-4">2.1 Information You Provide</h3>
            <p>We may collect information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Contact us through our contact forms</li>
              <li>Book a consultation through our Calendly integration</li>
              <li>Subscribe to our newsletter</li>
              <li>Apply for a job position</li>
              <li>Communicate with us via email or phone</li>
            </ul>
            <p className="mt-3">This information may include your name, email address, phone number, company name, job title, and any other information you choose to provide.</p>

            <h3 className="text-lg font-medium text-foreground mb-2 mt-4">2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we automatically collect certain information, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website addresses</li>
              <li>Pages viewed and the dates and times of your visit</li>
              <li>Clickstream data (navigation paths through our site)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you administrative information and updates</li>
              <li>Communicate with you about our services and promotions</li>
              <li>Analyze how our website is used to improve user experience</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Tracking Technologies</h2>
            <h3 className="text-lg font-medium text-foreground mb-2 mt-4">4.1 Google Analytics</h3>
            <p>
              We use Google Analytics to track and analyze website traffic. Google Analytics uses cookies and similar technologies to collect information about your use of our website. This information is aggregated and used to help us understand how visitors interact with our site.
            </p>
            <p className="mt-2">
              You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on, available at: <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>
            </p>

            <h3 className="text-lg font-medium text-foreground mb-2 mt-4">4.2 Cookies</h3>
            <p>
              We use cookies to enhance your browsing experience. Cookies are small data files stored on your device that help us remember your preferences and improve our website&apos;s functionality.
            </p>
            <p className="mt-2">You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Third-Party Services</h2>
            <p>We may use third-party services to help us operate our website and business, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Calendly:</strong> For scheduling consultations and meetings</li>
              <li><strong>Google Analytics:</strong> For website analytics</li>
              <li><strong>Email providers:</strong> For sending communications</li>
            </ul>
            <p className="mt-3">
              These third-party services may have their own privacy policies governing the collection and use of your information. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will delete or anonymize it in accordance with our data retention policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to processing of your information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, please contact us at <a href="mailto:contact@exorous.com" className="text-primary hover:underline">contact@exorous.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Children&apos;s Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">11. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <div className="mt-3 p-4 bg-muted rounded-lg">
              <p><strong>Email:</strong> <a href="mailto:contact@exorous.com" className="text-primary hover:underline">contact@exorous.com</a></p>
              <p className="mt-2"><strong>Phone:</strong> +880 1813316904</p>
              <p className="mt-2"><strong>Address:</strong> Mirpur DOHS, Dhaka, Bangladesh</p>
            </div>
          </section>

        </CardContent>
      </Card>
    </div>
  );
}
