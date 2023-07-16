<template>
    <div class="model-number">
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
          <div class="item-completion" v-for="item in (row - types.length % row)" :key="item"></div>
        </template>
      </div>
    </div>
  </template>

<script>

export default {
  name: 'ModelNumber',
  components: {
  },
  data () {
    return {
      row: 4, // 每行几个
      types: [
        {
          id: 1,
          image: require('../assets/logo.png'),
          name: 'NMRV系列'
        },
        {
          id: 2,
          image: require('../assets/logo.png'),
          name: 'NMRV系列2'
        },
        {
          id: 3,
          image: require('../assets/logo.png'),
          name: 'NMRV系列3'
        },
        {
          id: 4,
          image: require('../assets/logo.png'),
          name: 'NMRV系列4'
        },
        {
          id: 5,
          image: require('../assets/logo.png'),
          name: 'NMRV系列4'
        },
        {
          id: 6,
          image: require('../assets/logo.png'),
          name: 'NMRV系列4'
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
      console.log('clickType')
      console.log(this.$i18n.t('message.hello'))
      alert(this.$i18n.t('message.hello'))
    }
  }
}
</script>

<style lang="scss">
.model-number{
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
