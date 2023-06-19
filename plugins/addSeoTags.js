const matter = require("gray-matter");
const fs = require("fs");
const Image = require("@11ty/eleventy-img");

const DEFAULTS = {
  title: "Bubble Chat",
  url: "https://www.bubble-chat.ch",
  description:
    "Bubble Chat beantwortet Kundenanfragen mit Hilfe von Künstlicher Intelligenz. Bubble Chat ermöglicht den Einsatz von Chatbots mit minimalem Aufwand.",
  ogtype: "website",
  author: "Apptiva AG",
  twitter: "apptivateam",
  image: "/img/og-image.png",
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addTransform(
    "addSeoTags",
    async function (content, outputPath) {
      if (outputPath && outputPath.endsWith(".html")) {
        const str = fs.readFileSync(this.page.inputPath, "utf8");
        const data = matter(str).data;
        const url = getImageUrl(data.image);
        const stats = await Image(url, {
          widths: [1200],
          formats: ["jpeg"],
          outputDir: "./dist/img/og/",
          urlPath: "/img/og/",
          useCache: true,
          sharpJpegOptions: {
            quality: 80,
            progressive: true,
          },
        });

        const title = data.title
          ? `${data.title} - ${DEFAULTS.title}`
          : DEFAULTS.title;
        const description = data.excerpt || DEFAULTS.description;
        const canonical = `${DEFAULTS.url}${this.page.url}`;
        const image = `${DEFAULTS.url}${stats["jpeg"][0].url}`;
        return content.replace(
          /<head>/,
          `<head>
            <title>${title}</title>
            <meta name="description" content="${description}">
            <meta name="robots" content="index,follow">
            <meta name="author" content="${DEFAULTS.author}">
            <link rel="canonical" href="${canonical}">

            <meta property="og:title" content="${title}">
            <meta property="og:type" content="article">
            <meta property="og:url" content="${canonical}">
            <meta property="og:description" content="${description}">
            <meta property="og:image" content="${image}">

            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:site" content="@${DEFAULTS.twitter}">
            <meta name="twitter:url" content="${DEFAULTS.url}">
            <meta name="twitter:title" content="${title}">
            <meta name="twitter:description" content="${description}">
            <meta name="twitter:image" content="${image}">
          `
        );
      }

      return content;
    }
  );
};

function getImageUrl(image) {
  if (!!image?.length) {
    if (image.startsWith("/img")) {
      return `./src/${image}`;
    } else {
      return `./src/site${image}`;
    }
  } else {
    return "./src/img/og-image.png";
  }
}
