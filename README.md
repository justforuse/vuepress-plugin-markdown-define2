# Vuepress-plugin-markdown-define2

Define variables in markdown for Vuepress 2.

[![npm](https://img.shields.io/npm/v/vuepress-plugin-markdown-define2.svg) ![npm](https://img.shields.io/npm/dm/vuepress-plugin-markdown-define2.svg)](https://www.npmjs.com/package/vuepress-plugin-markdown-define2)
[![vuepress-next](https://img.shields.io/badge/vuepress-2.x-brightgreen.svg)](https://vuejs.org/)

## Install

```
npm install vuepress-plugin-markdown-define2 -D
```

## Usage

in `config.js`

```js
const MdDefinePlugin = require('vuepress-plugin-markdown-define2')

const CONSTS = {
  __VERSION__: require('../../package.json').version
}

module.exports = {
  // ...
  plugins: [
    MdDefinePlugin(CONSTS)
  ]
}

```

Your `.md` file source code:

```md
Current version is __VERSION__
```

will rendered as:

```md
Current version is 1.0.0
```