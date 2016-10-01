/* eslint no-underscore-dangle: off */

'use strict';

/**
 * module dependencies
 */
var _PromptAnswers = require( '../src/prompt-answers' );
var addPromptAnswers = require( '../src/add-prompt-answers' );
var answers = require( './fixtures/answers.json' );
var test = require( 'tap' ).test;

test( 'addPromptAnswers( PromptAnswers, answers )', function ( t ) {
  var PromptAnswers = new _PromptAnswers();

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
