'use strict';

/**
 * module dependencies
 */
var prompts = require( './prompts' );

/**
 * @param {Object} generator
 * @param {Object} generator.options
 *
 * @returns {Object}
 */
function addPrompts( generator ) {
  if ( !( generator.options.prompts instanceof Object ) ) {
    return prompts;
  }

  return generator.options.prompts;
}

module.exports = addPrompts;
