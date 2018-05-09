<script>
export default {
  data(){
    return{
      showUserList: false
    }
  },
  computed:{
    qtyInCart(){
      return this.$store.getters.qtyInCart;
    },
    isLogin(){
      return this.$store.getters.getLoginStatus;
    },
    userName(){
      return this.$store.getters.getUserName;
    }
  },
  methods:{
    clickMyCart(){
      this.$emit('clickMyCart', true);
    },
    logout(){
      this.$store.dispatch('userLogout');
    },
    clickUserBtn(){
      this.showUserList = !this.showUserList;
    }
  }
}
</script>

<template>
  <header>
    <div class="logo">
      <router-link to="/">
        <img src="dist/assets/images/logo.png" alt="logo">
      </router-link>
    </div>
    <div class="header-nav">
      <div  v-if="isLogin" 
            class="user"
            :class="{active:showUserList===true}"
            @click="clickUserBtn">
        <i class="material-icons">face</i>
        <span>{{userName}}</span>
        <ul class="user-list" v-if="showUserList">
          <li>會員資料</li>
          <li>訂單查詢</li>
          <li @click="logout">登出</li>
        </ul>
      </div>

      <router-link to="/sign_in" v-if="!isLogin">
        <span>登入</span>
      </router-link>

      <a @click="clickMyCart">
        <i class="material-icons">shopping_cart</i>
        <span>({{qtyInCart}})</span>
      </a>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f5f5f5;
  padding-top: 5px;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  background-color: #f5f5f5;
}
.logo {
  max-width: 80px;
  margin-right: auto;
  margin-left: 46%;
  padding-left: 15px
}
@media (max-width: 576px) {
  .logo{
    margin-left: 0;
  }
}
.header-nav {
  text-align: right;
  padding-top: 25px;
  padding-right: 15px;  
}
.header-nav a {
  padding: 3px 5px; 
  color: #464646;
  text-align: center;
}
.header-nav a:hover{
  color: #F6416C;
  cursor: pointer;
}
.header-nav a > span {
  vertical-align: top;
}
.user {
  display: inline-block;
  cursor: pointer;
  padding: 3px 15px;
  color: #00B8A9;
  position: relative;
  background-color: #fff;
}
.user span {
  vertical-align: top;
}
.user:hover,user.active{
  color:#F6416C;
}
.user-list{
  position: absolute;
  width: 100%;
  left: 0;
  border-top: 1px solid #F6416C;
  background-color: #fad6d6;
  z-index: 1;
}
.user-list li {
  text-align: center;
  padding: 5px;
  color: #2e2e2e;
}
.user-list li:hover {
  color: #F6416C;
  background: #f8b8b8;
}

</style>


