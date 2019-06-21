import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import cart from './modules/cart'
import products from './modules/products'
import tableList from './modules/tableList'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        counter,
        cart,
        products,
        tableList
    }
})