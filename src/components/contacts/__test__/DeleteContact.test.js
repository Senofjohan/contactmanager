const puppeteer = require('puppeteer');
let browser, page;

beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
  await page.goto('localhost:3000');
});

afterEach(async () => {
  await browser.close();
});

var addContact = async page => {
  const nameInput = await page.type('input[name=name]', 'Josh Johansen');
  const emailInput = await page.type('input[name=email]', 'josh@mail.com');
  const phoneInput = await page.type('input[name=phone]', '4151231234');
  const addContactButton = await page.click("input[value='Add Contact']");
};

var totalContactsCount = async page => {
  await page.evaluate(() => {
    let contacts = document.querySelectorAll('div.card.card-body.mb-3');
    return contacts.length;
  });
};

it('Contact Manager is present on the browser', async () => {
  const text = await page.$eval(
    '#root > div > nav > div > a',
    el => el.innerHTML
  );
  const button = await page.click(
    '#root > div > div > div:nth-child(3) > h4 > i.fas.fa-times'
  );
  expect(text).toEqual('Contact Manager');
});

test('should add a contact', async () => {
  let totalContacts = await page.evaluate(() => {
    let contacts = document.querySelectorAll('div.card.card-body.mb-3');
    return contacts.length;
  });
  expect(totalContacts).toEqual(3);
  await addContact(page);

  await page.screenshot({
    path: 'test-output/added_contact.png',
    fullPage: true
  });
  let totalContactsPlusOne = await page.evaluate(() => {
    let contacts = document.querySelectorAll('div.card.card-body.mb-3');
    return contacts.length;
  });
  expect(totalContactsPlusOne).toEqual(4);
});

test('should have 3 contacts', async () => {
  const nameInput = await page.type('input[name=name]', 'Josh Johansen');
  let totalContacts = await page.evaluate(() => {
    let contacts = document.querySelectorAll('div.card.card-body.mb-3');
    return contacts.length;
  });
  expect(totalContacts).toEqual(3);
});
