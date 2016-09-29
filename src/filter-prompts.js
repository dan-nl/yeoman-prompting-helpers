'use strict';

/**
 * module dependencies
 */
var filter = require( 'lodash.filter' );

/**
 * filters prompts presented to the user based on prompts in generator.options.prompts.answers.
 * if a prompt.name already exists in answers that prompt will not be presented to the user again.
 *
 * @param {Object} generator
 * @param {Function} getPrompts
 *
 * @returns {Array}
 */
function filterPrompts( generator, getPrompts ) {
  return filter(
    getPrompts( generator ),
    function iteratee( prompt ) {
      return typeof generator.options.prompts.get( prompt.name ) === 'undefined';
    }
  );
}

module.exports = filterPrompts;
