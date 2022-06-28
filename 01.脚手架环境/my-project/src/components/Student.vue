<template>
    <div>
        <h2>姓名:{{name}}</h2>
        <h2>姓名:{{age}}</h2>
        <h2>地址:{{address}}</h2>
    </div>
</template>

<script>
import {address,color} from '../mixin'
export default {
    data(){
        console.log(this)
        return {
            name: '张三',
            age: 20
        }
    },
    mixins: [address,color]
}
</script>
