# E&A Construction Website

## How to publish on Vercel

1. Log in to GitHub.
2. Create a new repository called `ea-construction`.
3. Upload these files:
   - index.html
   - styles.css
   - script.js
4. Log in to Vercel with GitHub.
5. Click **Add New → Project**.
6. Import the `ea-construction` repository.
7. Leave the settings as default and click **Deploy**.

## Important edits before publishing

In `index.html`, replace:
- `+44 0000 000000` with your real phone number.
- `440000000000` in the WhatsApp link with your number in international format.
- `eaconstruction.uk@gmail.com` with your real business email if different.
- Sample project cards with your real project photos.
- Sample reviews with genuine customer reviews.

In `script.js`, replace:
- `eaconstruction.uk@gmail.com` with your real email.

## Add real project photos

Put images in the same folder, for example:
- flooring.jpg
- kitchen.jpg
- paving.jpg

Then replace the sample backgrounds in `styles.css` with:
`background-image: linear-gradient(...), url("flooring.jpg");`

## Custom domain later

After buying a `.co.uk` domain, open your Vercel project:
**Settings → Domains → Add Domain**
