# KH Trading website

Static corporate site for **KH Trading**, a Canadian pulse exporter. Plain HTML, CSS, and JavaScript — no build step.

**Live (after deploy):** [www.khtrading.ca](https://www.khtrading.ca)  
**GitHub:** [HifjurRahman10/khtrading-website](https://github.com/HifjurRahman10/khtrading-website)

## Local preview

Open `index.html` in a browser, or from this folder:

```powershell
npx --yes serve .
```

Then visit `http://localhost:3000`.

## Edit content

| What | Where |
|------|--------|
| Home hero and key points | `index.html` |
| Company story, products, markets | `about.html` — search for `[EDIT]` |
| Phone, address, form setup | `contact.html` |
| Privacy wording | `privacy.html` |
| Colours and layout | `css/styles.css` (`:root` variables) |
| Contact form validation / mailto fallback | `js/main.js` |
| Hero and pulse images | Replace files in `images/` (see TODO comments in HTML) |
| Favicon | Replace `favicon.svg` |
| Site URL in SEO | `sitemap.xml`, `robots.txt`, and `link rel="canonical"` / Open Graph URLs in each HTML file |

### Contact form (Formspree)

1. Create a form at [formspree.io](https://formspree.io).
2. In `contact.html`, replace `YOUR_FORM_ID` in the form `action` URL.
3. Submit a test message. Until the ID is set, the form uses a **mailto** fallback to `hifjur@khtrading.ca`.

### Netlify Forms (alternative)

Deploy on Netlify and add `netlify` to the `<form>` tag; remove or adjust the Formspree `action`. See [Netlify Forms docs](https://docs.netlify.com/forms/setup/).

## Deploy

### GitHub Pages (current)

```powershell
cd "C:\Users\HIFZUR RAHMAN\Desktop\website"
git add .
git commit -m "Update site"
git push
```

Repo **Settings → Pages**: branch `main`, folder `/ (root)`, custom domain `www.khtrading.ca`.

**GoDaddy DNS:** CNAME `www` → `HifjurRahman10.github.io` (not parking IPs).

### Other hosts

Upload the entire folder to Netlify, Cloudflare Pages, or any static host. No build command required; publish directory is the project root.

## File structure

```
index.html          Home
about.html          About
contact.html        Contact
privacy.html        Privacy policy
css/styles.css      Styles
js/main.js          Nav toggle, form validation, footer year
images/             Placeholder SVGs — replace with real photos
favicon.svg         Placeholder favicon
robots.txt
sitemap.xml
CNAME               www.khtrading.ca (GitHub Pages custom domain)
```

## Placeholders you still need to fill

- **[EDIT]** Full legal company name (`about.html`, `privacy.html`)
- **[EDIT]** City, province (`about.html`, `contact.html`)
- **[EDIT]** Phone / WhatsApp (`contact.html`)
- **[EDIT]** Street address and postal code (`contact.html`, `privacy.html`)
- **[EDIT]** Optional: regions served, company approach (`about.html`)
- **TODO** Formspree form ID (`contact.html`)
- **TODO** Replace `images/hero-prairie.svg`, `images/pulses.svg` with licensed or original photos
- **TODO** Replace `favicon.svg` with final brand icon
- **TODO** Name form processor in `privacy.html` once Formspree/Netlify is configured
