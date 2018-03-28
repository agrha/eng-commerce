<template>
  <div id="app" class="container my-5">
    <NavBarAdmin/>
    {{forSale}}
    <div class = "container my-5 text-center">
        <h2>OUR PRODUCT</h2>
    </div>
    <br>
    <div class="row">
      <ItemAdmin
        v-for="(item, idx) in forSale"
        :key="idx"
        v-bind:item="item"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import ItemAdmin from '@/components/ItemAdmin.vue'
import NavBarAdmin from '@/components/NavBarAdmin.vue'
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
    ItemAdmin, NavBarAdmin, Cart, Footer
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
