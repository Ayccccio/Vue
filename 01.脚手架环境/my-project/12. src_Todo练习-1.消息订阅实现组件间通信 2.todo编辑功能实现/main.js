import Vue from 'vue'
import less from 'less'
import pubsub from 'pubsub-js'
import App from './App.vue'

Vue.config.produtionTip = false
Vue.use(less)


new Vue({
    el: '#app',
    render: h => h(App)
})