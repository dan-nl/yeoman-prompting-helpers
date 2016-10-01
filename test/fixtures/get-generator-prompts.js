'use strict';

/**
 * @returns {Array}
 */
function getGeneratorPrompts() {
  return [
    {
      default: true,
      message: 'install sinon as well:',
      name: 'install-sinon',
      type: 'confirm'
    },
    {
      message: 'author',
      name: 'author',
      type: 'input'
    },
    {
      message: 'year',
      name: 'copyright_year',
      type: 'input'
    }
  ];
}

module.exports = getGeneratorPrompts;
