module.exports = {
  'env': {
    'node': true,
  },
  'rules': {
    // enforce return after a callback
    'callback-return': 'off',
    // enforces error handling in callbacks (node environment)
    'handle-callback-err': 'off',
    // disallow mixing regular variable and require declarations
    'no-mixed-requires': ['off', false],
    // disallow use of new operator with the require function
    'no-new-require': 'off',
    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 'off',
    // disallow process.exit()
    'no-process-exit': 'off',
    // restrict usage of specified node modules
    'no-restricted-modules': 'off',
    // disallow use of synchronous methods (off by default)
    'no-sync': 'off',
  },
};
