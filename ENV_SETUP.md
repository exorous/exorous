# Environment Variables Setup Guide

This guide explains all the environment variables needed for the Exorous website.

## Quick Start

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Fill in your values** (see details below)

3. **Restart your dev server** after making changes

## Required Variables

### 🏠 Site Configuration

#### `NEXT_PUBLIC_SITE_URL`
- **Required:** Yes (for production)
- **Description:** Your website's public URL
- **Example:** `https://exorous.com`
- **For local dev:** `http://localhost:3000`
- **Used in:** Sitemap, robots.txt, metadata, structured data

---

### 📊 Google Analytics

#### `NEXT_PUBLIC_GA_TRACKING_ID`
- **Required:** Yes (if using analytics)
- **Description:** Google Analytics 4 tracking ID
- **Format:** `G-XXXXXXXXXX`
- **Get it from:** https://analytics.google.com
- **Current value:** `G-Q8DY78XBGD`
- **Used in:** Analytics tracking, gtag scripts

---

### ✅ Site Verification

#### `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- **Required:** No (only for Search Console)
- **Description:** Google Search Console verification code
- **Get it from:** https://search.google.com/search-console
- **How to get:**
  1. Add your property in Search Console
  2. Choose "HTML tag" verification method
  3. Copy the code from the `content` attribute
  4. Paste here (just the code, no quotes)

#### `NEXT_PUBLIC_BING_SITE_VERIFICATION`
- **Required:** No (optional)
- **Description:** Bing Webmaster Tools verification code
- **Get it from:** https://www.bing.com/webmasters
- **How to get:**
  1. Add your site in Bing Webmaster
  2. Choose "Meta tag" verification
  3. Copy the verification code

#### `NEXT_PUBLIC_YANDEX_VERIFICATION`
- **Required:** No (optional)
- **Description:** Yandex Webmaster verification code
- **Get it from:** https://webmaster.yandex.com

---

### 📅 Calendly Integration

#### `NEXT_PUBLIC_CALENDLY_URL`
- **Required:** Yes (if using Calendly)
- **Description:** Your Calendly booking URL
- **Format:** `https://calendly.com/username/event-type`
- **Current value:** `https://calendly.com/riaz37-ipe/free-consultation`
- **Used in:** Booking popups, contact forms

---

### 🗄️ Database Configuration

#### `DATABASE_URL`
- **Required:** Yes (for job applications)
- **Description:** PostgreSQL database connection string
- **Format:** `postgresql://user:password@host:port/database?schema=public`

**Where to get it:**

**Supabase:**
1. Go to your Supabase project
2. Settings → Database
3. Copy the "Connection string" (URI format)

**Local PostgreSQL:**
```
postgresql://postgres:yourpassword@localhost:5432/exorous?schema=public
```

**Other providers:**
- Railway: Project → PostgreSQL → Connect → Copy connection string
- Render: Database → Internal Connection String
- AWS RDS: Check your instance connection details

**Used in:** Prisma ORM, job application storage

---

## Environment Files

### `.env.local` (Local Development)
- **Status:** ⚠️ Never commit to git (already in .gitignore)
- **Usage:** Your local development variables
- **Create from:** Copy `.env.example` to `.env.local`

### `.env.example` (Template)
- **Status:** ✅ Safe to commit to git
- **Usage:** Template showing all required variables
- **Contains:** Placeholder values and documentation

### Production Environment Variables
Set these in your hosting platform:

**Vercel:**
1. Go to your project
2. Settings → Environment Variables
3. Add each variable
4. Select environment (Production, Preview, Development)

**Netlify:**
1. Site settings → Environment variables
2. Add each variable
3. Set scope (all, production, deploy preview, branch deploys)

**Other platforms:**
Check your platform's documentation for environment variable setup

---

## Variable Naming Convention

- **`NEXT_PUBLIC_*`**: Variables accessible in the browser (client-side)
  - Safe to expose in your code
  - Bundled into your JavaScript
  - Can be seen in browser dev tools

- **No prefix**: Server-side only variables (like `DATABASE_URL`)
  - Never exposed to the browser
  - Only accessible in API routes and server components
  - **Keep secret!**

---

## Setup Checklist

### Local Development
- [ ] Copy `.env.example` to `.env.local`
- [ ] Set `NEXT_PUBLIC_SITE_URL` to `http://localhost:3000`
- [ ] Set `DATABASE_URL` to your local or development database
- [ ] Set `NEXT_PUBLIC_GA_TRACKING_ID` (or leave default)
- [ ] Set `NEXT_PUBLIC_CALENDLY_URL` (or leave default)
- [ ] Verification codes: Leave empty for local dev

### Production
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your production domain
- [ ] Set `DATABASE_URL` to your production database
- [ ] Set all verification codes (Google, Bing, etc.)
- [ ] Verify all variables are set in your hosting platform
- [ ] Test that the site works correctly

---

## Testing Your Setup

After setting up environment variables:

1. **Restart your dev server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. **Check if variables are loaded:**
   - Open browser dev tools
   - Check the HTML source for meta tags (verification codes)
   - Check console for any missing variable warnings

3. **Test database connection:**
   ```bash
   npx prisma db push
   npx prisma studio
   ```

---

## Troubleshooting

### Variables not working?

1. **Restart your dev server** after changing `.env.local`
2. **Check variable names** - they must match exactly (case-sensitive)
3. **Check for typos** - no extra spaces or quotes
4. **Clear Next.js cache:**
   ```bash
   rm -rf .next
   npm run dev
   ```

### Database connection issues?

1. **Check `DATABASE_URL` format** - must be valid PostgreSQL connection string
2. **Test connection:**
   ```bash
   npx prisma db pull
   ```
3. **Check if database is running** (for local PostgreSQL)
4. **Check firewall/network** (for remote databases)

### Verification not working?

1. **Make sure site is deployed** - verification requires live site
2. **Check meta tags** - view page source, search for verification codes
3. **Wait a few minutes** - changes can take time to propagate
4. **Check environment variables** are set in production

---

## Security Best Practices

✅ **DO:**
- Use `.env.local` for local development
- Add `.env.local` to `.gitignore` (already done)
- Use different databases for dev/staging/production
- Rotate database passwords regularly
- Use environment variables in your hosting platform

❌ **DON'T:**
- Commit `.env.local` to git
- Hardcode secrets in your code
- Share your `.env.local` file
- Use production database for development
- Expose `DATABASE_URL` in client-side code

---

## Need Help?

- **Next.js Environment Variables:** https://nextjs.org/docs/app/building-your-application/configuring/environment-variables
- **Prisma Database Setup:** https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch
- **Google Analytics Setup:** https://support.google.com/analytics/answer/9304153

