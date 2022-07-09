# Vuepress-plugin-markdown-define2


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