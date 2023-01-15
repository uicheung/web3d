import { defineClientConfig  } from '@vuepress/client'
import vueInstance from '../../examples/vue/App.vue'
export default defineClientConfig ({
    enhance({ app }){
      // app 是由 createApp 创建的 Vue 应用实例
      app.use(vueInstance)
    }
  })