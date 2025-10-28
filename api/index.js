export default function handler(req, res) {
  const url = req.url || '/';

  // Allow OAuth callback
  if (url.startsWith('/api/auth/callback')) {
    return res.status(200).send('OK');
  }

  // Redirect only if request comes from root domain
  if (req.headers.host === 'mailmind.online') {
    return res.redirect(308, `https://www.mailmind.online${url}`);
  }

  // Otherwise, do nothing; let Vercel serve the landing page normally
  res.status(200).end();
}
