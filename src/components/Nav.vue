<script>
import nav from "../data/collections";

export default {
  data(){
    return {
      nav: nav,
      active: null,
    }
  },
  methods:{
    selectedList(collection,index){
      this.active = index;
    }
  }
}
</script>

<template>
  <nav>
    <div class="inner-width">
      <router-link 
        class="nav-link"
        :to="`/product_list/${item.type}`"
        v-for="(item,index) in nav"
        :key="index+'list'"
        :class="{active:active===index}"
        @click.native="selectedList(item.type,index)"
      >
        {{item.text}}
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
nav{
  margin: auto;
  text-align: center;
  border-top: 15px solid transparent;
  border-bottom: 20px solid transparent;
  white-space: nowrap;
  margin-top: 75px;
}
.nav-link{
  text-decoration: none;
  padding: 3px 8px;
  color: #464646;
}
.nav-link:hover,.active{
  color: #F6416C;
  cursor: pointer;
}
</style>
