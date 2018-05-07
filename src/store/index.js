import Vue from 'vue';
import Vuex from 'vuex';

import products from './modules/products';
import cart from './modules/cart';
import login from './modules/login';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        products,
        cart,
        login
    },
    strict: true
});
