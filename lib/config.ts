export const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/riaz37-ipe/free-consultation';

export const meetingTypes = [
    {
        id: 'discovery',
        name: 'Discovery Call',
        duration: '30 min',
        calendlyUrl: calendlyUrl, // Use the main URL directly
        description: 'Perfect for initial project scoping and feasibility assessment.',
        icon: 'Sparkles',
    },
    {
        id: 'technical',
        name: 'Technical Deep Dive',
        duration: '60 min',
        calendlyUrl: calendlyUrl,
        description: 'Detailed architecture review for complex system integrations.',
        icon: 'Code',
    },
];
