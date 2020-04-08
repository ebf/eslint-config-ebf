# eslint-config-ebf ![GitHub](https://img.shields.io/github/license/ebf/eslint-config-ebf) ![GitHub package.json version](https://img.shields.io/github/package-json/v/ebf/eslint-config-ebf) ![David](https://img.shields.io/david/ebf/eslint-config-ebf) ![Node.js Package](https://github.com/ebf/eslint-config-ebf/workflows/Node.js%20Package/badge.svg) ![GitHub issues](https://img.shields.io/github/issues/ebf/eslint-config-ebf)

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for EBF projects

## Install

```bash
npm install eslint-config-ebf
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.

You can learn more about [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

```bash
npm install --save-dev eslint-config-ebf
```

Then, add this to your `.eslintrc` file:

```
{
  "extends": "ebf"
}
```

You can override settings from the shareable config by adding them directly into your `.eslintrc` file.

## License

Apache License Version 2.0. Copyright (c) [EBF](https://ebf.com).
