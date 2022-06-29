export default {
    install(Vue){
        // 全局过滤器
        Vue.filter('slice',function(value){
            return value.slice(0,4)
        })

        // 全局自定义指令
        Vue.directive('fbind', {
            bind(element, binding){
                element.value = binding.value
            },
            inserted(element, binding){
                element.focus()
            },
            update (element, binding) {
                element.value = binding.value
                element.focus()
            }
        })

        // 给Vue原型添加方法
        Vue.prototype.test = function(){
            console.log('test of Vue.prototype')
        }

    }
}