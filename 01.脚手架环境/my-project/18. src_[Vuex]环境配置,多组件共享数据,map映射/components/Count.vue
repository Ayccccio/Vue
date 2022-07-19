<template>
    <div class="count">
        <h1>当前求和为:{{sum}}</h1>
        <h3>当前求和放大10倍为:{{bigSum}}</h3>
        <h3>我在{{shool}},学习{{subject}}.</h3>
        <h3 style="color:red;">Person组件的总人数是:{{personCount}}</h3>
        <select v-model.number="n">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="ADD(n)">+</button>
        <button @click="SUB(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
    name: "Count",
    data(){
        return {
            n:1
        }
    },
    computed:{
        ...mapState(['sum','shool','subject','personList']),    //映射State中的指定数据到当前组件,使当前组件可以直接调用这些数据
        ...mapGetters(['bigSum','personCount'])                 //映射getters中的指定数据到当前组件,使当前组件可以直接调用这些数据
    },
    methods: {
        // 对象写法,可以重命名,避免名称冲突
        ...mapActions(              //映射actions中的指定方法到当前组件,使当前组件可以直接调用这些方法
            {
                incrementOdd:'addToOdd',
                incrementWait:'addToWait'
            }
        ),
        // 数组写法,必需和mutations中的方法同名
        ...mapMutations(['ADD','SUB'])   //映射mutations中的指定方法到当前组件,使当前组件可以直接调用这些方法
    },
};
</script>

<style scoped>
   .count button{
        margin-left: 10px;
    }
</style>