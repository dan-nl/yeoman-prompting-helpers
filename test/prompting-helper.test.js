/* eslint no-underscore-dangle: off */

'use strict';

/**
 * module dependencies
 */
var _PromptAnswers = require( '../src/prompt-answers' );
var generator = require( './fixtures/generator.js' );
var getGeneratorPrompts = require( './fixtures/get-generator-prompts' );
var getGeneratorPromptsEmpty = require( './fixtures/get-generator-prompts-empty' );
var promptingHelper = require( '../src/prompting-helper' );
var sinon = require( 'sinon' );
var test = require( 'tap' ).test;

/**
 * module variables
 */
var log = sinon.spy( generator, 'log' );
var prompt = sinon.spy( generator, 'prompt' );

test( 'promptingHelper( generator, getGeneratorPrompts ) 0 prompts', function ( t ) {
  generator.options.PromptAnswers = new _PromptAnswers();
  promptingHelper( generator, getGeneratorPromptsEmpty() );

  t.ok(
    log.calledWith( 'no additional prompts needed for test' ),
    'should log no prompt message'
  );

  t.equal(
    prompt.getCalls()[ 0 ].args[ 0 ].length,
    0,
    'should call generator.prompt with 0 prompts'
  );

  t.end();
} );

test( 'promptingHelper( generator, getGeneratorPrompts ) 3 prompts', function ( t ) {
  generator.options.PromptAnswers = new _PromptAnswers();
  promptingHelper( generator, getGeneratorPrompts() );

  t.ok(
    log.calledWith( 'prompting for test' ),
    'should log prompting message'
  );

  t.equal(
    prompt.getCalls()[ 1 ].args[ 0 ].length,
    3,
    'should call generator.prompt with 3 prompts'
  );

  t.end();
} );
