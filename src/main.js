import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import VueI18n from 'vue-i18n'

// Vue.use(VueI18n)

// const messages = {
//   cn: {
//     message: {
//       hello: '你好，世界！'
//     }
//   },
//   en: {
//     message: {
//       hello: 'hello world'
//     }
//   }
// }

// const i18n = new VueI18n({
//   locale: 'cn', // 设置地区
//   messages // 设置地区信息
// })

// // 国际化
import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
