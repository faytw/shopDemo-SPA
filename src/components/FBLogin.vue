<script>
export default {
    data(){
        return {
            userID:'',
            username:'',
            connected: false
        }
    },
    methods:{
        connectedFB(){
            FB.login(this.statusGet);
        },
        statusGet(result){
            if(result.status === 'connected'){
                this.connected = true;
                this.getUserDataFB();              
            }else {
                this.connected = false;
            }
        },
        getUserDataFB(){
            return new Promise( resolve => { 
                FB.api('/me', 'GET', 
                    { fields:['picture', 'name'] }, rs => {
                        this.userID = rs.id;
                        this.username = rs.name;
                }); 
            });            
        }
    },
    mounted(){
        FB.init({
            appId: '239853190119171',
            version: 'v2.8',
        });
        
        FB.getLoginStatus(this.statusGet);
    }
}
</script>


<template>
    <div>
        <div class="fb-login" @click="statusGet">使用 Facebook 登入</div>
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