'use strict';

/**
 * module dependencies
 */
var createPromptAnswers = require( './create-prompt-answers' );
var promptingHelper = require( './prompting-helper' );

/**
 * @type {{createPromptAnswers: createPromptAnswers, promptingHelper: promptingHelper}}
 */
module.exports = {
  createPromptAnswers: createPromptAnswers,
  promptingHelper: promptingHelper
};
