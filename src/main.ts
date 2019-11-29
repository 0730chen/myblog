import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import * as element from 'element-ui'

Vue.use(element)
Vue.config.productionTip = false

const app: Vue = new Vue({
  el: '#app',
  router,
  components:{App},
  template:"<App/>"
})

export default app
