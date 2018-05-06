<script>
export default {
  props: ['animated'],
  computed:{
    added(){
       return this.$store.getters.itemInCart.length > 0;
    },
    items(){
      if(this.added){
        return this.$store.getters.itemInCart;
      }
    },
    qtyInCart(){
      return this.$store.getters.qtyInCart;
    },
    priceInCart(){
      return this.$store.getters.priceInCart;
    },
    animateClass(){
      return {
        slidein: this.animated === true,
        slideout: this.animated === false,
        animated: true,
      }
    },
  },
  methods:{
    closeMyCart(){
      this.$emit('closeMyCart',false);
    },
    removeItem(id){
      this.$store.commit('removeItemInCart',{id});
    }
  },
}
</script>

<template>
  <div class="cart-wrap" :class="animateClass">
    <div class="content">
      <div class="title">我的購物車
        <i class="material-icons"
           @click="closeMyCart">cancel</i>
      </div>
      <div class="no-item" v-if="!added">
        <div>購物車無商品</div>  
      </div>
      <div class="product-item"
           v-if="added"
           v-for="(item,index) in items"
           :key="index+'item'">
        <div class="img-box box">
          <img :src="item.img" alt="">
        </div>
        <div class="info-box">
          <div class="brandName">{{item.brandName}}</div>
          <div class="prodName">{{item.prodName}}</div>
          <div class="price">網路價：${{item.price}}</div>
          <div class="qty">數量：{{item.quality}}</div>
        </div>
        <div class="remove"
             @click="removeItem(item.id)">
          <i class="material-icons">close</i>
          <span>刪除此商品</span>
        </div>
      </div>
    </div>
    <div class="counter-wrap"
         v-if="added">
        <div class="total">總金額：${{priceInCart}}</div>
    </div>
  </div>
</template>

<style scoped>
@keyframes slidein {
  from {
    right: -400px;
  }
  to {
    right: 0;
  }
}
@keyframes slideout {
  from {
    right: 0;
  }
  to {
    right: -400px;
  }
}
.cart-wrap {
  position: fixed;
  width: 300px;
  max-height: calc(100vh - 85px);
  overflow: hidden;
  overflow-y: auto;
  top: 75px;
  right: 0;
  background-color: #fff;
  box-shadow: 1px 0px 5px #E2B51A;
}
.cart-wrap.slidein{
  animation-duration: .3s;
  animation-name: slidein;
}
.cart-wrap.slideout{
  animation-duration: .3s;
  animation-name: slideout;
  /* 定位 */
  right: -400px;
}
.title{
  background-color: #e2b51a;
  padding-left: 15px;
  padding-right: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: #fff;
  letter-spacing: 2px;
}
.title i {
  vertical-align: bottom;
  float: right;
  cursor: pointer;
}
.product-item {
  border-top: 1px solid #f7f7f7;
}
.product-item:first-child{
  border-top-width: 0px;
}
.img-box {
  display: inline-block;
  width: 130px;
  font-size: 0;
}
.info-box {
  display: inline-block;
  width: calc(100% - 130px - 30px);
  padding-right: 15px;
  font-size: 0.875em;
  padding-bottom: 20px;
  padding-top: 15px;
  vertical-align: text-bottom;
}
.price{
  margin-top: 5px;
  padding-top: 5px;
  border-top: 2px dotted #faeba6; 
}
.remove{
  text-align: right;
  font-size: 0.75em;
  padding: 5px 15px;
  cursor: pointer;
  color: #E2B51A;
}
.remove:hover {
  color: #2e2e2e;
}
.remove i {
  font-size: 0.875em;
  height: 1ex;
}
.no-item {
  text-align: center;
  padding: 20px 0px;
}
.counter-wrap{
  background-color: #faeba6;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
}
.total {
  text-align: right;
  color: rgb(148, 93, 42);
}
</style>

