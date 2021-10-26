const imageShortcode = require("./image.js");

// usage: {% browserScreenshot "./img/cat.jpg", "Meine Katze", "container-class", "(min-width: 1248px) 600px, (min-width: 1024px) 40vw, 100vw"%}
module.exports = async function browserScreenshot(
  src,
  alt,
  cls = "",
  sizes = "100vw"
) {
  return `
    <div class="browserScreenshot ${cls}">
      <img class="browserScreenshot-browser" src="/img/browser-nav.svg" />
      ${await imageShortcode(
        src,
        "browserScreenshot-img",
        alt,
        sizes,
        [750, 1080, 1366, 1920]
      )} 
    </div>
    `;
};
