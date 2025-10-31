# Website Verification Setup Guide

This guide explains how to verify your website with various search engines and services for better discoverability by AI browsers and search engines.

## Why Verify Your Website?

Verification allows you to:
- Access search console analytics and insights
- Monitor your website's search performance
- Submit sitemaps for faster indexing
- Fix crawling issues
- Get notified about search problems
- Improve visibility in AI-powered search and browsers

## Available Verification Methods

### Method 1: Meta Tag (Recommended for Next.js)
This is the method we've set up in your `app/layout.tsx` file.

### Method 2: HTML File Upload
Place the verification HTML file in the `public` folder.

---

## Step-by-Step Instructions

### 🔍 Google Search Console Verification

1. **Go to Google Search Console**
   - Visit: https://search.google.com/search-console
   - Sign in with your Google account

2. **Add Your Property**
   - Click "Add Property"
   - Enter your website URL (e.g., `https://exorous.com`)
   - Choose verification method: **"HTML tag"**

3. **Get Your Verification Code**
   - You'll see a meta tag like:
     ```html
     <meta name="google-site-verification" content="abc123xyz789..." />
     ```
   - Copy the code from `content="..."` (just the code, not the quotes)

4. **Add to Environment Variables**
   - Create or edit `.env.local` in your project root
   - Add:
     ```env
     NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=abc123xyz789...
     ```

5. **Verify**
   - Deploy your site (or restart dev server)
   - Go back to Google Search Console
   - Click "Verify"

6. **Submit Your Sitemap**
   - Once verified, go to "Sitemaps"
   - Submit: `https://exorous.com/sitemap.xml`

---

### 🔍 Bing Webmaster Tools Verification

1. **Go to Bing Webmaster Tools**
   - Visit: https://www.bing.com/webmasters
   - Sign in with your Microsoft account

2. **Add Your Site**
   - Click "Add a site"
   - Enter your website URL
   - Choose verification method: **"Meta tag"**

3. **Get Your Verification Code**
   - Copy the code from the meta tag

4. **Add to Environment Variables**
   ```env
   NEXT_PUBLIC_BING_SITE_VERIFICATION=your-bing-code-here
   ```

5. **Verify**
   - Deploy your site
   - Click "Verify" in Bing Webmaster Tools

6. **Submit Your Sitemap**
   - Submit: `https://exorous.com/sitemap.xml`

---

### 🔍 Yandex Webmaster Verification (Optional)

1. **Go to Yandex Webmaster**
   - Visit: https://webmaster.yandex.com
   - Sign in with your Yandex account

2. **Add Your Site**
   - Add your website URL
   - Choose "Meta tag" verification

3. **Add to Environment Variables**
   ```env
   NEXT_PUBLIC_YANDEX_VERIFICATION=your-yandex-code-here
   ```

---

## Environment Variables Setup

Create a `.env.local` file in your project root:

```env
# Site URL
NEXT_PUBLIC_SITE_URL=https://exorous.com

# Verification Codes
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-verification-code
NEXT_PUBLIC_BING_SITE_VERIFICATION=your-bing-verification-code
NEXT_PUBLIC_YANDEX_VERIFICATION=your-yandex-verification-code
```

**Important Notes:**
- Never commit `.env.local` to git (it's already in `.gitignore`)
- For production, add these variables to your hosting platform:
  - **Vercel**: Project Settings → Environment Variables
  - **Netlify**: Site Settings → Environment Variables
  - **Other platforms**: Check their documentation

---

## Alternative: HTML File Verification

If meta tag verification doesn't work, you can use HTML file verification:

1. Download the verification HTML file from the search console
2. Place it in the `public` folder
3. The file will be accessible at: `https://yourdomain.com/filename.html`

---

## Testing Your Verification

After adding verification codes:

1. **Check the meta tags are present:**
   - Visit your website
   - View page source (Right-click → View Page Source)
   - Search for "google-site-verification" or "msvalidate"
   - You should see your verification codes

2. **Verify in Search Console:**
   - Go to the search console
   - Click "Verify"
   - Wait a few seconds for verification to complete

---

## Troubleshooting

### Verification Fails

1. **Check the meta tag is visible:**
   - Make sure the site is deployed (not just running locally)
   - Verify the environment variable is set correctly
   - Clear browser cache and check again

2. **Check for typos:**
   - Verify the code matches exactly (no extra spaces)
   - Ensure the environment variable name is correct

3. **Wait a bit:**
   - Sometimes it takes a few minutes for changes to propagate
   - Try again after 5-10 minutes

4. **Check your site is accessible:**
   - Make sure your site is publicly accessible
   - No authentication required for the homepage
   - No robots.txt blocking Google/Bing bots

---

## Next Steps After Verification

Once verified:

1. **Submit your sitemap:**
   - Google: Submit `https://exorous.com/sitemap.xml`
   - Bing: Submit `https://exorous.com/sitemap.xml`

2. **Monitor your site:**
   - Check for crawling errors
   - Monitor search performance
   - Review mobile usability

3. **Optimize:**
   - Fix any issues found
   - Monitor keyword rankings
   - Track impressions and clicks

---

## Need Help?

- **Google Search Console Help**: https://support.google.com/webmasters
- **Bing Webmaster Help**: https://www.bing.com/webmasters/help
- Check your deployment platform's documentation for environment variable setup

