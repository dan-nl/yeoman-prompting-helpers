'use strict';

module.exports = {
  log: function ( msg ) {
    console.log( msg );
  },
  options: {
    namespace: 'test'
  },
  prompt: function prompt() {
    return this;
  },
  then: function then( callback ) {
    callback();
  }
};
