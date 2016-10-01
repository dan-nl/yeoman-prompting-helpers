'use strict';

/**
 * @constructor
 */
function PromptAnswers() {
  this.answers = {};
}

/**
 * @param {string} key
 * @returns {*}
 */
PromptAnswers.prototype.get = function get( key ) {
  return this.answers[ key ];
};

/**
 * @returns {Object}
 */
PromptAnswers.prototype.getAll = function getAll() {
  return this.answers;
};

/**
 * @param {string} key
 * @param {string|number|boolean} value
 * @returns {*}
 */
PromptAnswers.prototype.set = function set( key, value ) {
  this.answers[ key ] = value;

  return this.get( key );
};

module.exports = PromptAnswers;
