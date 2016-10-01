'use strict';

/**
 * module dependencies
 */
var createPromptAnswers = require( '../src/create-prompt-answers' );
var addPromptAnswers = require( '../src/add-prompt-answers' );
var answers = require( './fixtures/answers.json' );
var test = require( 'tap' ).test;

test( 'addPromptAnswers( PromptAnswers, answers )', function ( t ) {
  var PromptAnswers = createPromptAnswers();

  addPromptAnswers( PromptAnswers, answers );

  t.equal(
    PromptAnswers.get( 'author' ),
    'dan entous',
    'prompt answer for `author` should be the string `dan entous`'
  );

  t.equal(
    PromptAnswers.get( 'copyright_year' ),
    2016,
    'prompt answer for `copyright_year` should the number `2016`'
  );

  t.end();
} );
