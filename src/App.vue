<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/views/commom/Header.vue'

export default {
  name: 'HomeView',
  components: {
    Header
  }
}
</script>

<style lang="scss">
.container{
  width: 1200px;
  padding: 0;
  margin: 0 auto;
}
</style>
