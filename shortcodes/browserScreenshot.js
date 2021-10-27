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
      <div class="browserScreenshot-title-bar">
        <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="#ff4f4e"/>
        </svg>
        <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="#ffbd00"/>
        </svg>
        <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="#00cf1d"/>
        </svg>
      </div>
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
