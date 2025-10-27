export default async function handler(req, res) {
  const target = 'https://pdxzsechmajiehemaycw.supabase.co/functions/v1/google-oauth-callback';

  const url = new URL(target);
  url.search = req.url.split('?')[1] || '';

  const response = await fetch(url.toString(), {
    method: req.method,
    headers: req.headers,
    body: req.method === 'POST' ? req.body : undefined,
  });

  const text = await response.text();
  res.status(response.status).send(text);
}
