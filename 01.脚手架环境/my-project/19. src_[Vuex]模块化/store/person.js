export default {
    namespaced: true,
    actions: {
        addPersonToTan(context,person){
            if(/^谭/.test(person.name)){
                context.commit('ADD_PERSON',person)
            }else{
                alert('请输入姓谭的名字')
            }
        }
    },
    mutations: {
        ADD_PERSON(state,person){
            state.personList.unshift(person)
        }
    },
    state: {
        personList:[{id:'001',name:'张三'}]
    },
    getters: {
        personCount(state){
            return state.personList.length
        },
        firstPerson(state){
            return state.personList[0].name
        }
    }
}