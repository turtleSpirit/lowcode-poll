/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@': resolve('src'),
      '@assets': resolve('src/assets'),
      '@components': resolve('src/components'),
      '@views': resolve('src/views'),
      '@utils': resolve('src/utils'),
      '@router': resolve('src/router'),
      '@store': resolve('src/store'),
      '@api': resolve('src/api'),
      '@styles': resolve('src/styles'),
      '@config': resolve('src/config'),
    },
  };
  return config;
};
