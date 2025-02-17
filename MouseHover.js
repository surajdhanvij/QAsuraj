const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const chrome = require("selenium-webdriver/chrome");
require("chromedriver");

(async () => {
  const { expect } = await import("chai"); // Dynamic import for Chai

  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options())
    .build();

  try {
    await driver.get("https://demoqa.com/tool-tips");
    let hoverEle = await driver.findElement(By.id("toolTipButton"));

    let action = driver.actions({ asysc: true });

    await action.move({ origin: hoverEle }).perform();

    let text = await driver
      .wait(until.elementLocated(By.id("buttonToolTip")))
      .getText();
    // let text = await driver.findElement(By.id("buttonToolTip")).getText();
    console.log(text);
    console.log("Hovered on the element");

    // } catch (err) {
    //   console.error(err.message);
    // }
  } finally {
    await driver.quit();
  }
})();
