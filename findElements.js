const { Builder, By } = require("selenium-webdriver");
(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    // Navigate to Url
    await driver.get("https://demoqa.com/select-menu");

    // Get all the elements available with tag 'p'
    let elements = await driver.findElements(
      By.css("select[name='cars']>option")
    );
    for (let e of elements) {
      console.log(await e.getText());
    }
  } finally {
    await driver.quit();
  }
})();
