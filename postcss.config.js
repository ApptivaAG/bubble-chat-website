const postcssImport = require("postcss-import");
const postcssPresetEnv = require("postcss-preset-env");
const postcssColorMod = require("postcss-color-mod-function");

const plugins = [
  postcssImport(),
  postcssPresetEnv({
    stage: 3,
    features: {
      "nesting-rules": true,
    },
  }),
  postcssColorMod(),
];

if (process.env.NODE_ENV === "production") {
  plugins.push(require("cssnano"));
}

module.exports = { plugins };
