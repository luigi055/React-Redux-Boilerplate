const autoprefixer = require('autoprefixer');
const vmin = require('postcss-vmin');
const pixrem = require('pixrem'); // Solving issues with rem units for ie9 and 10
const willChange = require('postcss-will-change'); // Better rendering animation for ie11
const mqPacker = require('css-mqpacker'); // Pack css code within same media query size 

module.exports = {
  plugins: [
    willChange,
    autoprefixer({
      browsers: ['last 2 versions', 'ie >= 10', 'and_chr >= 2.3'],
    }),
    vmin,
    pixrem,
    mqPacker,
  ],
};
