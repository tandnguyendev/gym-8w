/* Service worker: cho phép cài lên màn hình chính và chạy offline khi phòng gym sóng yếu. */
const VERSION = "so-sat-v10";
const CORE = ["./", "./index.html", "./manifest.webmanifest",
  "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png", "./favicon.svg",
  "./img/bench-0.jpg", "./img/bench-1.jpg",
  "./img/benchdip-0.jpg", "./img/benchdip-1.jpg",
  "./img/bss-0.jpg", "./img/bss-1.jpg",
  "./img/cablecrunch-0.jpg", "./img/cablecrunch-1.jpg",
  "./img/cablecurl-0.jpg", "./img/cablecurl-1.jpg",
  "./img/cablelateral-0.jpg", "./img/cablelateral-1.jpg",
  "./img/cablerow-0.jpg", "./img/cablerow-1.jpg",
  "./img/calf-0.jpg", "./img/calf-1.jpg",
  "./img/calfmachine-0.jpg", "./img/calfmachine-1.jpg",
  "./img/chestpress-0.jpg", "./img/chestpress-1.jpg",
  "./img/curl-0.jpg", "./img/curl-1.jpg",
  "./img/dbbench-0.jpg", "./img/dbbench-1.jpg",
  "./img/dbcurl-0.jpg", "./img/dbcurl-1.jpg",
  "./img/dbohp-0.jpg", "./img/dbohp-1.jpg",
  "./img/dbrdl-0.jpg", "./img/dbrdl-1.jpg",
  "./img/dbrow-0.jpg", "./img/dbrow-1.jpg",
  "./img/deadlift-0.jpg", "./img/deadlift-1.jpg",
  "./img/ezcurl-0.jpg", "./img/ezcurl-1.jpg",
  "./img/facepull-0.jpg", "./img/facepull-1.jpg",
  "./img/goblet-0.jpg", "./img/goblet-1.jpg",
  "./img/hack-0.jpg", "./img/hack-1.jpg",
  "./img/incline-0.jpg", "./img/incline-1.jpg",
  "./img/inclinemachine-0.jpg", "./img/inclinemachine-1.jpg",
  "./img/lateral-0.jpg", "./img/lateral-1.jpg",
  "./img/legcurl-0.jpg", "./img/legcurl-1.jpg",
  "./img/legpress-0.jpg", "./img/legpress-1.jpg",
  "./img/legraise-0.jpg", "./img/legraise-1.jpg",
  "./img/lunge-0.jpg", "./img/lunge-1.jpg",
  "./img/lyingraise-0.jpg", "./img/lyingraise-1.jpg",
  "./img/machohp-0.jpg", "./img/machohp-1.jpg",
  "./img/nordic-0.jpg", "./img/nordic-1.jpg",
  "./img/ohext-0.jpg", "./img/ohext-1.jpg",
  "./img/ohp-0.jpg", "./img/ohp-1.jpg",
  "./img/pulldown-0.jpg", "./img/pulldown-1.jpg",
  "./img/pullup-0.jpg", "./img/pullup-1.jpg",
  "./img/pushdown-0.jpg", "./img/pushdown-1.jpg",
  "./img/pushupfeet-0.jpg", "./img/pushupfeet-1.jpg",
  "./img/rackpull-0.jpg", "./img/rackpull-1.jpg",
  "./img/rdl-0.jpg", "./img/rdl-1.jpg",
  "./img/rearfly-0.jpg", "./img/rearfly-1.jpg",
  "./img/reversepec-0.jpg", "./img/reversepec-1.jpg",
  "./img/revlunge-0.jpg", "./img/revlunge-1.jpg",
  "./img/ropecurl-0.jpg", "./img/ropecurl-1.jpg",
  "./img/row-0.jpg", "./img/row-1.jpg",
  "./img/seatedcalf-0.jpg", "./img/seatedcalf-1.jpg",
  "./img/seatedlateral-0.jpg", "./img/seatedlateral-1.jpg",
  "./img/seatedlegcurl-0.jpg", "./img/seatedlegcurl-1.jpg",
  "./img/smithsquat-0.jpg", "./img/smithsquat-1.jpg",
  "./img/squat-0.jpg", "./img/squat-1.jpg",
  "./img/stepup-0.jpg", "./img/stepup-1.jpg",
  "./img/trapbar-0.jpg", "./img/trapbar-1.jpg"];

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
