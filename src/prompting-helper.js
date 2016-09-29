'use strict';

/**
 * module dependencies
 */
var addPromptAnswers = require( './add-prompt-answers' );
var filterPrompts = require( './filter-prompts' );

/**
 * sets up the prompts for a generator based on the result of filtering getModulePrompts to make
 * sure a user is not presented with the same prompt.name more than once. after then prompts have
 * been answered, the answers are added to the shared generator.options.prompts object.
 *
 * @param {Object} generator
 * @param {Function} generator.log
 * @param {Object} generator.options
 * @param {Function} generator.prompt
 *
 * @param {Function} getModulePrompts
 *
 * @returns {Promise}
 */
function promptingHelper( generator, getModulePrompts ) {
  var prompts = filterPrompts( generator, getModulePrompts );

  if ( prompts.length < 1 ) {
    generator.log( 'no additional prompts needed for ' + generator.options.namespace );
  } else {
    generator.log( 'prompting for ' + generator.options.namespace );
  }

  return generator.prompt( prompts )
    .then(
      function ( answers ) {
        addPromptAnswers( generator, answers );
      }
    );
}

module.exports = promptingHelper;
