module.exports = (options) => {
  return {
    name: 'vuepress-plugin-markdown-define2',
    extendsMarkdown: (md) => {
      const render = md.render;
      md.render = (src, ...args) => {
        // maybe this can be exported as a vuepress plugin
        let content = src;
        Object.entries(options).forEach(([key, value]) => {
          // replace key as value globally
          content = content.replace(new RegExp(key, 'g'), value);
        });
        let result = render.call(md, content, ...args);
        return result;
      };
    },
  }
}
