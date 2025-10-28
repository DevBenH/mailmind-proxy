export default function handler(req, res) {
  const url = req.url || '/';
  // Keep OAuth callback working
  if (url.startsWith('/api/auth/callback')) {
    return res.status(200).send('OK'); 
  }
  res.redirect(308, `https://www.mailmind.online${url}`);
}
