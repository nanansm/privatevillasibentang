import puppeteer from "puppeteer-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const [, , url, out, w = "390", h = "844"] = process.argv;
const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new",
  args: ["--hide-scrollbars","--disable-gpu",`--user-data-dir=${process.env.PROF}`,"--no-first-run"] });
const page = await browser.newPage();
await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
await page.setViewport({ width: +w, height: +h, deviceScaleFactor: 2, isMobile: +w < 700, hasTouch: +w < 700 });
await page.goto(url, { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);
await page.evaluate(async () => { for (let y=0;y<document.body.scrollHeight;y+=500){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,100));} window.scrollTo(0,0); });
await new Promise(r => setTimeout(r, 500));
const i = await page.evaluate(() => ({ scrollW: document.documentElement.scrollWidth, clientW: document.documentElement.clientWidth, pageH: document.documentElement.scrollHeight }));
await page.screenshot({ path: out, fullPage: true });
console.log(JSON.stringify(i));
await browser.close();
