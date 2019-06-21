const state = {
    count: 0,
    history: []
}

const limit = 5

const getters = {
    count: (state) => state.count,

    recentHistory: state => {
        const end = state.history.length
        const begin = end - limit < 0 ? 0 : end-limit
        return state.history.slice(begin, end).join(',')
    }
}

const actions = {
    increment({ commit }) {
        commit('counter/increment')
    },

    decrement({ commit }) {
        commit('counter/decrement')
    },

    incrementIfOdd({ commit, state }) {
        if((state.count +  1) % 2 ==0){
            commit('counter/increment')
        }
    },

    incrementAsync({ commit }) {
        setTimeout(()=>{
            commit('counter/increment')
        },1000)
    }
}

const mutations = {
    increment(state){
        state.count++
        state.history.push('increment')
    },

    decrement(state) {
        state.count--;
        state.history.push('decrement')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}