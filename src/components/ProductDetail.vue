<script>
import tabs from '../data/collections/tabs';

export default {
  data(){
    return{
      currentView: '',
      tabs: tabs,
      active: 0,
      quality: 1,//index+1
    }
  },
  components:{

  },
  methods:{
    selectedTab(view,index){
      this.currentView = view;
      this.active = index;
    },
    addToCart(){
      const data = {
        id: this.product.id,
        prodName: this.product.prodName,
        brandName: this.product.brandName,
        price: this.product.price,
        quality: this.quality,
        img: this.product.img
      };

      this.$store.commit('addToCart', {data});
    },
  },
  computed:{
    items(){
      return this.$store.state.products.all;
    },
    product(){
      const {id} = this.$route.params;
      return this.items.find(product=>product.id==id)||{};
    },
    stock(){
      const renderNums = [];
      const num = this.product.stock;
      renderNums.length = num;
      return renderNums;
    }
  }
}
</script>

<template>
  <div class="product-detail">
    <div class="inner-width">
      <div class="box img-box">
        <img :src="product.img" alt="">
      </div>
      <div class="box info-box">
        <div class="brand">{{product.brandName}}</div>
        <div class="name">{{product.prodName}}</div>
        <div class="features">
          <div  class="feature"
                v-for="(item,index) in product.features"
                :key="index">
            <i class="material-icons">done</i>
            <span>{{item}}</span>
          </div>
        </div>
        <div class="price">網路價
          <span class="num">${{product.price}}</span>
        </div>
        <div class="price">原價
          <del>${{product.oriPrice}}</del>
        </div>
        <div class="quality">
          數量
          <select name="" id="" v-model.number="quality">
            <option :value="index+1" 
              v-for="(item,index) in stock"
              :key="index">
              {{index+1}}
            </option>
          </select>
          <span class="stock">庫存：{{product.stock}}</span>
        </div>
        <div class="btn add-to-cart" @click="addToCart">加入購物車</div>
      </div>
      <nav class="detail-tabs">
        <div class="tab-link"
             v-for="(tab,index) in tabs"
             :key="index"
             :class="{active:active===index}"
             @click="selectedTab(tab.view,index)">
             {{tab.type}}
        </div>
      </nav>
      <div class="tab-content">
        <component :is="currentView"></component>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-detail {
  padding-top: 20px;
  padding-bottom: 30px;
  text-align: center; 
}
.box {
  vertical-align: top;
  box-sizing: border-box;
  display: inline-block;
}
.img-box {
  font-size: 0;
  text-align: center;
  width: 30%;
}
.img-box img{
  max-width: 250px;
}
.info-box {
  margin-bottom: 40px; 
  text-align: left; 
  display: inline-block;
  width: 30%;
  max-width: 300px;
}
.brand {
  font-size: 1.125em;
}
.name {
  font-size: 1.125em;
  line-height: 1.2em;
  margin-bottom: 1em;
  max-width: 100%;
}
.features {
  margin-bottom: 10px; 
}
.feature {
  font-size: 1em;
}
.feature span {
  vertical-align: top;
}
.num {
  font-size: 1.5em;
  color: #f6416c;
  padding-left: 5px;
}
.quality {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.quality>select {
  width: 75px;
  height: 30px;
  margin-left: 10px;
}
.stock {
  font-size: 1em;
  display: inline-block;
  margin-left: auto;
  vertical-align: bottom;
}
.add-to-cart {
  background-color: #00B8A9;
  color: #fff;
  width: 100%;
  height: 44px;
  line-height: 44px;
  margin-top: 25px;
  margin-right: auto;  
}
.add-to-cart:hover{
  background-color: rgb(75, 224, 212);
}
.detail-tabs{
  border-top: 1px solid #d4d4d4;
  border-bottom: 1px solid #d4d4d4;
  white-space: nowrap;
}
.tab-link {
  padding: 12px 25px;
  display: inline-block;
  color: #747474;
  max-width: 33.3333%;
  box-sizing: border-box;
}
.tab-link:hover{
  color: #f6416c;
}
.tab-link.active {
  background-color: #F6416C;
  color: #fff;
}
.tab-content {
  padding-top: 30px;
  min-height: 50vh;
}
@media (max-width: 576px){
  .box {
    max-width: 250px;
  }
  .info-box{
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
    margin-top: 1em;
  }
  .img-box{
    display: block;
    margin: auto;
    float: none;
    width: auto;
  }
}
</style>

