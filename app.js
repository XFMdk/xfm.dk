window.addEventListener('load', async e => {
    if ("serviceWorker" in navigator) {
        try {
            navigator.serviceWorker.register('serviceWorker.js');
            console.log("Service Worker registered.")
        } catch(error) {
            console.log("Failed to register Service Worker", error)
        }
    }
});
