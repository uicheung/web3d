import { defaultTheme } from 'vuepress'
 
module.exports = {
  title: 'm-baseui',
  description: 'm-baseui Component library with Vue3',
  base: '/', // 这是部署到github相关的配置
  markdown: {
    code: {
      lineNumbers: false // 代码块显示行号
    }
  },
  theme: defaultTheme({
    // 在这里进行配置
    navbar: [],
    sidebar: []
  })
}