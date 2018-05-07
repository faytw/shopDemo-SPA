//initial state
const state = {
    inCart: [],
};

//getters
const getters = {
    itemInCart: state => state.inCart,
    qtyInCart(state){
        return state.inCart.reduce(function(qty,product){
            return qty + product.quality;
        }, 0);
    },
    priceInCart(state){
        return state.inCart.reduce(function(price,product){
            return price + product.price * product.quality;
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
                price: data.price,
                quality: data.quality,
                img: data.img
            });
        }else{
            record.quality += data.quality;
        }
    },
    'removeItemInCart'(state,{id}){
        const itemInCart = state.inCart.map(item=>item.id);
        const index = itemInCart.indexOf(id);
        return state.inCart.splice(index,1);
    }
};

export default {
    state,
    getters,
    // actions,
    mutations
};