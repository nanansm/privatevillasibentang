// Ukur LCP + CLS + bobot transfer di kondisi HP kelas menengah.
// Pakai: node tools/ukur.mjs <url>
import puppeteer from "puppeteer-core";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const url = process.argv[2];
if (!url) { console.error("pakai: node tools/ukur.mjs <url>"); process.exit(1); }

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });

const cdp = await page.createCDPSession();
await cdp.send("Network.enable");
// Slow 4G, mirip jaringan tamu di Garut
await cdp.send("Network.emulateNetworkConditions", {
  offline: false,
  latency: 150,
  downloadThroughput: (1.6 * 1024 * 1024) / 8,
  uploadThroughput: (750 * 1024) / 8,
});
await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });

let bytes = 0;
page.on("response", async (r) => {
  try {
    const len = Number(r.headers()["content-length"] || 0);
    bytes += len;
  } catch {}
});

await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });

const m = await page.evaluate(
  () =>
    new Promise((resolve) => {
      let lcp = 0, cls = 0;
      new PerformanceObserver((l) => {
        for (const e of l.getEntries()) lcp = e.startTime;
      }).observe({ type: "largest-contentful-paint", buffered: true });
      new PerformanceObserver((l) => {
        for (const e of l.getEntries()) if (!e.hadRecentInput) cls += e.value;
      }).observe({ type: "layout-shift", buffered: true });
      const fcp = performance.getEntriesByName("first-contentful-paint")[0];
      setTimeout(
        () => resolve({ lcp: Math.round(lcp), cls: +cls.toFixed(4), fcp: Math.round(fcp?.startTime || 0) }),
        1200,
      );
    }),
);

console.log(JSON.stringify({ url, ...m, transferKB: Math.round(bytes / 1024) }));
await browser.close();
