self.addEventListener("install", event => {
  console.log("Service Worker installed");
});

self.addEventListener("fetch", () => {
  // Optional: Add caching logic here
});
