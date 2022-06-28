<template>
    <div>
        <h1>学生信息</h1>
        <h2>姓名:{{name}}</h2>
        <h2>性别:{{sex}}</h2>
        <h2>年龄:{{age}}</h2>
    </div>
</template>

<script>
export default {
    name:'Student0',
    data(){
        return {
            name: '张三',
            sex: '男',
            age: 20
        }
    }
};
</script>

<style>
</style>