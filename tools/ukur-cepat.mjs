// Ukur LCP/FCP tanpa throttling, buat memisahkan cacat halaman dari beban mesin.
import puppeteer from "puppeteer-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const url = process.argv[2];
const b = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--hide-scrollbars"] });
const p = await b.newPage();
await p.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });
await p.goto(url, { waitUntil: "load", timeout: 60000 });
const m = await p.evaluate(() => new Promise((res) => {
  let lcp = 0;
  new PerformanceObserver((l) => { for (const e of l.getEntries()) lcp = e.startTime; })
    .observe({ type: "largest-contentful-paint", buffered: true });
  const fcp = performance.getEntriesByName("first-contentful-paint")[0];
  const nav = performance.getEntriesByType("navigation")[0];
  setTimeout(() => res({
    fcp: Math.round(fcp?.startTime || 0), lcp: Math.round(lcp),
    ttfb: Math.round(nav?.responseStart || 0), domInteractive: Math.round(nav?.domInteractive || 0),
  }), 800);
}));
console.log(JSON.stringify({ url, ...m }));
await b.close();
