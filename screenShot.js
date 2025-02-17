const { Builder, By, until } = require("selenium-webdriver");
const fs = require("fs").promises;
const path = require("path");
(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://demoqa.com/");
    

    

    const Screenshot = await driver.takeScreenshot();

    const fs = require("fs");
    const filePath = path.join(__dirname, "./screenShot/screenShot.png");
    await fs.writeFileSync(filePath, Screenshot, "base64");

    console.log("Screenshot saved as image.png");

    //  await driver.switchTo().newWindow("tab");;
  } finally {
    await driver.quit();
  }
})();
