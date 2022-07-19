import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 定义actions配置,处理业务
const actions = {
    addToOdd(context,value){
        if(context.state.sum % 2){
            context.commit('ADD',value)
        }
    },
    addToWait(context,value){
        setTimeout(()=>{
            context.commit('ADD',value)
        },800)
    },
    /*=========== 模块分割符 ===========*/
    addPersonToTan(context,person){
        if(/^谭/.test(person.name)){
            context.commit('ADD_PERSON',person)
        }else{
            alert('请输入姓谭的名字')
        }
    }

}


// 定义mutations配置,操作数据
const mutations = {
    ADD(state,sum){
        state.sum += sum
    },
    SUB(state,sum){
        state.sum -= sum
    },
    /*=========== 模块分割符 ===========*/
    ADD_PERSON(state,person){
        state.personList.unshift(person)
    }
}

// 定义共享的数据
const state = {
    sum:0,
    shool:'b站',
    subject:'前端',
    /*=========== 模块分割符 ===========*/
    personList:[{id:'001',name:'张三'}]
}

// 定义getters配置,相当于vue中的computed计算属性
const getters = {
    bigSum(state){
        return state.sum * 10
    },
    /*=========== 模块分割符 ===========*/
    personCount(state){
        return state.personList.length
    },
    firstPerson(state){
        return state.personList[0].name
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})