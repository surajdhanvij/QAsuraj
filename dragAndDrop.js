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
    await driver.get("https://demoqa.com/droppable");
    let src = await driver.findElement(By.id("draggable"));
    let dest = await driver.findElement(By.id("droppable"));

    let actions = driver.actions({ async: true });

    await actions.dragAndDrop(src, dest).perform();

    console.log("Element has been dragged and dropped");
  } finally {
    await driver.quit();
  }
})();
