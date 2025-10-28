export default function handler(req, res) {
  const url = req.url || '/';

  // Keep OAuth callback working
  if (url.startsWith('/api/auth/callback')) {
    return res.status(200).send('OK');
  }

  // Avoid redirecting if already at www
  if (req.headers.host === 'www.mailmind.online') {
    return res.status(200).send('OK'); // Serve content normally
  }

  // Redirect root or other paths from mailmind.online to www
  res.redirect(308, `https://www.mailmind.online${url}`);
}
