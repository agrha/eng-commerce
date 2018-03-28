<template>
  <nav class="navbar navbar-light navbar-static-top" role="navigation" style="background-color: #9999ff; margin-bottom: 0">
    <ul class="nav navbar-top-links navbar-right" style= "float: right;">
      <h2>ENG-COMMERCE</h2>
      <div v-if='token'>
        <p class="btn btn-info btn-lg" @click= 'logout()' style='margin-left:15px'>
          <span class="glyphicon glyphicon-log-out"></span> Log out
        </p>
      </div>
      <cart></cart>
    </ul>
  </nav>
</template>

<script>
import Cart from '@/components/Cart'
export default {
  data () {
    return {
      token: localStorage.getItem('token') || null,
      profileUrl: localStorage.getItem('profileUrl') || null
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('Login')
    }
  },
  components: {
    Cart
  }
}
</script>
