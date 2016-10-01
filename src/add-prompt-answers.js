'use strict';

/**
 * module dependencies
 */
var forEach = require( 'lodash.foreach' );

/**
 * @param {PromptAnswers} PromptAnswers
 * @param {Object} answers
 * @returns {undefined}
 */
function addPromptAnswers( PromptAnswers, answers ) {
  forEach(
    answers,
    function iteratee( value, key ) {
      PromptAnswers.set( key, value );
    }
  );
}

module.exports = addPromptAnswers;
