const imageShortcode = require("./image.js");

// usage: {% browserScreenshot "./img/cat.jpg", "container-class"%}
module.exports = async function browserScreenshot(src, alt, cls = "") {
  return `
    <div class="browserScreenshot ${cls}">
      <img class="browserScreenshot-browser" src="/img/browser-nav.svg" />
      ${await imageShortcode(
        src,
        "browserScreenshot-img",
        alt,
        "100vw",
        [750, 1080, 1366, 1920]
      )} 
    </div>
    `;
};
