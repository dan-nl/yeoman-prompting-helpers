/* eslint no-underscore-dangle: off */

'use strict';

/**
 * module dependencies
 */
var answers = require( './fixtures/answers.json' );
var _PromptAnswers = require( '../src/prompt-answers' );
var test = require( 'tap' ).test;

test( 'PromptAnswers()', function ( t ) {
  var PromptAnswers = new _PromptAnswers();

  t.same(
    PromptAnswers.set( 'author', 'dan entous' ),
    'dan entous',
    '.set( key, value ) should return the value of the answer[ key ] just set'
  );

  PromptAnswers.set( 'copyright_year', 2016 );

  t.same(
    PromptAnswers.get( 'copyright_year' ),
    2016,
    '.get( key ) should return the value of the answer[ key ] requested'
  );

  t.same(
    PromptAnswers.getAll(),
    answers,
    '.getAll() should return all answers with their key/value pairs'
  );

  t.end();
} );
