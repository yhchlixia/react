// remax.config.js
const less = require('@remax/plugin-less');
module.exports = {
  one: true,
  plugins: [less()],
  output: 'dist/' + process.env.REMAX_PLATFORM
};
