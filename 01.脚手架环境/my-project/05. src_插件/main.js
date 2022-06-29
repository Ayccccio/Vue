import Vue from 'vue'
import App from './App.vue'
import install from './plugins'

Vue.config.productionTip = false

Vue.use(install)

new Vue({
    el: '#app',
    render: h => h(App),
    mounted(){
        console.log(this)
    }
})