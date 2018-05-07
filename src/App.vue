<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";
import Cart from "./components/Cart.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  data(){
    return{
      myCartStatus: false,
    }
  },
  methods:{
    handleMyCart(status){
      this.myCartStatus = status;
      
    }
  },
  components: {
    Header,
    Nav,
    Cart,
    Footer
  },
}
</script>

<template>
  <div id="app">
    <div class="container">
      <Header @clickMyCart="handleMyCart"></Header>
      <Nav></Nav>
      <router-view></router-view>
      <Cart  
            @closeMyCart="handleMyCart"
            :animated="myCartStatus">
      </Cart>
      <Footer></Footer>
    </div>
  </div>
</template>

<style>
.container{
  width: 1920px;
  max-width: 100%;
  margin: auto;
}
.inner-width{
  width: 1140px;
  max-width: 100%;
  margin: auto;
}
body{
  font-family: Microsoft Yahei , Arial;
}
a{
  text-decoration: none;
}
.btn{
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
}
.with-border-style{
  border: 1px solid #d4d4d4;
  border-radius: 5px; 
  transition: border-color .15s ease-in-out box-shadow .15s ease-in-out;
}
.with-border-style:focus{
  border-color: #89a6fa;
  box-shadow: 0px 0px 1px #4977fb;
  outline: none;
}
</style>
