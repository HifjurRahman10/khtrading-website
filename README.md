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

### Enable HTTPS (free — via GitHub, not GoDaddy SSL)

You do **not** need to buy SSL from GoDaddy. GitHub issues the certificate once DNS is correct.

1. Open [Pages settings](https://github.com/HifjurRahman10/khtrading-website/settings/pages).
2. **Custom domain:** set **`www.khtrading.ca`** only. If **`khtrading.ca`** is listed and shows an error, remove it until apex DNS is set (or add apex **A** records below).
3. Wait until the domain check is green, then turn on **Enforce HTTPS** (the checkbox stays grey until the certificate is ready — often 15 minutes to 24 hours after DNS fixes).
4. Click **Check again** if it has been more than an hour.

**GoDaddy DNS for `www` (required):**

| Type  | Name | Value                    |
|-------|------|--------------------------|
| CNAME | www  | `HifjurRahman10.github.io` |

**Optional — HTTPS on bare `khtrading.ca` (no www):** add four **A** records for **@**:

| Type | Name | Value             |
|------|------|-------------------|
| A    | @    | `185.199.108.153` |
| A    | @    | `185.199.109.153` |
| A    | @    | `185.199.110.153` |
| A    | @    | `185.199.111.153` |

Then add **`khtrading.ca`** in GitHub Pages custom domain (alongside or instead of www — GitHub docs recommend one primary; many sites use www + forward apex).

Remove GoDaddy **Website Builder**, **parking**, or purchased **SSL** on this domain if they intercept traffic — they block GitHub’s certificate.

### Site looks blank?

GitHub redirects `*.github.io/khtrading-website` to **www.khtrading.ca**. If **HTTPS** is not ready yet, browsers show a blank or certificate error page.

1. Try **http://www.khtrading.ca** — content should load.
2. In repo **Settings → Pages → Custom domain**, enter only **`www.khtrading.ca`** (remove bare `khtrading.ca` if it appears as an alternate until apex DNS is set).
3. GoDaddy: **CNAME** `www` → `HifjurRahman10.github.io`; delete parking **A** records on `@`.
4. Wait up to 24 hours, click **Check again**, then enable **Enforce HTTPS**.

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
