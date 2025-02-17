const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const fs = require("fs").promises;
const path = require("path");
const assert = require("assert");
(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://demoqa.com/automation-practice-form");
    let firstName = await driver.findElement(By.id("firstName")).isDisplayed();
    assert.equal(firstName, true);
    console.log("Test passed: First name field is displayed.");

    let yesRdo = await driver.findElement(By.css("input[id='gender-radio-1']"));
    let isEnable = await yesRdo.isEnabled();
    assert.equal(isEnable, true);
    console.log("Yes Radio Button is Enable");

    await driver.wait(until.elementLocated(yesRdo), 10000);
    await yesRdo.click();

    // await driver.executeScript("argument[0].click()", yesRdo);
    let isSelectd = await yesRdo.isSelected();

    assert.equal(isSelectd, true);
    console.log("Yes Radio Button is Selected");
  } finally {
    //  await driver.quit();
  }
})();
