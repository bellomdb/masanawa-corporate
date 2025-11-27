# Google AdSense Integration Guide

Use this guide to add Google AdSense to your other websites.

## 1. Your Publisher ID
**Publisher ID**: `pub-8370465467224716`
**CA Publisher ID**: `ca-pub-8370465467224716`

## 2. HTML Header Code
Add this code between the `<head>` and `</head>` tags of your website (usually in your main layout file or `index.html`).

```html
<!-- Google AdSense Meta Tag -->
<meta name="google-adsense-account" content="ca-pub-8370465467224716">

<!-- Google AdSense Script -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8370465467224716"
     crossorigin="anonymous"></script>
```

## 3. ads.txt File
Create a file named `ads.txt` in the **root** or **public** folder of your website (so it's accessible at `yourdomain.com/ads.txt`).

**File Content:**
```text
google.com, pub-8370465467224716, DIRECT, f08c47fec0942fa0
```

## Summary of Steps
1.  **Copy the HTML Code** into your site's `<head>`.
2.  **Create the `ads.txt` file** with the content above.
3.  **Deploy** your site.
4.  **Wait** for Google to verify your site (can take a few days).
