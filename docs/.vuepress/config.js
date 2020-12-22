const { description } = require("../../package");
const path = require("path");

module.exports = {
  base: "/vuepress-plugin-christmas/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "vuepress-plugin-christmas",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  // clientRootMixin: path.resolve(__dirname, "mixin.js"),

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "github",
        link: "https://github.com/xxholly32/vuepress-plugin-christmas",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: [""],
        },
      ],
    },
  },

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

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    require("../../src"),
  ],
};
