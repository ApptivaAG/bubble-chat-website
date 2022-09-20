const path = require("path");
const Image = require("@11ty/eleventy-img");

// usage: {% image "./img/cat.jpg", "photo of my cat", {"class":"hero-img", "sizes":"(min-width: 30em) 50vw, 100vw", "widths": [300, 600]} %}
module.exports = async function imageShortcode(
  src,
  alt,
  options = {},
  inputPath = this.page.inputPath
) {
  const className = options.class || "";
  const sizes = options.sizes || "100vw";
  const widths = options.widths || [750, 1080, 1366, 1920];

  let source;
  let outputDir;
  let urlPath;
  if (src.indexOf("/") === 0 || src.indexOf("./") === 0) {
    source = path.join(__dirname, "..", "src", src);
    outputDir = "./dist/img/";
    urlPath = "/img/";
  } else {
    const blogSrc = inputPath;
    outputDir = path
      .join(__dirname, "..", "dist", "..", blogSrc, "..")
      .replace("/src/site/", "/dist/");
    urlPath = path.normalize(
      path.join(blogSrc.replace("./src/site", ""), "..")
    );
    source = path.join(__dirname, "..", blogSrc, "..", src);
  }

  const metadata = await Image(source, {
    widths,
    formats: ["webp", "jpeg"],
    outputDir,
    urlPath,
    useCache: true,
    filenameFormat: function (id, src, width, format) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);
      return `${name}-${id}-${width}w.${format}`;
    },
  });

  const imageAttributes = {
    class: className,
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  const html = Image.generateHTML(metadata, imageAttributes);
  return html.replace("<picture>", `<picture data-full-size-image='${src}'>`);
};
