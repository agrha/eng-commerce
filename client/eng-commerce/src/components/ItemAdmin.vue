<template>
  <div class="col-md-3">
    <div class="card">
      <img :src="item.image" :alt="name" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{ item.name }}</h4>
        <h5 class="card-title">{{ item.description }}</h5>
        <div class="card-text">{{ item.price | rupiahs }}</div>
        <div class="card-text">Stock: {{ item.stock }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'item',
  props: ['item'], // props dari parent app.vue
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'addToCart',
      'delete'
    ]),
    addCart (item) {
      let obj = {
        name: item.name,
        description: item.description,
        image: item.image,
        price: item.price
      }
      console.log(obj)
      this.addToCart(item)
    }
  },
  filters: {
    rupiahs: num => `Rp. ${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
  }
}
</script>
