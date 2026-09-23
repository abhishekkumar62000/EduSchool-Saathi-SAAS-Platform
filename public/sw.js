// EduSchool Saathi v2 — Advanced Service Worker
// Stale-While-Revalidate + Network-First Strategy for SEO-critical pages
// Critical: This ensures fast TTFB scores which directly boost Google rankings

const CACHE_STATIC = 'edu-static-v2';
const CACHE_PAGES  = 'edu-pages-v2';
const CACHE_FONTS  = 'edu-fonts-v2';

const STATIC_ASSETS = [
  '/',
  '/schools-network',
  '/manifest.json',
  '/llms.txt',
  '/llms-full.txt',
  '/logo-optimized.png',
  '/pwa-192x192.png',
  '/pwa-512x512.png',
  '/apple-touch-icon.png',
  '/favicon.png',
  '/sitemap.xml',
];

// ─── Install: Pre-cache shell ─────────────────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_STATIC).then((cache) =>
      cache.addAll(STATIC_ASSETS).catch((err) =>
        console.warn('[EduSchool Saathi SW] Pre-cache partial failure:', err)
      )
    )
  );
  self.skipWaiting();
});

// ─── Activate: Clean stale caches ─────────────────────────────────────────────
self.addEventListener('activate', (event) => {
  const VALID_CACHES = [CACHE_STATIC, CACHE_PAGES, CACHE_FONTS];
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => !VALID_CACHES.includes(key))
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// ─── Fetch Strategy ────────────────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // 1. Google Fonts — Cache-First (fonts rarely change)
  if (url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com') {
    event.respondWith(cacheFirst(event.request, CACHE_FONTS));
    return;
  }

  // 2. Static assets (images, icons, manifests) — Stale-While-Revalidate
  if (
    url.pathname.match(/\.(png|jpg|jpeg|svg|ico|gif|webp|woff2?|ttf|otf|json)$/) ||
    url.pathname === '/manifest.json'
  ) {
    event.respondWith(staleWhileRevalidate(event.request, CACHE_STATIC));
    return;
  }

  // 3. HTML pages (SEO-critical) — Network-First with 3s timeout, fallback to cache
  if (event.request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirstHtml(event.request));
    return;
  }

  // 4. Everything else — Stale-While-Revalidate
  event.respondWith(staleWhileRevalidate(event.request, CACHE_PAGES));
});

// ─── Strategy Implementations ─────────────────────────────────────────────────

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return cached || new Response('Offline', { status: 503 });
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cached = await caches.match(request);
  const networkFetch = fetch(request).then(async (response) => {
    if (response && response.status === 200) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => null);

  return cached || await networkFetch || new Response('Offline', { status: 503 });
}

async function networkFirstHtml(request) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);
    const response = await fetch(request, { signal: controller.signal });
    clearTimeout(timeout);

    if (response && response.status === 200) {
      const cache = await caches.open(CACHE_PAGES);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request) || await caches.match('/');
    return cached || new Response(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width,initial-scale=1"/>
          <title>EduSchool Saathi — Offline</title>
          <style>
            body{font-family:sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#020617;color:#fff;text-align:center;padding:1rem}
            h1{font-size:1.5rem;font-weight:900;background:linear-gradient(90deg,#ff671f,#38bdf8,#4ade80);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
            p{color:#94a3b8;margin-top:.5rem}
            a{color:#38bdf8;font-weight:700;text-decoration:none}
          </style>
        </head>
        <body>
          <div>
            <h1>EduSchool Saathi™</h1>
            <p>आप offline हैं — You are offline. Please reconnect to access the platform.</p>
            <p style="margin-top:1rem"><a href="https://eduschoolsaathi.org">Visit Official Website ↗</a></p>
          </div>
        </body>
      </html>
    `, { status: 200, headers: { 'Content-Type': 'text/html' } });
  }
}
