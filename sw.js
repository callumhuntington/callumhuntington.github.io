// Offline support. Pages and data are fetched fresh when online (so updates show up without reinstalling),
// and served from the cache when offline.
const CACHE = 'russian-tools-v3.3';
const FILES = [
  './',
  'bear_happy.png',
  'bear_neutral.png',
  'bear_sad.png',
  'css/app.css',
  'css/fonts.css',
  'data/bank.js',
  'data/names.js',
  'data/reading.js',
  'data/verbs.js',
  'exercises.html',
  'fonts/dm-sans-latin-400-italic.woff2',
  'fonts/dm-sans-latin-400-normal.woff2',
  'fonts/dm-sans-latin-500-normal.woff2',
  'fonts/dm-sans-latin-ext-400-italic.woff2',
  'fonts/dm-sans-latin-ext-400-normal.woff2',
  'fonts/dm-sans-latin-ext-500-normal.woff2',
  'fonts/onest-cyrillic-400-normal.woff2',
  'fonts/onest-cyrillic-500-normal.woff2',
  'fonts/onest-cyrillic-ext-400-normal.woff2',
  'fonts/onest-cyrillic-ext-500-normal.woff2',
  'fonts/onest-latin-400-normal.woff2',
  'fonts/onest-latin-500-normal.woff2',
  'fonts/onest-latin-ext-400-normal.woff2',
  'fonts/onest-latin-ext-500-normal.woff2',
  'fonts/pacifico-cyrillic-400-normal.woff2',
  'fonts/pacifico-cyrillic-ext-400-normal.woff2',
  'fonts/pacifico-latin-400-normal.woff2',
  'fonts/pacifico-latin-ext-400-normal.woff2',
  'fonts/sofia-sans-extra-condensed-cyrillic-900-normal.woff2',
  'fonts/sofia-sans-extra-condensed-cyrillic-ext-900-normal.woff2',
  'fonts/sofia-sans-extra-condensed-latin-900-normal.woff2',
  'fonts/sofia-sans-extra-condensed-latin-ext-900-normal.woff2',
  'icon-512.png',
  'icon.png',
  'index.html',
  'js/common.js',
  'js/icons.js',
  'js/names-bank.js',
  'manifest.json',
  'names.html',
  'quiz.html',
  'reading.html',
  'russian_verb_conjugator.html',
  'topic.html',
  'topics.html'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  if (e.request.url.includes('/fonts/')) {  // fonts never change: cache first
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
    return;
  }
  e.respondWith(
    fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
