<template>
  <div id="app" class="container my-5">
    <NavBar/>
    <div class = "container text-center">
        <h2>OUR PRODUCT</h2>
    </div>
    <br>
    <div class="row">
      <Item
        v-for="(item, idx) in forSale"
        :key="idx"
        v-bind:item="item"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Item from '@/components/Item.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Cart from './Cart.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'forSale'
    ])
  },
  components: {
    Item, NavBar, Cart, Footer
  },
  methods: {
    ...mapActions([
      'fetchItem'
    ])
  },
  created () {
    this.fetchItem()
  }
}
</script>

<style>
  /* Nothing for now */
</style>
