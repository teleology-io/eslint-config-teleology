// Generate variants based off of base

const merge = require('lodash.merge');
const fs = require('fs');

const base = require('../variants/base.config');

const writeModule = (path, options) => fs.writeFileSync(path, `module.exports = ${JSON.stringify(options, null, 2)};`, 'utf8');

const variants = [
  {
    path: 'react.js',
    config: '../variants/react.config.js',
  },
  {
    path: 'index.js',
    config: '../variants/index.config.js'
  }
];

variants.forEach((variant) => {
  const { path, config } = variant;

  const options = merge(base, require(config));

  console.log('options', options);
  writeModule(path, options);
})


