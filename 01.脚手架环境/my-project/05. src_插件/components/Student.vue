<template>
    <div>
        <h2>姓名:{{name | slice}}</h2>
        <h2>年龄:{{age}}</h2>
        <input v-fbind="age" type="text" >
        <br>
        <button @click="age++" >点击修改input值+1</button>
        <button @click="test" >点击打印this</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data(){
        return{
            name: 'zaaasd',
            age: 19,
        }
    }
};
</script>