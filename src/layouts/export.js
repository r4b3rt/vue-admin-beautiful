/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 公共布局及样式自动引入
 */

import Vue from 'vue'

const requireComponents = require.context('./components', true, /\.vue$/)
requireComponents.keys().forEach((fileName) => {
  const componentConfig = requireComponents(fileName)
  const componentName = componentConfig.default.name
  Vue.component(componentName, componentConfig.default || componentConfig)
})

const requireThemes = require.context('@/styles/themes', true, /\.scss$/)
requireThemes.keys().forEach((fileName) => {
  require(`@/styles/themes/${fileName.slice(2)}`)
})
