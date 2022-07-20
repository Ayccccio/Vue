<template>
    <div class="person">
        <h1>人员列表</h1>
        <h3 style="color:red;">Count组件求和为:{{sum}}</h3>
        <h3>列表中第一个人的名字是:{{firstPerson}}</h3>
        <input v-model="name">
        <button @click="addPerson">添加一个人</button>
        <button @click="addPersonToTan">添加一个姓谭的人</button>
        <button @click="addPersonToRandom">添加一个人,名字随机</button>
        <ul>
            <li v-for="person in personList" :key="person.id">{{person.name}}</li>
        </ul>

    </div>
</template>

<script>
import {nanoid} from 'nanoid'
// 引入vuex中map方法映射对应数据或者方法到当前组件
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex' 
import axios from 'axios'
export default {
    name:'Person',
    data(){
        return {
            name:''
        }
    },
    computed:{
        personList(){
            return this.$store.state.personAbout.personList
        },
        sum(){
            return this.$store.state.countAbout.sum
        },
        firstPerson(){
            return this.$store.getters['personAbout/firstPerson']
        }
    },
    methods:{
        addPerson(){
            this.$store.commit('personAbout/ADD_PERSON',{id:nanoid(),name:this.name})   //调用personAbout模块中mutations中的ADD_PERSON方法
            this.name = ''
        },
        addPersonToTan(){
            this.$store.dispatch('personAbout/addPersonToTan', {id:nanoid(),name:this.name})   //调用personAbout模块中actions中的addPersonToTan方法
            this.name = ''
        },
        addPersonToRandom(){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    this.$store.commit('personAbout/ADD_PERSON',{id:nanoid(),name:response.data})
                },
                error => {
                    console.log(error.massge)
                }
            )
        }
    }
}
</script>

<style>

</style>