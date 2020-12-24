# 介绍

这个是 vuepress 的圣诞插件，idea 来源于 codepan <https://codepen.io/kevinjannis/pen/Krids> 以及 <https://codepen.io/xxholly32/details/XWjambb>

## 安装

```bash
yarn add -D vuepress-plugin-christmas
```

还需要配置 sass 相关，安装 sass

```bash
yarn add -D sass sass-loader
```

`.vuepress/config.js` 配置依赖

```js
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: "sass-loader",
          options: {
            implementation: require("sass"),
          },
        },
      ],
    },
  },
};
```

## 使用

```js
module.exports = {
  plugins: ["vuepress-plugin-christmas"],
};
```
