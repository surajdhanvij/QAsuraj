const { Builder, By } = require("selenium-webdriver");
(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    // Navigate to Url
    await driver.get("https://demoqa.com/frames");

    await driver.switchTo().frame("frame1");

    let text = await driver.findElement(By.id("sampleHeading")).getText();
    console.log(text);
    await driver.switchTo().defaultContent();

    await driver.switchTo().frame("frame2");
    text = await driver.findElement(By.id("sampleHeading")).getText();
    console.log(text);
  } finally {
    await driver.quit();
  }
})();

let frame1 = await driver.findElement(By.css("div[id='frame1Wrapper']>iframe"));
await driver.switchTo().frame(frame1);

let text = await driver.findElement(By.id("sampleHeading")).getText();
console.log(text);
