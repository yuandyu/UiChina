<template>
  <div id="app">
    <router-view/>
    <Navigate />
  </div>
</template>

<script>
import Navigate from './components/Navigate.vue'
export default {
  name: 'app',
    components: {
        Navigate
    }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
