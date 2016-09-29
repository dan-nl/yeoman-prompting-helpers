'use strict';

/**
 * module dependencies
 */
var forEach = require( 'lodash.foreach' );

/**
 * @param {Object} generator
 * @param {Object} answers
 * @returns {void}
 */
function addPromptAnswers( generator, answers ) {
  forEach(
    answers,
    function iteratee( value, key ) {
      generator.options.prompts.set( value, key );
    }
  );
}

module.exports = addPromptAnswers;
