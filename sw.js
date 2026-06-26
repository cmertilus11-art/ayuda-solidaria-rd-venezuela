// ================================================================
// SERVICE WORKER — Ayuda Solidaria RD hacia Venezuela
// ================================================================
// Estrategia: "cache-first" para el shell de la app (HTML/CSS/JS/íconos)
// y librerías externas (Leaflet, fuentes), de modo que una vez cargado
// el sitio una vez con internet, funcione completo sin conexión.
//
// IMPORTANTE: sube la versión de CACHE_NAME cada vez que cambies
// index.html, app.js o los estilos, para forzar que los usuarios
// reciban la actualización en su próxima visita con red.
// ================================================================

const CACHE_NAME = 'ayuda-solidaria-v1';

// Archivos propios del sitio (rutas relativas, funcionan en GitHub Pages
// tanto en la raíz como en un subdirectorio de proyecto).
const APP_SHELL = [
  './',
  './index.html',
  './app.js',
  './firebase-config.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
];

// Recursos externos que conviene cachear también (mapa y tipografías).
const EXTERNAL_SHELL = [
  'https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=Inter:wght@400;500;600&display=swap',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Los archivos propios son críticos; si fallan, queremos saberlo.
      // Los externos son "best effort": si uno falla (ej. sin red en el
      // primer install), no debe tumbar la instalación completa.
      return cache.addAll(APP_SHELL).then(() =>
        Promise.allSettled(EXTERNAL_SHELL.map(url => cache.add(url)))
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // No interceptar llamadas a Firebase/Firestore ni a Nominatim:
  // esas necesitan ir siempre a la red (o fallar limpiamente si no hay
  // conexión) para que la lógica de sincronización de app.js funcione
  // correctamente.
  const url = new URL(request.url);
  const isLiveData = url.hostname.includes('firestore.googleapis.com')
    || url.hostname.includes('firebaseio.com')
    || url.hostname.includes('googleapis.com')
    || url.hostname.includes('nominatim.openstreetmap.org')
    || url.hostname.includes('tile.openstreetmap.org');
  if (isLiveData) return; // deja pasar sin tocar (no responde el SW)

  // Cache-first para todo lo demás (shell de la app, fuentes, Leaflet, tiles del mapa base).
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((response) => {
          // Solo cacheamos respuestas válidas y same-origin o de nuestra
          // lista de externos, para no llenar el cache con basura.
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => {
          // Si es una navegación HTML y no hay red ni cache, mostramos
          // el index como último recurso (modo offline total).
          if (request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
    })
  );
});
