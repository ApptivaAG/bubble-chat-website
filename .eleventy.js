const eleventyGoogleFonts = require("eleventy-google-fonts");
const pluginSEO = require("eleventy-plugin-seo");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

const imageShortcode = require("./shortcodes/image");
const jpgImageUrl = require("./shortcodes/jpgImageUrl");
const browserScreenshot = require("./shortcodes/browserScreenshot");

const fs = require("fs");
const path = require("path");

const manifestPath = path.resolve(__dirname, "dist", "assets", "manifest.json");
const manifest = JSON.parse(
  fs.readFileSync(manifestPath, { encoding: "utf8" })
);

module.exports = function (eleventyConfig) {
  // Layout aliases make templates more portable.
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");
  eleventyConfig.addLayoutAlias("feature", "layouts/feature.njk");
  eleventyConfig.addLayoutAlias("branche", "layouts/branche.njk");
  eleventyConfig.addLayoutAlias("anwendungsfall", "layouts/anwendungsfall.njk");

  eleventyConfig.addNunjucksAsyncShortcode("jpgUrl", jpgImageUrl);
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addNunjucksAsyncShortcode(
    "browserScreenshot",
    browserScreenshot
  );

  // Adds a universal shortcode to return the URL to a webpack asset. In Nunjack templates:
  // {% webpackAsset 'main.js' %} or {% webpackAsset 'main.css' %}
  eleventyConfig.addShortcode("webpackAsset", function (name) {
    if (!manifest[name]) {
      throw new Error(`The asset ${name} does not exist in ${manifestPath}`);
    }
    return manifest[name];
  });

  // Copy all images directly to dist.
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({
    "src/chatbot-images": "img/chatbot-images",
  });

  eleventyConfig.addPassthroughCopy({ "src/static": "." });

  // Copy external dependencies to dist.
  eleventyConfig.addPassthroughCopy({ "src/vendor": "vendor" });

  // Reload the page every time the JS/CSS are changed.
  eleventyConfig.setBrowserSyncConfig({ files: [manifestPath] });

  // A debug utility.
  eleventyConfig.addFilter("dump", (obj) => {
    return util.inspect(obj);
  });

  // Download and inline Google Font's CSS.
  eleventyConfig.addPlugin(eleventyGoogleFonts);

  // SEO Plugin
  eleventyConfig.addPlugin(pluginSEO, {
    ...require("./src/site/_data/site.json"),
    options: {
      twitterCardType: "summary_large_image",
      imageWithBaseUrl: true,
      showPageNumbers: false,
    },
  });

  // Sitemap Plugin
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://www.bubble-chat.ch",
    },
  });

  return {
    dir: {
      input: "src/site",
      includes: "_includes", // relative to dir.input
      output: "dist",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
