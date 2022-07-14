<template>
    <div class="row" v-show='users.length'>
        <User v-for="user in users" :key="user.id" :user='user'></User>
    </div>
    <p v-show="state==0">欢迎使用</p>
    <p v-show="state==1">加载中</p>
    <p v-show="state==2">加载错误</p>
</template>

<script>
import User from './User.vue'
export default {
    name:'List',
    components:{
        User
    },
    data(){
        return {
            users: [],
            state: 0    //0: 欢迎使用  1: 加载中 2: 错误 
        }
    },
    beforeMount(){
        this.$bus.$on('getUsers',(data)=>{
            this.users = data.items
        })
    },
    beforeCreate(){
        this.$bus.$on('updateState',(state)=>{
            this.state = state
        })
    }
};
</script>

<style>
</style>