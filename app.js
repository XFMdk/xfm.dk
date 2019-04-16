window.addEventListener('load', async e => {
    if (ServiceWorker in navigator) {
        try {
            navigator.serviceWorker.register('sw.js');
            console.log("Service Worker registered.")
        } catch(error) {
            console.log("Failed to register Service Worker", error)
        }
    }
});
