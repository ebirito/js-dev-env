// This file isnt transpiled, so we must use CommonJs and ES5

// Register babel to tranpile before our tests run
require('babel-register')();

// Disable webpacl features that Mocha doesn't understand
require.extensions['.css'] = function() {};
