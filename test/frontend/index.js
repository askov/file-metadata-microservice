const { expect } = require('chai'),
  puppeteer = require('puppeteer'),
  config = require('../../config'),
  server = require('../../server');

describe('Index page puppeteer tests', function () {
  let browser;
  let page;

  before(async function () {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  beforeEach(async function () {
    page = await browser.newPage()
    await page.goto(`http://localhost:${config.port}`);
  });

  afterEach(async function () {
    await page.close();
  });

  after(async function () {
    await browser.close();
    server.close();
  });


  it('file default placeholder text', async function () {
    const text = await page.evaluate(() => document.getElementById('file-info').innerHTML);
    expect(text).to.equal('File not selected');
  })

  it('filename label changes on file change', async function () {
    const input = await page.$('input[type="file"]');
    await input.uploadFile(__dirname + '/../../public/images/github.svg');
    const text = await page.evaluate(() => document.getElementById('file-info').innerHTML);
    // await page.waitFor(100);
    expect(text).to.equal('github.svg');
  })
});