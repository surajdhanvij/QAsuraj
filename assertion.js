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
    await driver.get("https://demoqa.com/radio-button");
    driver
      .manage()
      .logs()
      .get("browser")
      .then((logs) => {
        logs.forEach((log) => {
          console.log(log.message); // Print browser console logs
        });
      });

    await driver.executeScript(`
      const ele1 = document.querySelector("label[for='impressiveRadio']");
      if(ele1.textContent === "Impressive") {
        ele1.click();
        console.log("Impressive is selected");
      }
      const ele2 = document.getElementById("yesRadio");
      if(ele2.style.display !== "none") {
        ele2.click();
      }
      const ele3 = document.getElementById("noRadio");
      if(ele3.disabled === true) {
        console.log("No radio button is disabled");
      }
    `);

    await driver.sleep(2000);
  } finally {
    await driver.quit();
  }
})();
