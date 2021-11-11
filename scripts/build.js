/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-dynamic-require */
// Generate variants based off of base
const mergewith = require('lodash.mergewith');
const fs = require('fs');

const base = require('../variants/base.config');

const writeModule = (path, options) =>
  fs.writeFileSync(
    path,
    `module.exports = ${JSON.stringify(options, null, 2)};`,
    'utf8',
  );

const variants = [
  {
    path: 'react.js',
    config: '../variants/react.config.js',
  },
  {
    path: 'index.js',
    config: '../variants/index.config.js',
  },
];

variants.forEach((variant) => {
  const { path, config } = variant;

  const mergeCustomizer = (a, b) =>
    Array.isArray(a) && Array.isArray(b) ? a.concat(b) : undefined;
  const options = mergewith(base, require(config), mergeCustomizer);

  writeModule(path, options);
});
