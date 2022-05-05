const path = require("path");
const Image = require("@11ty/eleventy-img");

// usage: {% jpgUrl "/img/sector-education.jpg", 600 %}
// src and size
module.exports = async function (src, width) {
  const metadata = generateImages(src, [width]);
  return metadata.jpeg[0].url;
};

function generateImages(src, widths) {
  const source = path.join(__dirname, "../", "src", src);
  const options = {
    widths: widths,
    formats: ["jpeg"],
    outputDir: "./dist/img/",
    urlPath: "/img/",
    useCache: true,
    sharpJpegOptions: {
      quality: 80,
      progressive: true,
    },
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);
      return `${name}-${id}-${width}w.${format}`;
    },
  };

  // genrate images, dont wait
  Image(source, options);

  // get metadata even the image are not fully generated
  return Image.statsSync(source, options);
}
