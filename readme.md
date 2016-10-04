# yeoman-prompting-helpers
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][david-dm-image]][david-dm-url] [![Dev Dependency Status][david-dm-dev-image]][david-dm-dev-url] [![NSP Status][nsp-image]][nsp-url]

share prompting answers with other generators

## table of contents
* [installation](#installation)
* [use](#use)
    * [initializing](#initializing)
    * [prompting](#prompting)
    * [using prompt answers](#using-prompt-answers)
* [example project](#example-project)
* [license](#license)

## installation
within the generator project directory
```javascript
npm install yeoman-prompting-helpers
```

## use
### initializing
in the generator’s initializing method
```javascript
var PromptAnswers = require( 'yeoman-prompting-helpers' ).PromptAnswers;

this.options.PromptAnswers = this.options.PromptAnswers || new PromptAnswers();

this.composeWith(
  'your-generator',
  { options: { PromptAnswers: this.options.PromptAnswers } },
  { local: require.resolve( 'generator-your-generator' ) }
);
```

### prompting
in the generator’s prompting method use the promptingHelper
```javascript
var promptingHelper = require( 'yeoman-prompting-helpers' ).promptingHelper;

/**
 * @returns {Array}
 */
function getGeneratorPrompts() {
  return [
    // your generator’s prompts
  ];
}

return promptingHelper( this, getGeneratorPrompts() );
```

### using prompt answers
anywhere the generator needs to retrieve a prompt answer
```javascript
this.options.PromptAnswers.get( prompt.name )
```

## example project
the [generator-node-module][generator-node-module-url] illustrates how to use these helpers

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/dan-nl/yeoman-prompting-helpers/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/dan-nl/yeoman-prompting-helpers?branch=master
[david-dm-image]: https://david-dm.org/dan-nl/yeoman-prompting-helpers.svg
[david-dm-url]: https://david-dm.org/dan-nl/yeoman-prompting-helpers
[david-dm-dev-image]: https://david-dm.org/dan-nl/yeoman-prompting-helpers/dev-status.svg
[david-dm-dev-url]: https://david-dm.org/dan-nl/yeoman-prompting-helpers?type=dev
[generator-node-module-url]: https://github.com/dan-nl/generator-node-module/blob/master/app/initializing.js#L15
[mit-license]: https://raw.githubusercontent.com/dan-nl/yeoman-prompting-helpers/master/license.txt
[npm-image]: https://img.shields.io/npm/v/yeoman-prompting-helpers.svg
[npm-url]: https://www.npmjs.com/package/yeoman-prompting-helpers
[nsp-image]: https://nodesecurity.io/orgs/githubdan-nl/projects/49dfe596-0412-419d-8aaa-764e46cd9d7b/badge
[nsp-url]: https://nodesecurity.io/orgs/githubdan-nl/projects/49dfe596-0412-419d-8aaa-764e46cd9d7b
[travis-image]: https://travis-ci.org/dan-nl/yeoman-prompting-helpers.svg?branch=master
[travis-url]: https://travis-ci.org/dan-nl/yeoman-prompting-helpers
