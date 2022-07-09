const { defaultTheme } = require('@vuepress/theme-default')
const DefinePlugin = require('../../index.js')

const CONSTS = {
  __VERSION__: require('../../package.json').version
}

module.exports = {
  title: 'Markdown Define2',
  theme: defaultTheme({
    // 在这里进行配置
    logo: '/logo.png',
    nav: [{ text: 'Guide', link: '/guide/quick-start' }],
    repo: 'https://github.com/justforuse/vuepress-plugin-markdown-define2',
    sidebar: [
      {
        text: 'Guide',
        children: ['quick-start']
      }
    ],
    sidebarDepth: 0,
    navbar: [
      // NavbarItem
      {
        text: CONSTS.__VERSION__,
        link: 'https://github.com/justforuse/vuepress-plugin-markdown-define2',
      },
    ]
  }),
  plugins: [
    DefinePlugin(CONSTS)
  ],
}