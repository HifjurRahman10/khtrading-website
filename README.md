# KH Trading — khtrading.ca (GitHub Pages)

Site for **[khtrading.ca](https://www.khtrading.ca)** hosted free on GitHub Pages.  
GitHub account: [HifjurRahman10](https://github.com/HifjurRahman10)

## Push to GitHub (one time)

1. Create a repo: [github.com/new](https://github.com/new)  
   - Name: **`khtrading-website`** (or **`HifjurRahman10.github.io`** if you want `https://HifjurRahman10.github.io` without a repo path)  
   - **Public** → Create repository (no README, no .gitignore)

2. In PowerShell:

   ```powershell
   cd "C:\Users\HIFZUR RAHMAN\Desktop\website"
   git add .
   git commit -m "KH Trading site for khtrading.ca"
   git remote add origin https://github.com/HifjurRahman10/khtrading-website.git
   git push -u origin main
   ```

   If you used a different repo name, change the `remote add` URL.

3. **Settings → Pages** on that repo  
   - **Source**: Deploy from a branch → **main** → **/ (root)**  
   - **Custom domain**: `www.khtrading.ca` → Save  
   - After DNS works, enable **Enforce HTTPS**

   Preview URL (until DNS works): `https://hifjurrahman10.github.io/khtrading-website/`  
   (GitHub usernames in URLs are lowercase.)

## Connect GoDaddy domain to GitHub Pages

GitHub shows the exact DNS records under **Settings → Pages → Custom domain**. Use these patterns:

### Option A — `www` subdomain (easiest)

In **GoDaddy** → your domain → **DNS** → **Add** records:

| Type  | Name | Value                         | TTL  |
|-------|------|-------------------------------|------|
| CNAME | www  | `HifjurRahman10.github.io`    | 1 hr |

In GitHub Pages custom domain, enter: `www.khtrading.ca`  
(This repo’s `CNAME` file already contains `www.khtrading.ca`.)

Optional: forward `https://khtrading.ca` → `https://www.khtrading.ca` in GoDaddy **Forwarding**.

### Option B — apex domain (`yourdomain.com` without www)

GitHub requires **A records** for the apex (IPs can change — always confirm in GitHub Pages docs):

| Type | Name | Value           |
|------|------|-----------------|
| A    | @    | `185.199.108.153` |
| A    | @    | `185.199.109.153` |
| A    | @    | `185.199.110.153` |
| A    | @    | `185.199.111.153` |

Set custom domain in GitHub to `yourdomain.com` and `CNAME` to `yourdomain.com`.

Remove conflicting GoDaddy **parking** A/CNAME records for `@` and `www` if the site does not load.

### HTTPS

After DNS propagates (minutes to 48 hours), enable **Enforce HTTPS** on the GitHub Pages settings page.

## Local preview

Open `index.html` in a browser, or:

```bash
npx --yes serve .
```

## File layout

```
website/
├── index.html
├── css/styles.css
├── js/main.js
├── CNAME          ← your custom domain (required for custom domain on Pages)
└── README.md
```
