'use strict';

/**
 * module dependencies
 */
var addPromptAnswers = require( './add-prompt-answers' );
var filterPrompts = require( './filter-prompts' );

/**
 * filters prompts for a generator
 *
 * compares prompts in the provided generator_prompts with those in generator.options.PromptAnswers.
 * if a prompt.name already exists in generator.options.PromptAnswers.answers, then it’s not
 * presented again to the user. the generator can retrieve the previously answered prompt with
 * generator.options.PromptAnswers.get( prompt.name )
 *
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
