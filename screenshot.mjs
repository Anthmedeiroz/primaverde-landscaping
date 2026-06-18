import puppeteer from 'puppeteer';
import { mkdir, readdir } from 'node:fs/promises';

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';
const width = Number(process.argv[4] || 1440);
const dir = './temporary screenshots';
await mkdir(dir, { recursive: true });

const existing = (await readdir(dir)).filter(f => f.startsWith('screenshot-'));
const n = existing.length + 1;
const name = `screenshot-${n}${label ? '-' + label : ''}.png`;

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
// scroll through to trigger IntersectionObserver reveals
await page.evaluate(async () => {
  await new Promise(resolve => {
    let y = 0;
    const step = window.innerHeight * 0.6;
    const timer = setInterval(() => {
      window.scrollTo(0, y);
      y += step;
      if (y > document.body.scrollHeight) { clearInterval(timer); resolve(); }
    }, 120);
  });
});
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise(r => setTimeout(r, 1200));
await page.screenshot({ path: `${dir}/${name}`, fullPage: true });
await browser.close();
console.log(`${dir}/${name}`);
