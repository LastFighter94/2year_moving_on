import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.config.errorHandler = function (err, vm, info){
  console.error('#######################')
  console.error('this error caught by global error handler')
  console.error(err, 'err')
  console.error(vm, 'vm')
  console.error(info, 'info')
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
