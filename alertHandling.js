const { Builder, By } = require("selenium-webdriver");
(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    // Navigate to Url
    await driver.get("https://demoqa.com/alerts");

    await driver.findElement(By.id("alertButton")).click();
    let alert = await driver.switchTo().alert();
    let alertText = await alert.getText();
    console.log(alertText);
      alert.accept();
      
   
  } finally {
    await driver.quit();
  }
})();
       await driver.findElement(By.id("promtButton")).click();

       let alert = await driver.switchTo().alert();
       await alert.sendKeys("Hello, Selenium");
       await alert.accept();
