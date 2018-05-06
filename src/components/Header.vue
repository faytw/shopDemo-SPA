<script>
export default {
  computed:{
    qtyInCart(){
      return this.$store.getters.qtyInCart;
    }
  },
  methods:{
    clickMyCart(){
      this.$emit('clickMyCart',true);
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
        <router-link to="/sign_in">
            <span>登入</span>
        </router-link>
        <router-link to="/sign_up">
            <span>註冊</span>
        </router-link>
        <router-link to="/cart">
            <i class="material-icons">chat</i>
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
    margin-left: auto;
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
</style>


