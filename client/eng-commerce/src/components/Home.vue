<template>
  <div id = 'home' class = 'jumbotron'>
    <H1>
      Eng Commerce
    </H1>
    <button @click = 'toRegister'>Register</button>
    <button @click = 'toSignIn'>Signin</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    toRegister () {
      this.$router.push({name: 'Register'})
    },
    toSignIn () {
      this.$router.push({name: 'Login'})
    }
  }
}
</script>

<style scoped>
  #home{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
