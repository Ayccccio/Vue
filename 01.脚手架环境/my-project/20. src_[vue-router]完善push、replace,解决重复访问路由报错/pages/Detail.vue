<template>
    <ul>
        <li>消息id:{{id}}</li>
        <li>消息标题:{{title}}</li>
    </ul>
</template>

<script>
export default {
    name:'Detail',
    props:['id','title'],       //接收路由传递过来的props
    // computed:{
    //     id(){
    //         // 接收query参数
    //         // return this.$route.query.id

    //         // 接收params参数
    //         return this.$route.params.id
    //     },
    //     title(){
    //         // 接收query参数
    //         // return this.$route.query.title

    //         // 接收params参数
    //         return this.$route.params.title
    //     }
    // }
}
</script>

<style>

</style>