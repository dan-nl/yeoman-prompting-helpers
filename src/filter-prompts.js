'use strict';

/**
 * module dependencies
 */
var filter = require( 'lodash.filter' );

/**
 * if a prompt.name already exists in PromptAnswers.answers that prompt will not be returned in
 * the resulting Array
 *
 * @param {PromptAnswers} PromptAnswers
 * @param {Array} generator_prompts
 * @returns {Array}
 */
function filterPrompts( PromptAnswers, generator_prompts ) {
  return filter(
    generator_prompts,
    function iteratee( prompt ) {
      return typeof PromptAnswers.get( prompt.name ) === 'undefined';
    }
  );
}

module.exports = filterPrompts;
