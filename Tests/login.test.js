const { By, until } = require("selenium-webdriver");

const assert = require("assert");
const { createDriver, takeScreenshot } = require("./utils");
describe("Login Tests", function() {
    this.timeout(10000); 
  let driver;

  beforeEach(async () => {
    driver = await createDriver();
  });

  afterEach(async () => {
    await driver.quit();
  });

  it("Login exitoso (happy path)", async () => {
    await driver.get("http://127.0.0.1:3000/Frontend/index.html");

    await driver.findElement(By.id("username")).sendKeys("admin");
    await driver.findElement(By.id("password")).sendKeys("1234");
    await driver.findElement(By.tagName("button")).click();

 await takeScreenshot(driver, "login_exitoso");

    await driver.wait(until.urlContains("dashboard"), 5000);
  });

  it("Login inválido (negativo)", async () => {
    await driver.get("http://localhost:5500/index.html");

    await driver.findElement(By.id("username")).sendKeys("wrong");
    await driver.findElement(By.id("password")).sendKeys("wrong");
    await driver.findElement(By.tagName("button")).click();

    const error = await driver.findElement(By.id("error")).getText();
    assert.strictEqual(error, "Credenciales inválidas");
  });

});