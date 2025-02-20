const postcss = require("postcss");
const postcssCustomMedia = require("postcss-custom-media");
const postcssImport = require("postcss-import");

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    "postcss-import": {},
    "postcss-custom-media": {},
  },
};

export default config;
