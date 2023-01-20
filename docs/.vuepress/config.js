import { defaultTheme } from "vuepress";
import navbar from "./config/navbar";
import sidebar from "./config/sidebar";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path } from "@vuepress/utils";
import vuepressPluginAnchorRight from "vuepress-plugin-anchor-right";

module.exports = {
  title: "m-baseui",
  description: "m-baseui Component library with Vue3",
  base: "/", // 这是部署到github相关的配置
  markdown: {
    code: {
      lineNumbers: false, // 代码块显示行号
    },
    toc: {
      includeLevel: [1, 2, 3, 4],
    },
  },
  theme: defaultTheme({
    // 在这里进行配置
    navbar,
    sidebar,
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    vuepressPluginAnchorRight(),
  ],
};
