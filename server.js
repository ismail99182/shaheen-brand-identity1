const http = require('http');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
}

const PORT = process.env.PORT || 3000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

const server = http.createServer(async (req, res) => {
  if (req.url === '/health') {
    sendJson(res, 200, { ok: true, keyConfigured: Boolean(GEMINI_API_KEY) });
    return;
  }

  if (req.url.startsWith('/api/gemini')) {
    if (!GEMINI_API_KEY) {
      sendJson(res, 500, { error: 'GEMINI_API_KEY is not configured.' });
      return;
    }

    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const payload = JSON.parse(body || '{}');
        const targetUrl = payload.url;
        if (!targetUrl) {
          sendJson(res, 400, { error: 'Missing target URL.' });
          return;
        }

        const upstream = await fetch(targetUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'x-goog-api-key': GEMINI_API_KEY
          },
          body: JSON.stringify(payload.body)
        });

        const data = await upstream.text();
        res.writeHead(upstream.status, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(data);
      } catch (error) {
        sendJson(res, 500, { error: error.message });
      }
    });
    return;
  }

  const filePath = path.join(__dirname, 'shaheen_developers_brand_identity_system.html');
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(readFile(filePath));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not found');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
