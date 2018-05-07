import members from '../../data/members';

//initial state
const state = {
    user: [],
    isLogin: false,
};

//getters
const getters = {
    getUserName: state => state.user.userName,
    getLoginStatus: state => state.isLogin
}

//actions
const actions = {
    'getUserData'(context,{data}){
        //取得user資料
        const userData = members.find(user => user.email === data.email);
        console.log(userData);
        
        //是否有資料
        if(userData){
           context.commit('getUserData', {userData});
           context.commit('setLoginStatus',true);
        }else{
            //errorMsg
        }
    },
    'userLogout'(context){
        context.commit('setLoginStatus', false);
        context.commit('resetUserData');
    }
}

//mutations
const mutations = {
    'setLoginStatus'(state,status){
        state.isLogin = status;
    },
    'getUserData'(state, {userData}){
        state.user = userData;
    },
    'resetUserData'(state){
        state.user = [];
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}