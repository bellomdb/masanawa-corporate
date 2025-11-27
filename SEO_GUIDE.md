# SEO & Search Engine Indexing Guide

## Quick Start: Submit Your Site to Search Engines

### 1. Google Search Console
**Most Important** - This is where you verify your site with Google and submit your sitemap.

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter your domain: `https://masanawa.vercel.app`
4. Verify ownership using one of these methods:
   - **HTML Tag** (Easiest): Add a meta tag to your site's head
   - **DNS Record**: Add a TXT record to your domain
   - **Google Analytics**: If you have GA installed
5. Once verified, submit your sitemap: `https://masanawa.vercel.app/sitemap.xml`

### 2. Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site: `https://masanawa.vercel.app`
3. Verify ownership (similar to Google)
4. Submit sitemap: `https://masanawa.vercel.app/sitemap.xml`

### 3. Manual URL Submission (Immediate Indexing)
For faster indexing of important pages:

**Google:**
- Use [Google URL Inspection Tool](https://search.google.com/search-console) (requires Search Console setup)
- Request indexing for key pages like homepage, about, contact

**Bing:**
- Use [Bing URL Submission](https://www.bing.com/webmasters/url-submission)

## Files Already in Your Site

✅ **robots.txt** - Tells search engines what to crawl
✅ **ads.txt** - For Google AdSense verification

## Next Steps to Create

### Generate a Sitemap
You need to create a `sitemap.xml` file. For Astro, you can:

1. **Manual Option**: Create `public/sitemap.xml` with your pages
2. **Automatic Option**: Install Astro sitemap integration:
   ```bash
   npm install @astrojs/sitemap
   ```
   Then add to `astro.config.mjs`:
   ```javascript
   import sitemap from '@astrojs/sitemap';
   
   export default defineConfig({
     site: 'https://masanawa.vercel.app',
     integrations: [tailwind(), sitemap()]
   });
   ```

## Timeline
- **Google**: Usually indexes within 1-7 days after submission
- **Bing**: Usually indexes within 1-2 weeks
- **AdSense Verification**: 24-48 hours after deployment

## Pro Tips
1. **Submit early**: Don't wait for Google to find you naturally
2. **Update sitemap**: Whenever you add new pages, update your sitemap
3. **Monitor**: Check Google Search Console weekly for indexing status and errors
4. **Social signals**: Share your site on social media to help with discovery
