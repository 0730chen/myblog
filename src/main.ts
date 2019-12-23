import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as  Element from 'element-ui'
import './style/index.scss'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.config.productionTip = false

const app: Vue = new Vue({
    el: '#app',
    router,
    components: {App},
    // template:"<App/>",
  render:h=>h(App),
  }

)

export default app
