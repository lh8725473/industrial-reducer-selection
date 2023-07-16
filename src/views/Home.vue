<template>
  <div class="home">
    <div class="types">
      <div
        v-for="type in types"
        :key="type.id"
        class="type-item"
        @click="clickType(type)">
        <img class="image" :src="type.image">
        <div class="name">{{ type.name }}</div>
      </div>
      <template v-if="completion">
        <div class="item-completion" v-for="item in (row - types.length % row)" :key="'completion' + item "></div>
      </template>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
  data () {
    return {
      row: 4, // 每行几个
      types: [
        {
          id: 1,
          image: require('../assets/logo.png'),
          name: 'R/F/K/S系列斜齿轮减速机'
        },
        {
          id: 2,
          image: require('../assets/logo.png'),
          name: 'R/F/K/S系列斜齿轮减速机2'
        },
        {
          id: 3,
          image: require('../assets/logo.png'),
          name: 'R/F/K/S系列斜齿轮减速机3'
        },
        {
          id: 4,
          image: require('../assets/logo.png'),
          name: 'R/F/K/S系列斜齿轮减速机4'
        },
        {
          id: 5,
          image: require('../assets/logo.png'),
          name: 'R/F/K/S系列斜齿轮减速机4'
        },
        {
          id: 6,
          image: require('../assets/logo.png'),
          name: 'R/F/K/S系列斜齿轮减速机4'
        }
      ]
    }
  },
  computed: {
    completion () { // 是否需要伪元素
      return this.types.length % this.row > 0
    }
  },
  methods: {
    clickType (type) {
      const breadcrumb = [
        {
          path: '/home',
          name: '首页'
        },
        {
          path: '/model-number?typeId=' + type.id,
          name: type.name
        }
      ]
      this.$store.dispatch('togglebreadcrumb', breadcrumb)
      this.$router.push({ path: '/model-number', query: { typeId: type.id } })
    }
  }
}
</script>

<style lang="scss">
.home{
  .types{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .type-item{
      margin-top: 20px;
      width: 280px;
      height: 350px;
      border-radius: 10px;
      background: #FFFFFF;
      text-align: center;
      padding-top: 20px;
      cursor: pointer;
      .image{
        width: 230px;
        height: 230px;
      }
      .name{
        margin-top: 25px;
      }
    }
  }

  .item-completion{
    content: '';
    width: 280px;
    border:1px solid transparent;
    padding: 5px;
    overflow: hidden;
  }
}

</style>
