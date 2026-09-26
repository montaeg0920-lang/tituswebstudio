# Titus Web Studio

This is a Vercel-ready, static marketing site with a server-side inquiry endpoint. It is intentionally not deployed.

## Fastest GitHub upload

1. Create an empty repository at [github.com/new](https://github.com/new). Do not add a README, `.gitignore`, or license there.
2. Unzip the provided project archive and drag the extracted files into the repository's **Add file → Upload files** page, then click **Commit changes**.
3. Keep `.env.example`, but never upload a real `.env.local` file or a Resend API key.

For repeat updates, GitHub Desktop is the easiest route: choose **Add → Add existing repository**, select this project folder, then choose **Publish repository**.

## Preview locally

Open the contents of `public/` with any static server for a visual-only preview. The included inquiry endpoint runs when the project is served by Vercel (or `vercel dev`).

## Activate inquiry emails before deployment

1. Create a Resend account and verify a sending domain.
2. Copy `.env.example` to `.env.local`.
3. Set `RESEND_API_KEY` and `RESEND_FROM_EMAIL` using that verified domain.
4. Add the same two environment variables in the future Vercel project's settings.

The form submits only to the server-side `/api/send-inquiry` route. It sends every valid inquiry to `tituswebdesign1@gmail.com` and sets the sender's email as the reply-to address. The email-service key is never exposed in the browser.
