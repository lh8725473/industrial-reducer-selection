import Vue from 'vue'
import VueI18n from 'vue-i18n'
import cnJson from './cnJson'
import enJson from './enJson'

Vue.use(VueI18n)

// 语言包
const messages = {
  cn: cnJson,
  en: enJson
}

const i18n = new VueI18n({
  locale: 'cn', // 设置地区
  messages // 设置地区信息
})

export default i18n
