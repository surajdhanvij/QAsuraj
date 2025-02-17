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
    await driver.get("https://demoqa.com/automation-practice-form");

    await driver.executeScript(`
      const ele = document.getElementById("firstName");
      ele.value = "John";
      const lname = document.getElementById("lastName");
      lname.value = "JJJJ";
      const mrdo =  document.querySelector("input[value='Male']");
      mrdo.click();
      const mobNum = document.getElementById("userNumber");
      mobNum.value = "1234567890";

      const submitBtn = document.querySelector("button[class='btn btn-primary']");
      submitBtn.click();

      console.log("Form submitted");

      `);
  } finally {
    await driver.quit();
  }
})();
