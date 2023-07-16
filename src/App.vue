<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <div class="container">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
            v-for="breadcrumbItem in breadcrumbList"
            :key="breadcrumbItem.path"
            :to="{ path: breadcrumbItem.path }"
            >{{ breadcrumbItem.name }}</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/views/commom/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  computed: {
    ...mapGetters(
      ['breadcrumbList']
    )
  },
  methods: {
    clickBreadcrumb (item) {
      this.$router.push({ path: '/model-number', query: { typeId: item.id } })
    }
  }
}
</script>

<style lang="scss">
#app{
  height: 100%;
}
.main{
  background: #F6F7F9;
  height: calc(100% - 80px);
  overflow: auto;
}
.container{
  overflow: hidden;
  width: 1200px;
  padding: 0;
  margin: 0 auto;
  .el-breadcrumb{
    padding-top: 15px;
    padding-left: 10px;
  }
  .el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{
    color: #005BAC;
  }
}
</style>
