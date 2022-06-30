import Vue from 'vue'
import App from './App.vue'
import less from 'less'

Vue.config.produtionTip = false
Vue.use(less)


new Vue({
    el: '#app',
    render: h => h(App)
})