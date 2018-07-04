<script>
export default {
    data(){
        return {
            userData: {},
            connected: false,
        }
    },
    methods:{
        getFBLoginStatus(){
            FB.getLoginStatus(function(response){
                if(response.status==="connected"){
                    this.getUserDataFB();
                    this.connected = true;
                    this.$store.commit('setLoginStatus', true);     
                }else{
                    //
                }
            }.bind(this));
        },
        getUserDataFB(){
            return new Promise( resolve => { 
                FB.api('/me', 'GET', { 
                    fields:['picture', 'name'] 
                }, 
                response => {
                    this.userData = {
                        userName: response.name,
                        userID: response.id
                    };
                }); 
            });    
        }
    },
    watch:{
        userData(){
            if(this.connected){
                this.$store.commit('getUserData', {userData:this.userData});
            }
        }
    },
    mounted(){
        FB.init({
            appId: '239853190119171',
            version: 'v2.8',
        });  
    }
}
</script>


<template>
    <div>
        <div class="fb-login" @click="getFBLoginStatus">使用 Facebook 登入</div>
    </div>
</template>

<style scoped>
.fb-login {
    text-align: center;
    background-color: #3b5998;
    color: #fff;
    height: 41px;
    line-height: 41px;
    border-radius: 3px;
    cursor: pointer;
}
</style>