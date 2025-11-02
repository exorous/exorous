// Environment configuration for Calendly and other services
export const config = {
    calendly: {
        // Free plan only allows 1 event type - use your main booking URL
        mainBooking: process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/riaz37-ipe/free-consultation',
    },
    app: {
        name: 'Exorous',
        email: 'contact@exorous.com',
        phone: '+880 1813316904',
        address: 'Extension Pallabi, Mirpur 11.5, Dhaka, Bangladesh',
    }
} as const;

// Meeting types configuration (all use the same Calendly URL for free plan)
export const meetingTypes = [
    {
        id: 'consultation',
        title: 'Free Consultation',
        duration: '30 minutes',
        description: 'Discuss your project and get expert advice',
        price: 'Free',
        calendlyUrl: config.calendly.mainBooking
    },

] as const;
