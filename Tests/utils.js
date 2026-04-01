const { Builder } = require("selenium-webdriver");
const fs = require("fs");

async function createDriver() {
  return await new Builder().forBrowser("chrome").build();
}

async function takeScreenshot(driver, name) {
  let image = await driver.takeScreenshot();
  fs.writeFileSync(`./Screenshots/${name}.png`, image, "base64");
}

module.exports = { createDriver, takeScreenshot };