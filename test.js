const { Builder, By, until } = require("selenium-webdriver");
const { assert } = require("assert");
(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://demoqa.com/radio-button");

    let impBtn = await driver.findElement(By.id("impressiveRadio")).click;
    let imp = await driver.findElement(By.css("[for='impressiveRadio']"));

    // await driver.manage().setTimeouts({ implicit: 2000 });
    await driver.wait(until.elementIsVisible(impBtn), 2000);
    await impBtn.click();

    assert.equal(await imp.getText(), "Impressive");
  } finally {
    // await driver.quit();
  }
})();
