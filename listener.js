const { Builder, By, until } = require("selenium-webdriver");

class MyListener {
  beforeCommand(commandName, args) {
    console.log(`Before command :  ${commandName} with arguments`, args);
  }

  afterCommand(commandName, args, result) {
    console.log(`After command : ${commandName} with result : `, result);
  }
}

let driver = new Builder().forBrowser("chrome").build();

let myListener = new MyListener();

// Register the listener methods correctly
driver
  .manage()
  .addListener("beforeCommand", (command, args) =>
    myListener.beforeCommand(command, args)
  );

driver
  .manage()
  .addListener("afterCommand", (command, args, result) =>
    myListener.afterCommand(command, args, result)
  );

async function runTest() {
  try {
    await driver.get("https://demoqa.com/automation-practice-form");

    let ele = await driver.findElement(By.id("gender-radio-2"));
    await ele.click();
    console.log("Clicked on the 'No' radio button.");
  } catch (e) {
    console.error("Test failed:", e);
  } finally {
    // Close the browser after the test
    await driver.quit();
  }
}

runTest();
