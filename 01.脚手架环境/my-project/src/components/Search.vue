<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyword"/>&nbsp;
            <button @click='getUsers'>Search</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'Search',
    data(){
        return {
            keyword:''
        }
    },
    methods:{
        getUsers(){
            this.$bus.$emit('updateState',1)
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    this.$bus.$emit('getUsers',response.data)
                },
                error =>{
                    this.$bus.$emit('updateState',2)
                }
            )
        }
    }
};
</script>

<style>
</style>