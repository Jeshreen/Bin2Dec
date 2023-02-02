<template>
  <div id="app">
    <NumberConverter/>
  </div>
</template>

<script>
import NumberConverter from './components/NumberConverter.vue'
export default {
  name: 'App',
  components: {
    NumberConverter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
