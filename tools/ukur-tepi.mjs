import puppeteer from "puppeteer-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const [, , url, w] = process.argv;
const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new",
  args: ["--hide-scrollbars","--disable-gpu",`--user-data-dir=${process.env.PROF}`,"--no-first-run"] });
const page = await browser.newPage();
await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
await page.setViewport({ width: +w, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle0" });
await page.evaluate(async () => { for (let y=0;y<document.body.scrollHeight;y+=500){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,60));} window.scrollTo(0,0); });
const rows = await page.evaluate(() => {
  const out = [];
  document.querySelectorAll("main img, main h2, main h1, footer img").forEach(el => {
    const r = el.getBoundingClientRect();
    const sec = el.closest("section")?.className.split(" ")[0] || "?";
    out.push({ tag: el.tagName, sec, left: Math.round(r.left), right: Math.round(r.right), w: Math.round(r.width) });
  });
  return out;
});
console.log(JSON.stringify(rows, null, 0).replace(/},/g, "},\n"));
await browser.close();
