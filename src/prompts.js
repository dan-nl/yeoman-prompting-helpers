'use strict';

/**
 * module variables
 */
var answers = {};

/**
 * @param {string} key
 * @returns {string}
 */
function get( key ) {
  return answers[ key ];
}

/**
 * @returns {Object}
 */
function getAll() {
  return answers;
}

/**
 * @param {string|number|boolean} value
 * @param {string} key
 *
 * @returns {void}
 */
function set( value, key ) {
  answers[ key ] = value;
}

module.exports = {
  get: get,
  getAll: getAll,
  set: set
};
