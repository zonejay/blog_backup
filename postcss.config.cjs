const postcssNesting = require('postcss-nesting')
const postcssPresetEnv = require('postcss-preset-env')
module.exports = {
  plugins: [postcssPresetEnv(), postcssNesting()]
}
