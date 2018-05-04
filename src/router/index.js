import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../App.vue';
import Main from '../components/Main.vue';
import ProductList from '../components/ProductList.vue';
import ProductDetail from '../components/ProductDetail.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
// import ForgotPassword from '../components/ForgotPassword';
import Cart from '../components/Cart.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: '/',
        component: App,
        children: [
            {path:'', component: Main},
            {path:'cart', component: Cart},
            {path:'sign_in', component: Login},
            {path:'sign_up', component: Register},
            // {path:'forgot_password', component: ForgotPassword},
            {path:'product_list/:type', component: ProductList},
            {path:'product/:type/:id', component: ProductDetail}
        ]       
    }]
});