export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || 'G-Q8DY78XBGD';

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Track page views
export const pageview = (url: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string): void => {
  event({
    action: 'click',
    category: 'button',
    label: `${buttonName}${location ? ` - ${location}` : ''}`,
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string): void => {
  event({
    action: 'submit',
    category: 'form',
    label: formName,
  });
};

// Track project views
export const trackProjectView = (projectName: string): void => {
  event({
    action: 'view',
    category: 'project',
    label: projectName,
  });
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText?: string): void => {
  event({
    action: 'click',
    category: 'external_link',
    label: linkText || url,
  });
};
