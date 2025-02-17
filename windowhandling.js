const { Builder, By } = require("selenium-webdriver");
(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    // Navigate to Url
    await driver.get("https://demoqa.com/browser-windows");

    let wind1 = await driver.getWindowHandle();
    console.log("default Window   : " + wind1);

    await driver.findElement(By.id("windowButton")).click();

    let windows = await driver.getAllWindowHandles();
    windows.forEach(async (window) => {
      if (window !== wind1) {
        await driver.switchTo().window(window);
        let text = await driver.findElement(By.id("sampleHeading")).getText();
        console.log("Text : " + text);
        console.log("Driver Switched to New Window");
        let wind2 = await driver.getWindowHandle();
        console.log("New Window ID : " + wind2);
          driver.close();
          
           let wind1 = await driver.getWindowHandle();
    console.log("default Window   : " + wind1);

    let tab = await driver.findElement(By.id("tabButton")).click();

    let windows = await driver.getAllWindowHandles();

    for (let key of windows) {
      if (key !== wind1) {
        await driver.switchTo().window(key);
        let text = await driver.findElement(By.id("sampleHeading")).getText();
        console.log("Text : " + text);
      }
      }
      await driver.switchTo().window(wind1);
    });
  } finally {
    // await driver.quit();
  }
})();