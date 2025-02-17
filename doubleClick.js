const { Builder, By, Actions } = require("selenium-webdriver");

async function testDoubleClick() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://demoqa.com/buttons");

    // Find the element you want to double-click
    let element = await driver.findElement(By.id("doubleClickBtn"));

    // Create an instance of the Actions class
    let actions = driver.actions({ async: true });

    // Double click on the element
    await actions.doubleClick(element).perform();

    // You can add additional assertions to verify the result of the double click
  } finally {
    await driver.quit();
  }
}

testDoubleClick();
