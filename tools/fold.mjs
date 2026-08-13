import puppeteer from "puppeteer-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const [, , url, w, h] = process.argv;
const b = await puppeteer.launch({ executablePath: CHROME, headless: "new",
  args: ["--hide-scrollbars","--disable-gpu",`--user-data-dir=${process.env.PROF}`,"--no-first-run"] });
const p = await b.newPage();
await p.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
await p.setViewport({ width: +w, height: +h, deviceScaleFactor: 1, isMobile: +w < 500, hasTouch: +w < 500 });
await p.goto(url, { waitUntil: "networkidle0" });
const r = await p.evaluate((vh) => {
  const y = (el) => el ? Math.round(el.getBoundingClientRect().top + window.scrollY) : null;
  const imgs = [...document.querySelectorAll("main img")].map(el => ({
    src: el.currentSrc.split("/").pop().slice(0,22), top: y(el), h: Math.round(el.getBoundingClientRect().height)
  }));
  const wa = [...document.querySelectorAll('a[href*="wa.me"]')].map(el => ({
    y: y(el), tag: el.className.includes("bg-kertas") ? "BUTTON" : "link", txt: el.textContent.trim().slice(0,34)
  }));
  return { pageH: document.body.scrollHeight, viewportH: vh,
    h1Top: y(document.querySelector("h1")), firstImg: imgs[0], imgs: imgs.slice(0,4), wa };
}, +h);
console.log(JSON.stringify(r, null, 1));
await b.close();
