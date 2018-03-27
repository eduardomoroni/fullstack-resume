const puppeteer = require('puppeteer');

it('renders without crashing', async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  await page.screenshot({path: `screenshots/fullstack-resume-${new Date().getMilliseconds()}.png`});

  await browser.close();
});
