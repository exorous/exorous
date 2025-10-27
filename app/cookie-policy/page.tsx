import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Cookie Policy | Exorous',
  description: 'Cookie Policy for Exorous - Learn about how we use cookies and similar tracking technologies.',
};

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl mb-2">Cookie Policy</CardTitle>
          <CardDescription>
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="pt-4 sm:pt-6 space-y-4 sm:space-y-6 text-muted-foreground text-sm sm:text-base">
          
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the site owners.
            </p>
            <p className="mt-3">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are useful because they allow a website to recognize your device.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            
            <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 mt-4">2.1 Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
            </p>

            <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 mt-4">2.2 Analytics Cookies</h3>
            <p>
              We use Google Analytics to understand how visitors interact with our website. These cookies help us analyze page views, unique visitors, time spent on the site, and other website statistics.
            </p>
            <div className="mt-2 p-3 bg-muted rounded-md">
              <p className="text-sm"><strong>Cookies used:</strong></p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                <li><code className="bg-background px-1 rounded">_ga</code> - Used to distinguish users (expires in 2 years)</li>
                <li><code className="bg-background px-1 rounded">_ga_[ID]</code> - Used to persist session state (expires in 2 years)</li>
                <li><code className="bg-background px-1 rounded">_gid</code> - Used to distinguish users (expires in 24 hours)</li>
              </ul>
            </div>

            <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 mt-4">2.3 Preference Cookies</h3>
            <p>
              These cookies allow our website to remember information about your visit, such as your preferred language and other settings. This can make your next visit easier and the site more useful to you.
            </p>

            <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 mt-4">2.4 Functional Cookies</h3>
            <p>
              We use functional cookies to provide enhanced functionality and personalization, such as remembering your theme preference (light/dark mode).
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">3. Types of Tracking Technologies</h2>
            
            <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 mt-4">3.1 Cookies</h3>
            <p>As described above, we use cookies to enhance your experience on our website.</p>

            <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 mt-4">3.2 Local Storage</h3>
            <p>
              We use local storage to remember your preferences and track your website visits. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your theme preference (dark/light mode)</li>
              <li>Visit count and last visit timestamp</li>
              <li>Other user preferences</li>
            </ul>

            <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 mt-4">3.3 Google Analytics</h3>
            <p>
              We use Google Analytics, a web analytics service provided by Google. Google Analytics uses cookies and similar technologies to help us understand how visitors use our site. For more information, please visit Google&apos;s Privacy Policy: <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">4. Third-Party Cookies</h2>
            <p>In addition to our own cookies, we may also use various third-party cookies:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Google Analytics:</strong> For website analytics and user behavior tracking</li>
              <li><strong>Calendly:</strong> For scheduling consultations (when you interact with the Calendly widget)</li>
            </ul>
            <p className="mt-3">
              These third-party cookies are governed by their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">5. Managing Cookies</h2>
            <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 mt-4">5.1 Browser Settings</h3>
            <p>
              Most web browsers allow you to control cookies through their settings. You can set your browser to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Block all cookies</li>
              <li>Block third-party cookies</li>
              <li>Delete cookies when you close your browser</li>
              <li>Be notified when a website tries to set a cookie</li>
            </ul>
            <p className="mt-3">Here are links to manage cookies in popular browsers:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><a href="https://support.google.com/chrome/answer/95647" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Edge</a></li>
            </ul>

            <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 mt-4">5.2 Opt-Out of Google Analytics</h3>
            <p>
              You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on: <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>
            </p>

            <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 mt-4">5.3 Impact of Disabling Cookies</h3>
            <p>
              Please note that if you disable cookies, some features of our website may not function properly. You may not be able to access certain parts of the website, and some services may not be available.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">6. Consent</h2>
            <p>
              By continuing to use our website, you consent to our use of cookies in accordance with this Cookie Policy. If you do not agree to our use of cookies, you should disable them in your browser settings or refrain from using our website.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">7. Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please review this Cookie Policy periodically to stay informed about our use of cookies.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">8. Contact Us</h2>
            <p>If you have any questions about our use of cookies, please contact us:</p>
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
