'use strict';

/**
 * module dependencies
 */
var addPromptAnswers = require( './add-prompt-answers' );

/**
 * sets up the prompts for a generator based on the result of filtering getGeneratorPrompts to make
 * sure a user is not presented with the same prompt.name more than once. after then prompts have
 * been answered, the answers are added to the shared generator.options.prompts object.
 *
 * @param {Object} generator
 * @param {Array} generator_prompts
 * @returns {Promise}
 */
var filterPrompts = require( './filter-prompts' );

/**
 * @param {Object} generator
 * @param {Array} generator_prompts
 * @returns {Promise}
 */
function promptingHelper( generator, generator_prompts ) {
  var prompts = filterPrompts( generator.options.PromptAnswers, generator_prompts );

  if ( prompts.length < 1 ) {
    generator.log( 'no additional prompts needed for ' + generator.options.namespace );
  } else {
    generator.log( 'prompting for ' + generator.options.namespace );
  }

  return generator.prompt( prompts )
    .then(
      function ( answers ) {
        addPromptAnswers( generator.options.PromptAnswers, answers );
      }
    );
}

module.exports = promptingHelper;
