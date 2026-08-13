// Screenshot pratinjau di lebar mobile sungguhan.
// Chrome di macOS punya lebar jendela minimum (~500px), jadi 390px HARUS lewat
// emulasi device metrics, bukan --window-size.
// Pakai: node tools/shot.mjs <url> <output.png> [lebar] [tinggi]
import puppeteer from "puppeteer-core";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const [, , url, out, w = "390", h = "844"] = process.argv;

if (!url || !out) {
  console.error("pakai: node tools/shot.mjs <url> <out.png> [w] [h]");
  process.exit(1);
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--hide-scrollbars", "--disable-gpu"],
});

const page = await browser.newPage();
await page.setViewport({
  width: Number(w),
  height: Number(h),
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});
await page.goto(url, { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);

// Native loading="lazy" cuma trigger saat elemen mendekati viewport lewat
// scroll sungguhan; resize viewport ke tinggi penuh (fullPage) TIDAK
// men-scroll, jadi foto di bawah lipatan bisa belum termuat saat screenshot
// diambil. Scroll dulu biar hasil fullPage merepresentasikan halaman asli.
if (process.env.FULL === "1") {
  await page.evaluate(async () => {
    const step = 600;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await new Promise((r) => setTimeout(r, 300));
}

// Lapor kalau halaman meluber ke samping — di mobile itu cacat, bukan selera.
const overflow = await page.evaluate(() => ({
  scrollW: document.documentElement.scrollWidth,
  clientW: document.documentElement.clientWidth,
  pageH: document.documentElement.scrollHeight,
}));

await page.screenshot({ path: out, fullPage: process.env.FULL === "1" });
console.log(JSON.stringify({ out, ...overflow, meluber: overflow.scrollW > overflow.clientW }));

await browser.close();
