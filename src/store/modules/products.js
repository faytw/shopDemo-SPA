import shop from '../../data/products';

//initial state
const state = {
    all: shop,
    collection: 'all'
};

//getters
const getters = {
    allProducts: state => state.all,
    filterProducts : state => state.all.filter(item=>item.type===state.collection)
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
    'setCollection'(state, {collection}){
        state.collection = collection;
    }
};

export default {
    state,
    getters,
    // actions,
    mutations
};