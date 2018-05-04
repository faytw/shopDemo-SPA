<script>
export default {
  computed:{
    products(){
      const collection = this.$store.state.products.collection;

      if (collection === "all"){
        return this.$store.getters.allProducts;
      } else {
        return this.$store.getters.filterProducts;
      }
    }
  }
}
</script>

<template>
  <div class="product-list inner-width">
    <div class="product-item md-3 sm-4 xs-6"
         v-for="(item,index) in products"
         :key="index+'item'" 
    >
      <router-link :to="`/product/${item.type}/${item.id}`">
        <div class="img-box">
            <img :src="item.img" alt="">
        </div>
        <div class="text">{{item.brandName}}</div>
        <div class="text">{{item.prodName}}</div>
        <div class="price">${{item.price}}</div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
}
.product-item {
  margin-top: 20px;
  margin-bottom: 20px;
}
.product-item>a {
  padding-left: 1em;
  padding-right: 1em;
  display: block;
}
.img-box {
  width: 100%;
  max-width: 250px;
  overflow: hidden;
}
.text {
  font-size: 1em;
  color: #464646;
}
.price {
  color: #464646;
  font-size: 1.125em;
}
</style>

