# Calendly Integration Setup

This document explains how to set up the Calendly integration for your IT firm's website.

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Calendly Configuration (Free plan allows only 1 event type)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/consultation
```

## Calendly Setup Steps

### 1. Create Calendly Account
- Go to [calendly.com](https://calendly.com)
- Sign up for a free account
- Complete your profile setup

### 2. Create Your Main Meeting Type
**Note**: Calendly free plan only allows 1 event type. Create one comprehensive meeting type:

#### Free Consultation (30-60 minutes)
- **Name**: Free Consultation
- **Duration**: 30-60 minutes (flexible)
- **Description**: Discuss your project, requirements, and get expert advice
- **Location**: Online (Zoom/Google Meet)
- **Buffer time**: 15 minutes before, 15 minutes after

### 3. Configure Availability
- Set your working hours (e.g., 9 AM - 5 PM, Monday-Friday)
- Add time zone (important for international clients)
- Set up automatic reminders (24 hours, 2 hours before)

### 4. Add Custom Questions
Add qualifying questions to help you prepare for the meeting:
- What's your project about?
- What's your budget range?
- When do you need this completed?
- Any specific requirements?
- What type of consultation do you need? (General discussion, project planning, technical review)

### 5. Get Your Calendly URL
1. Go to your Calendly dashboard
2. Click on your meeting type
3. Copy the "Share" URL
4. Update the environment variable with your actual URL

### 6. Test the Integration
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Click "Schedule Your Meeting"
4. Test each meeting type
5. Verify that the Calendly popup opens correctly

## Features Included

✅ **Professional Booking Interface** - Clean, modern design  
✅ **Flexible Meeting Types** - UI shows different options, all use same Calendly URL  
✅ **Mobile Responsive** - Works perfectly on all devices  
✅ **Environment-based Configuration** - Easy to manage different environments  
✅ **Fallback Support** - Graceful degradation if Calendly fails to load  
✅ **Analytics Ready** - Track booking conversions  

## Upgrading to Paid Plans

If you need multiple event types, consider upgrading:

### Calendly Essentials ($8/month)
- Multiple event types
- Custom branding
- Advanced scheduling options

### Calendly Professional ($12/month)
- All Essentials features
- Team scheduling
- Advanced integrations

### Alternative: Use One Comprehensive Meeting Type
The current setup works great with one flexible meeting type that covers all consultation needs.

## Customization Options

### Meeting Types
You can easily add or modify meeting types in `/lib/config.ts`:

```typescript
export const meetingTypes = [
  {
    id: 'consultation',
    title: 'Free Consultation',
    duration: '30 minutes',
    description: 'Discuss your project and get expert advice',
    price: 'Free',
    calendlyUrl: config.calendly.consultation
  },
  // Add more meeting types here...
];
```

### Styling
The booking interface uses your existing design system and can be customized by modifying the component styles.

## Troubleshooting

### Calendly Not Loading
- Check that your environment variables are set correctly
- Verify that your Calendly URLs are accessible
- Check browser console for JavaScript errors

### Meeting Types Not Showing
- Ensure all environment variables are prefixed with `NEXT_PUBLIC_`
- Restart your development server after adding new environment variables
- Check that the URLs in your `.env.local` file are correct

### Mobile Issues
- Test on different devices and screen sizes
- Ensure Calendly popup works on mobile browsers
- Check that touch interactions work properly

## Production Deployment

1. Set environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Test the booking flow in production
3. Monitor analytics to track conversion rates
4. Set up email notifications for new bookings

## Support

For issues with the Calendly integration:
1. Check the browser console for errors
2. Verify your Calendly account is properly configured
3. Test with different browsers and devices
4. Contact support if issues persist
