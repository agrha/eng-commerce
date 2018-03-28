<template>
<div>
    <button class="btn btn-primary" data-toggle="modal" data-target="#Cart">ADD PRODUCT</button>
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
            <form action="">
              <div class="form-group">
                <label for="email">Product Name</label>
                <input v-model= 'productName' type="text" class="form-control"  placeholder="Product Name">
              </div>
              <div class="form-group">
                <label for="email">Product Description</label>
                <input v-model= 'description' type="text" class="form-control"  placeholder="Product Description">
              </div>
              <div class="form-group">
                <label for="pwd">Price</label>
                <input v-model= 'price' type="text" class="form-control" placeholder="Product Price ">
              </div>
              <div class="form-group">
                <label for="pwd">Image URL</label>
                <input v-model= 'image' type="text" class="form-control" placeholder="Product ImageUrl">
              </div>
            </form>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button class="btn btn-primary" @click = 'addProduct' data-dismiss="modal">Insert Product</button>
        </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      productName: '',
      description: '',
      price: '',
      image: ''
    }
  },
  methods: {
    ...mapActions([
      'insertProduct'
    ]),
    addProduct () {
      let obj = {
        name: this.productName,
        description: this.description,
        price: this.price,
        image: this.image
      }
      console.log(obj)
      this.insertProduct(obj)
    }
  }
}
</script>
