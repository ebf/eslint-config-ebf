/* eslint-env node */
'use strict';

const test = require('tape');
const { CLIEngine } = require('eslint');
const config = require('../');

const isObject = obj => typeof obj === 'object' && obj !== null;

test('test basic properties of config', (t) => {
  t.ok(isObject(config.parserOptions));
  t.ok(isObject(config.env));
  t.ok(isObject(config.globals));
  t.ok(isObject(config.rules));
  t.end();
});

test('load config in eslint to validate all rule syntax is correct', (t) => {
  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'index.js',
  });

  const code = 'const foo = 1;\nconst bar = function() {};\nbar(foo);\n';

  t.equal(cli.executeOnText(code).errorCount, 0);
  t.end();
});
