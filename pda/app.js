require('babel-register')({
  presets: ['es2015', 'react', "stage-0", 'babel-polyfill'],
  plugins: ["transform-es2015-modules-commonjs"]
});
require('./server');
