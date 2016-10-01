/* eslint no-underscore-dangle: off */

'use strict';

/**
 * module dependencies
 */
var _PromptAnswers = require( '../src/prompt-answers' );
var createPromptAnswers = require( '../src/create-prompt-answers' );
var test = require( 'tap' ).test;

test( 'createPromptAnswers( PromptAnswers )', function ( t ) {
  var PromptAnswers = createPromptAnswers();
  var PromptAnswers2 = createPromptAnswers( PromptAnswers );

  t.ok(
    PromptAnswers instanceof _PromptAnswers,
    'should return a new instance of PromptAnswers when no param is passed into the function'
  );

  t.same(
    PromptAnswers,
    PromptAnswers2,
    'should return the same instance of PromptAnswers when it’s passed into the function as a param'
  );

  t.throws(
    function () {
      createPromptAnswers( 'no-good' );
    },
    Error,
    'should throw an Error when the param passed to the function is not an instance of ' +
    'PromptAnswers or undefined'
  );

  t.end();
} );
