const eleventyGoogleFonts = require("eleventy-google-fonts");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const fs = require("fs");
const path = require("path");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const addSeoTags = require("./plugins/addSeoTags");

const imageShortcode = require("./shortcodes/image");
const contactPerson = require("./shortcodes/contactPerson");
const getFAQ = require("./shortcodes/faq");
const jpgImageUrl = require("./shortcodes/jpgImageUrl");
const browserScreenshot = require("./shortcodes/browserScreenshot");

const manifestPath = path.resolve(__dirname, "dist", "assets", "manifest.json");
const manifest = JSON.parse(
  fs.readFileSync(manifestPath, { encoding: "utf8" })
);

module.exports = function (eleventyConfig) {
  const markdownLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  })
    .use(markdownItAttrs)
    .disable("code");

  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addFilter("markdown", (content) => {
    return markdownLib.render(content);
  });

  // Layout aliases make templates more portable.
  eleventyConfig.addLayoutAlias("raw", "layouts/raw.njk");
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");
  eleventyConfig.addLayoutAlias("feature", "layouts/feature.njk");
  eleventyConfig.addLayoutAlias("blog", "layouts/blog.njk");
  eleventyConfig.addLayoutAlias("branche", "layouts/branche.njk");
  eleventyConfig.addLayoutAlias("anwendungsfall", "layouts/anwendungsfall.njk");
  eleventyConfig.addLayoutAlias("faq", "layouts/faq.njk");
  eleventyConfig.addLayoutAlias("glossary", "layouts/glossary.njk");
  eleventyConfig.addShortcode("contactPersonCode", contactPerson);
  eleventyConfig.addShortcode("getFAQCode", getFAQ);
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

  eleventyConfig.addPassthroughCopy('src/site/_redirects');
  eleventyConfig.addPassthroughCopy({ "src/static": "." });
  eleventyConfig.addPassthroughCopy("src/site/funktionen/**/*.png");
  eleventyConfig.addPassthroughCopy("src/site/funktionen/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/site/funktionen/**/*.svg");
  eleventyConfig.addPassthroughCopy("src/site/blog/**/*.png");
  eleventyConfig.addPassthroughCopy("src/site/blog/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/site/blog/**/*.css");

  // Copy external dependencies to dist.
  eleventyConfig.addPassthroughCopy({ "src/vendor": "vendor" });

  // Download and inline Google Font's CSS.
  eleventyConfig.addPlugin(eleventyGoogleFonts);

  // Navigation plugin https://www.11ty.dev/docs/plugins/navigation/
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPlugin(addSeoTags);

  // Sitemap Plugin
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://www.bubble-chat.ch",
    },
  });

  // Tags
  function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ["all", "nav", "blog", "post", "posts"].indexOf(tag) === -1
    );
  }
  eleventyConfig.addFilter("filterTagList", filterTagList);
  // Create an array of all tags
  eleventyConfig.addCollection("tagList", function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });
  function getRootFeatureByTag(featuretags, tag) {
    return featuretags.find((i) => i.data.rootTag === tag);
  }
  eleventyConfig.addFilter("getRootFeatureByTag", getRootFeatureByTag);

  eleventyConfig.addFilter("encodeURIComponent", function (value) {
    return encodeURIComponent(value);
  });

  eleventyConfig.addCollection("glossary", function (collectionApi) {
    return collectionApi.getFilteredByTag("glossary").sort(function (a, b) {
      return a.data.title
        .toLowerCase()
        .localeCompare(b.data.title.toLowerCase());
    });
  });

  eleventyConfig.addFilter("is_string", function (obj) {
    return typeof obj == "string";
  });

  // Sort by order
  function sortByOrder(values = []) {
    const vals = [...values];
    return vals.sort((a, b) =>
      Math.sign((a.data.order || 999) - (b.data.order || 999))
    );
  }
  eleventyConfig.addFilter("sortByOrder", sortByOrder);

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
