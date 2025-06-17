const withTM = require('next-transpile-modules')([]);

module.exports = withTM({
  swcMinify: false,
  compiler: {
    swc: false
  }
});