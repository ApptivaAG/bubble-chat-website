const path = require("path");
const Image = require("@11ty/eleventy-img");

// usage: {% image "./img/cat.jpg", "hero-img", "photo of my cat", "(min-width: 30em) 50vw, 100vw", [300, 600] %}
module.exports = async function imageShortcode(src, cls, alt, sizes, widths) {
  const source = path.join(__dirname, "..", "src", src);
  const metadata = await Image(source, {
    widths,
    formats: ["webp", "jpeg"],
    outputDir: "./dist/img/",
    urlPath: "/img/",
    useCache: true,
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);
      return `${name}-${id}-${width}w.${format}`;
    },
  });

  const imageAttributes = {
    class: cls,
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  const html = Image.generateHTML(metadata, imageAttributes);
  return html.replace("<picture>", `<picture data-full-size-image='${src}'>`);
};
