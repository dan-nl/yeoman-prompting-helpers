'use strict';

/**
 * module dependencies
 */
var PromptAnswers = require( './prompt-answers' );
var promptingHelper = require( './prompting-helper' );

/**
 * @type {{createPromptAnswers: createPromptAnswers, promptingHelper: promptingHelper}}
 */
module.exports = {
  PromptAnswers: PromptAnswers,
  promptingHelper: promptingHelper
};
