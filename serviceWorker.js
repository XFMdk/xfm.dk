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
    if (URL.origin === location.origin) {
        event.respondWith(cacheFirst(request))
    } else {
        event.respondWith(networkFirst(request))
    }
})

async function cacheFirst(request) {
    const cachedResponse = await caches.match(request)
    return cachedResponse || fetch(request)
}

async function networkFirst(request) {
    const cache = await caches.open('xfm-static')

    try {
        const response = await fetch(request)
        cache.put(request, response.clone())
        return response
    } catch(error) {
        return await cache.match(request)
    }
}
