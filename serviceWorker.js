const staticAssetes = [
    "./",
    "./styles.css",
    "./app.js",
    "./assets/favicon.png",
    "./assets/logo.svg",
]

self.addEventListener('install', async event => {
    const cache = await caches.open('xfm-static')
    cache.addAll(staticAssetes)
})

self.addEventListener('fetch', event => {
    const request = event.request
    event.respondWith(cacheFirst(request))
})

async function cacheFirst(request) {
    const cachedResponse = await caches.match(request)
    return cachedResponse || fetch(request)
}