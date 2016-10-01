'use strict';

/**
 * module dependencies
 */
var createPromptAnswers = require( '../src/create-prompt-answers' );
var filterPrompts = require( '../src/filter-prompts' );
var findIndex = require( 'lodash.findindex' );
var getGeneratorPrompts = require( './fixtures/get-generator-prompts' );
var test = require( 'tap' ).test;

/**
 * @param {Object} prompt
 * @param {string} prompt.name
 *
 * @returns {boolean}
 */
function findPromptIndex( prompt ) {
  return prompt.name === 'author';
}

test( 'filterPrompts( generator, getGeneratorPrompts )', function ( t ) {
  var prompts;
  var PromptAnswers = createPromptAnswers();

  PromptAnswers.set( 'author', 'dan entous' );
  prompts = filterPrompts( PromptAnswers, getGeneratorPrompts() );

  t.equal(
    prompts.length,
    2,
    'should only return 2 of 3 prompts when 1 has already been answered'
  );

  t.equal(
    findIndex( prompts, findPromptIndex ),
    -1,
    'should not return the author prompt since it was previously answered'
  );

  t.end();
} );
