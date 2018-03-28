<template>
<div>
    <button class="btn btn-primary" data-toggle="modal" data-target="#Cart">ShowCart {{inCart.length}} Items</button>
    <div id="Cart" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Shopping cart</h5>
            <button class="close" data-dismiss="modal">
            &times;
            </button>
        </div>
        <div class="modal-body">
            <table class="table">
            <tbody>
                <tr v-for="(item,index) in inCart" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.price | rupiahs }}</td>
                <td>
                    <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">x</button>
                </td>
                </tr>
                <tr>
                    <th></th>
                    <th>{{ total | rupiahs }}</th>
                    <th></th>
                </tr>
            </tbody>
            </table>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">Keep shopping</button>
            <button class="btn btn-primary">Check out</button>
        </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import {rupiahs} from '../filters'
export default {
  name: 'Cart',
  methods: {
    ...mapActions([
      'removeFromCart',
      'checkOut'
    ]),
    removeFromCart (index) {
      this.$store.dispatch('removeFromCart', index) // tombol x pada cart akan menjalankan method ini yang datanya disimpan di vuex store
    },
    checkout () {
      let array = this.inCart
      let obj = {
        userId: localStorage.getItem('id'),
        items: this.inCartId,
        price: this.total()
      }
      this.checkOut(obj)
    }
  },
  computed: {
    ...mapGetters([
      'inCart',
      'inCartId'
    ]),
    numInCart () { return this.inCart.length }, // panjang array di cart yang dipakai untuk penanda jumlah barang di cart
    cart () {
      return this.inCart
    },
    total () {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0) // sama seperti looping lalu += setiap price barang yang ada di cart
    },
  },
  filters: {
    rupiahs
  }
}
</script>
