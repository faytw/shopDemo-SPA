//initial state
const state = {
    inCart: [],
};

//getters
const getters = {
    qtyInCart(state){
        return state.inCart.reduce(function(qty,product){
            return qty + product.quality;
        }, 0);
    }    
};

//mutations
const mutations = {
    'addToCart'(state, {data}){
        const record = state.inCart.find(product=>product.id===data.id);
        if(!record){
            state.inCart.push({
                id: data.id,
                prodName: data.prodName,
                brandName: data.brandName,
                quality: data.quality
            });
        }else{
            record.quality += data.quality;
        }
    }
};

export default {
    state,
    getters,
    // actions,
    mutations
};