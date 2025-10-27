import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Terms of Service | Exorous',
  description: 'Terms of Service for Exorous - Learn about the terms and conditions governing your use of our services.',
};

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl mb-2">Terms of Service</CardTitle>
          <CardDescription>
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="pt-4 sm:pt-6 space-y-4 sm:space-y-6 text-muted-foreground text-sm sm:text-base">
          
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
            <p>
              Welcome to Exorous. These Terms of Service ("Terms") govern your access to and use of our website located at exorous.com and our services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p className="mt-3">
              If you do not agree to these Terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Acceptance of Terms</h2>
            <p>
              By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement. These Terms constitute a legally binding agreement between you and Exorous.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Services Description</h2>
            <p>Exorous provides the following services:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Web development and design</li>
              <li>UI/UX design services</li>
              <li>Mobile application development</li>
              <li>AI agent development</li>
              <li>Digital marketing services</li>
              <li>Consulting and advisory services</li>
            </ul>
            <p className="mt-3">
              We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. User Obligations</h2>
            <p>When using our services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not engage in any activity that disrupts or interferes with our services</li>
              <li>Not attempt to gain unauthorized access to our systems or networks</li>
              <li>Not transmit any viruses, malware, or malicious code</li>
              <li>Not use our services to violate any applicable laws or regulations</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Intellectual Property Rights</h2>
            <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 mt-4">5.1 Our Intellectual Property</h3>
            <p>
              All content, features, and functionality of our website, including but not limited to text, graphics, logos, images, software, and the compilation thereof, are owned by Exorous, its licensors, or other providers of such material and are protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 mt-4">5.2 Limited License</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our website for personal or internal business purposes, subject to these Terms.
            </p>

            <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 mt-4">5.3 User Content</h3>
            <p>
              Any content you submit to us, including but not limited to proposals, ideas, suggestions, or feedback, becomes the property of Exorous or its affiliates. By submitting content, you grant us a perpetual, worldwide, royalty-free license to use, modify, and distribute such content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Project Deliverables and Payments</h2>
            <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 mt-4">6.1 Project Scope</h3>
            <p>
              The scope of work for each project will be defined in a separate agreement or project proposal. Any changes to the scope may result in additional charges.
            </p>

            <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 mt-4">6.2 Payment Terms</h3>
            <p>
              Payment terms will be specified in the project agreement. Generally, we require:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>A deposit to begin work (typically 50% of the total project cost)</li>
              <li>Progress payments as milestones are achieved</li>
              <li>Final payment upon project completion and delivery</li>
            </ul>

            <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 mt-4">6.3 Delays and Cancellations</h3>
            <p>
              If a project is delayed due to client actions or failure to provide necessary materials, Exorous may charge for additional time and resources. Cancellation fees may apply as specified in the project agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Warranty and Support</h2>
            <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 mt-4">7.1 Warranty Period</h3>
            <p>
              We warrant that our services will be performed in a professional and workmanlike manner. We provide a [30-day] warranty period from project completion for bug fixes and technical issues not related to third-party services or client modifications.
            </p>

            <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 mt-4">7.2 Support</h3>
            <p>
              Ongoing support and maintenance services are available under separate agreement. Basic support during the warranty period is included at no additional charge.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Third-Party Services</h2>
            <p>
              Our services may integrate with third-party services (e.g., hosting providers, payment processors, analytics tools). We are not responsible for the availability, functionality, or content of third-party services. Your use of third-party services is subject to their respective terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, EXOROUS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Your use of or inability to use our services</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any interruption or cessation of transmission to or from our services</li>
              <li>Any bugs, viruses, or other harmful code</li>
              <li>Any errors or omissions in any content</li>
            </ul>
            <p className="mt-3">
              Our total liability to you for all claims arising out of or relating to the use of our services shall not exceed the total amount paid to us by you in the twelve (12) months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Exorous, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or in any way connected with:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your use of our services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Any content you submit or transmit through our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">11. Termination</h2>
            <p>We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms.</p>
            <p className="mt-3">
              Upon termination, your right to use our services will cease immediately. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">12. Dispute Resolution</h2>
            <p>
              Any disputes arising out of or relating to these Terms or our services shall be resolved through good faith negotiations. If we cannot resolve a dispute through negotiation within 60 days, the dispute shall be resolved through binding arbitration in accordance with the laws of Bangladesh.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">14. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">15. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">16. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
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
