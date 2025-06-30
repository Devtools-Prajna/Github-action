const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

function convertUnits(value, fromUnit, toUnit) {
  const conversions = {
    m: 1,
    cm: 0.01,
    mm: 0.001,
    km: 1000
  };

  if (!conversions[fromUnit] || !conversions[toUnit]) {
    throw new Error('Unsupported units');
  }

  const valueInMeters = value * conversions[fromUnit];
  return valueInMeters / conversions[toUnit];
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    const htmlPath = path.join(__dirname, 'index.html');
    const html = fs.readFileSync(htmlPath);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
    return;
  }

  if (parsedUrl.pathname === '/convert') {
    try {
      const value = parseFloat(parsedUrl.query.value);
      const from = parsedUrl.query.from;
      const to = parsedUrl.query.to;

      const result = convertUnits(value, from, to);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({ result }));
    } catch (e) {
      res.writeHead(400, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({ error: e.message }));
    }
    return;
  }

  res.writeHead(404);
  res.end('Not Found');
});

// Use environment PORT or default 3000 for Azure compatibility
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = convertUnits;
