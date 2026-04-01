const { By } = require("selenium-webdriver");
const { createDriver, takeScreenshot } = require("./utils");
describe("CRUD Tests", function() {
    this.timeout(10000);
  let driver;

  beforeEach(async () => {
    driver = await createDriver();
    await driver.get("http://127.0.0.1:3000/Frontend/Dashboard.html");
  });

  afterEach(async () => {
    await driver.quit();
  });

  it("Crear producto", async () => {
    await driver.findElement(By.id("name")).sendKeys("Laptop");
    await driver.findElement(By.id("price")).sendKeys("1000");
    await driver.findElement(By.tagName("button")).click();

     await takeScreenshot(driver, "crear_producto");
  });

});