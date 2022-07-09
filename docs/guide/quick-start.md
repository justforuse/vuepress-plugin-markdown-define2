# Quick start <Badge text="__VERSION__" />

## Install

```sh
npm install vuepress-plugin-markdown-define2 -D
```

## Usage

in `config.js`

:::tip
The below variables is not start with `.`, just for page show to skip render
:::

```js
const MdDefinePlugin = require('vuepress-plugin-markdown-define2')

const CONSTS = {
  __.VERSION__: require('../../package.json').version
}
module.exports = {
  // ...
  plugins: [
    MdDefinePlugin(CONSTS)
  ],
}
```

Define the version:

```md
## Vuepress-plugin-markdown-define <Badge text="__.VERSION__" />
```

Will be rendered as:
## Vuepress-plugin-markdown-define <Badge text="__VERSION__" />