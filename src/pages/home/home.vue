<template>
  <div class="home">
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
export default {
  name: 'home',
  data () {
    return {
      msg: 'home'
    }
  },
  components: {
    HomeHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
