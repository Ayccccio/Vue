import Vue from 'vue'
import App from './App.vue'
import {global} from './mixin'

// 全局mixin
Vue.mixin(global)

new Vue({
    el: '#app',
    render: h => h(App)
})