import Vue from 'vue'
import App from './App.vue'

Vue.config.produtionTip = false

new Vue({
    el: '#app',
    render: h => h(App)
})