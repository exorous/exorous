
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import BehavioralTriggers from '@/components/behavioral-triggers';
import CookieConsentBanner from '@/components/cookie-consent-banner';
import { Toaster } from '@/components/ui/sonner';

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navigation />
            <BehavioralTriggers>
                <main className="relative">
                    {children}
                </main>
            </BehavioralTriggers>
            <Footer />
            <CookieConsentBanner />
            <Toaster />
        </>
    );
}
