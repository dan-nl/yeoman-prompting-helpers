/* eslint no-underscore-dangle: off */

'use strict';

/**
 * module dependencies
 */
var _PromptAnswers = require( './prompt-answers' );

/**
 * @param {PromptAnswers|undefined} [PromptAnswers]
 * @throws {Error}
 * @returns {PromptAnswers}
 */
function createPromptAnswers( PromptAnswers ) {
  if ( typeof PromptAnswers === 'undefined' ) {
    return new _PromptAnswers();
  }

  if ( !( PromptAnswers instanceof _PromptAnswers ) ) {
    throw new Error(
      'PromptAnswers provided is not an instance of PromptAnswers or undefined'
    );
  }

  return PromptAnswers;
}

module.exports = createPromptAnswers;
