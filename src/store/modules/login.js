import members from '../../data/members';

//initial state
const state = {
    userName: '',
    userID:'',
    isLogin: false,
};

//getters
const getters = {
    getUserName: state => state.userName,
    getUserID: state => state.userID,
    getLoginStatus: state => state.isLogin
}

//actions
const actions = {
    'getUserData'(context,{data}){
        //取得user資料
        const userData = members.find(user => user.email === data.email);
        // console.log(userData);
        context.commit('getUserData', {userData});
        context.commit('setLoginStatus',true);
        
    },
    'userLogout'(context){
        context.commit('setLoginStatus', false);
        context.commit('resetUserData');
    }
}

//mutations
const mutations = {
    'setLoginStatus'(state, status){
        state.isLogin = status;
    },
    'getUserData'(state, {userData}){
        state.userName = userData.userName;
        state.userID = userData.userID;
    },
    'resetUserData'(state){
        state.userName = "";
        state.userID = "";
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}