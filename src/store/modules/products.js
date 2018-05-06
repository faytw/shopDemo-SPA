import shop from '../../data/products';

//initial state
const state = {
    all: shop,
};

//getters
const getters = {
    allProducts: state => state.all,
};

//action
// const actions = {
//     getAllProducts({commit}){
//         commit('getAllProducts', shop);
//     }
// };

//mutations
const mutations = {
    'getAllProducts'(state, {products}){
        state.all = products;
    },
};

export default {
    state,
    getters,
    // actions,
    mutations
};