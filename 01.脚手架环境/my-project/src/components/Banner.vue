<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
            <h2>Vue Router Demo</h2>
            <hr />
            <button @click="toIndex">去首页</button>
            <button @click="toMessage">点击message第二个消息</button></button>
            <button @click="back">后退</button>
            <button @click="forward">前进</button>
            <button @click="go">go</button>
            <button @click="login">假装登陆</button>
            <button @click="logout">假装注销</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'Banner',
    methods:{
        toIndex(){
            // 编程式路由,replace会替换当前的history记录
            this.$router.replace('/')
        },
        toMessage(){
            // 编程式路由,push会添加history记录
            this.$router.push({
                name:'detail',
                params:{
                    id:'002',
                    title:'消息二'
                }
            })
        },
        back(){
            // 编程式路由,后退
            this.$router.back()
        },
        forward(){
            // 编程式路由,前进
            this.$router.forward()
        },
        go(){
            // 编程式路由,向后退3条记录
            this.$router.go(-3)
        },
        login(){
            localStorage.setItem('login',true)
        },
        logout(){
            localStorage.setItem('login',false)
        }
    }
};
</script>

<style>
</style>