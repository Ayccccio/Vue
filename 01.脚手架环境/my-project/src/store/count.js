export default {
    namespaced: true,
    actions: {
        addToOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('ADD', value)
            }
        },
        addToWait(context, value) {
            setTimeout(() => {
                context.commit('ADD', value)
            }, 800)
        },
    },
    mutations: {
        ADD(state, sum) {
            state.sum += sum
        },
        SUB(state, sum) {
            state.sum -= sum
        },
    },
    state: {
        sum: 0,
        shool: 'b站',
        subject: '前端',
    },
    getters: {
        bigSum(state){
            return state.sum * 10
        },
    }
}