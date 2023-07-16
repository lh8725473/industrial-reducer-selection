<template>
  <div class="header">
    <div class="title">
      星光传动产品选型系统
    </div>
    <div class="actions">
      <div class="languages">
        <el-switch
          :width="86"
          v-model="language"
          active-color="#ffffff"
          inactive-color="#ffffff"
          inactive-value="cn"
          active-value="en"
          inactive-text="中"
          active-text="en">
        </el-switch>
      </div>
      <div class="contact-us">
        <el-button type="primary" plain round>联系客服</el-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
      language: 'cn'
    }
  }
}
</script>

<style lang="scss">
.header{
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  .title{
    font-size: 20px;
    color: #005BAC;
  }
  .actions{
    display: flex;
    align-items: center;
    color: #005BAC;
    .languages{
      margin-right: 30px;
    }
  }

  .el-switch__label--left {
    margin-right: -29px;
    z-index: 2;
  }

  .el-switch__label--right {
    margin-left: -29px;
    z-index: 2;
  }

  .el-switch__core{
    margin: 0;
    position: relative;
    width: 40px;
    height: 40px;
    border: 1px solid #005BAC !important;
    outline: 0;
    border-radius: 20px;
    box-sizing: border-box;
    background: #DCDFE6;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
  }

  .el-switch__core:after{
    content: "";
    position: absolute;
    top: 3px;
    left: 5px;
    border-radius: 100%;
    transition: all .3s;
    width: 32px;
    height: 32px;
    background: linear-gradient(270deg, #005BAC 5%, #56A2E4 100%);
  }

  .el-switch.is-checked .el-switch__core::after{
    margin-left: -37px;
  }

  .el-switch__label.is-active{
    color: #ffffff;
  }
}
</style>
