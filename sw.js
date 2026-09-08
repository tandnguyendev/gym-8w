/* Service worker: cho phép cài lên màn hình chính và chạy offline khi phòng gym sóng yếu. */
const VERSION = "so-sat-v5";
const CORE = ["./", "./index.html", "./manifest.webmanifest",
  "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png", "./favicon.svg",
  "./img/squat-0.jpg", "./img/squat-1.jpg",
  "./img/bench-0.jpg", "./img/bench-1.jpg",
  "./img/pullup-0.jpg", "./img/pullup-1.jpg",
  "./img/rdl-0.jpg", "./img/rdl-1.jpg",
  "./img/facepull-0.jpg", "./img/facepull-1.jpg",
  "./img/legraise-0.jpg", "./img/legraise-1.jpg",
  "./img/deadlift-0.jpg", "./img/deadlift-1.jpg",
  "./img/ohp-0.jpg", "./img/ohp-1.jpg",
  "./img/row-0.jpg", "./img/row-1.jpg",
  "./img/bss-0.jpg", "./img/bss-1.jpg",
  "./img/lateral-0.jpg", "./img/lateral-1.jpg",
  "./img/curl-0.jpg", "./img/curl-1.jpg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION)
    .then(c => Promise.allSettled(CORE.map(u => c.add(u))))
    .then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;

  // Trang chính: ưu tiên mạng để nhận bản mới; mất mạng thì lấy bản đã lưu.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).then(r => {
        const copy = r.clone();
        caches.open(VERSION).then(c => c.put("./index.html", copy)).catch(() => {});
        return r;
      }).catch(() => caches.match("./index.html").then(r => r || caches.match("./")))
    );
    return;
  }

  // Icon, font, manifest: lấy cache trước cho nhanh, đồng thời cập nhật ngầm.
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(r => {
      if (r && (r.ok || r.type === "opaque")) {
        const copy = r.clone();
        caches.open(VERSION).then(c => c.put(req, copy)).catch(() => {});
      }
      return r;
    }).catch(() => hit);
    return hit || net;
  }));
});
