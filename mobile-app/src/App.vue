<template>
  <div id="app">
    <router-view />
    <Navigate />
  </div>
</template>

<script>
  /* eslint-disable no-console */

  import Navigate from './components/Navigate.vue'
export default {
  name: 'App',
  components: {
    Navigate
  }
}
</script>


<style>
  img{
    display: block;
  }
  #app {
    font-family: PingFangSC-Regular, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body{
    background-color: #fafafa;
  }
</style>
