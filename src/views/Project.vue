<template>
    <div class="project">
      <div class="project-step">
        <div class="title"> 产品选型步骤 </div>
        <div class="step detail">
          <span class="step-number">1</span>
          <span class="step-name">工况参数</span>
          <div class="step-detail">
            <div class="detail-item">
              <div class="label">
                座号
              </div>
              <div class="vaule">
                MNAFFE21
              </div>
            </div>
            <div class="detail-item">
              <div class="label">
                级数
              </div>
              <div class="vaule">
                2P
              </div>
            </div>
          </div>
        </div>
        <div class="line"></div>
				<div class="step cur">
          <span class="step-number">2</span>
          <span class="step-name">产品参数</span>
        </div>
        <div class="line"></div>
				<div class="step">
          <span class="step-number">3</span>
          <span class="step-name">附件参数</span>
        </div>
        <div class="line"></div>
				<div class="step">
          <span class="step-number">4</span>
          <span class="step-name">选型结果</span>
        </div>
      </div>
      <div class="project-form step1" v-show="cur === 1">
        <div class="title">工况参数选择</div>
        <el-form :rules="rules" ref="ruleForm" label-position="top" :model="step1Form">
          <el-form-item
            v-for="item in step1FormItems"
            :key="item.key"
            :label="item.label"
            :prop="item.key">
            <el-select v-model="step1Form[item.key]" :placeholder="item.placeholder">
              <el-option
                v-for="option in item.options"
                :key="option.key"
                :value="option.key">{{ option.name }}</el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="使用系数fs"
            prop="fs">
              <el-input style="width: 75%;" v-model="step1Form.fs" placeholder="可输入或点击右侧“计算”得出使用系数"></el-input>
              <el-button type="primary" style="width: 80px;margin-left: 10px;">计算</el-button>
          </el-form-item>
          <el-form-item
            label="电机转速r/min"
            prop="zhuanshu">
              <el-input v-model="step1Form.zhuanshu" placeholder=""></el-input>
          </el-form-item>
          <el-form-item
            label=""
            prop="zhuanshu">
            <el-input placeholder="请输入内容" v-model="step1Form.zhuanshu">
              <template slot="prepend">+%</template>
            </el-input>
          </el-form-item>
          <el-form-item
            label="输出扭矩N.m"
            prop="niuju">
              <el-input v-model="step1Form.niuju" placeholder=""></el-input>
          </el-form-item>
          <el-form-item
            label=""
            prop="zhuanshu">
            <el-input placeholder="请输入内容" v-model="step1Form.zhuanshu">
              <template slot="prepend">+%</template>
            </el-input>
          </el-form-item>
        </el-form>
        <div class="step1-result">
          <div style="margin-right: 10px;color: #1A202C;">工况选型结果</div>
          <div class="line"></div>
          <el-button type="primary" style="width: 80px;margin-left: 10px;">确定</el-button>
        </div>
      </div>
      <div class="project-form step2" v-show="cur === 2">
        <div class="title">产品参数</div>
        <el-form :rules="rules" ref="ruleForm" label-position="top" :model="step1Form">
          <el-form-item
            v-for="item in step1FormItems"
            :key="item.key"
            :label="item.label"
            :prop="item.key">
            <el-select v-model="step1Form[item.key]" :placeholder="item.placeholder">
              <el-option
                v-for="option in item.options"
                :key="option.key"
                :value="option.key">{{ option.name }}</el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="使用系数fs"
            prop="fs">
              <el-input style="width: 75%;" v-model="step1Form.fs" placeholder="可输入或点击右侧“计算”得出使用系数"></el-input>
              <el-button type="primary" style="width: 80px;margin-left: 10px;">计算</el-button>
          </el-form-item>
          <el-form-item
            label="电机转速r/min"
            prop="zhuanshu">
              <el-input v-model="step1Form.zhuanshu" placeholder=""></el-input>
          </el-form-item>
          <el-form-item
            label=""
            prop="zhuanshu">
            <el-input placeholder="请输入内容" v-model="step1Form.zhuanshu">
              <template slot="prepend">+%</template>
            </el-input>
          </el-form-item>
          <el-form-item
            label="输出扭矩N.m"
            prop="niuju">
              <el-input v-model="step1Form.niuju" placeholder=""></el-input>
          </el-form-item>
          <el-form-item
            label=""
            prop="zhuanshu">
            <el-input placeholder="请输入内容" v-model="step1Form.zhuanshu">
              <template slot="prepend">+%</template>
            </el-input>
          </el-form-item>
        </el-form>
        <div class="step1-result">
          <div style="margin-right: 10px;color: #1A202C;">工况选型结果</div>
          <div class="line"></div>
          <el-button type="primary" style="width: 80px;margin-left: 10px;">确定</el-button>
        </div>
      </div>
    </div>
  </template>

<script>

export default {
  name: 'Project',
  components: {
  },
  data () {
    return {
      cur: 1, // 当前步骤
      step1FormItems: [
        {
          key: 'shuru',
          label: '输入方式',
          placeholder: '请选择',
          options: [
            {
              key: '1',
              name: '选项1'
            },
            {
              key: '2',
              name: '选项2'
            }
          ],
          value: ''
        },
        {
          key: 'shuru2',
          label: '输入方式',
          placeholder: '请选择',
          options: [
            {
              key: '1',
              name: '选项1'
            },
            {
              key: '2',
              name: '选项2'
            }
          ],
          value: ''
        },
        {
          key: 'shuru3',
          label: '输入方式3',
          placeholder: '请选择',
          options: [
            {
              key: '1',
              name: '选项1'
            },
            {
              key: '2',
              name: '选项2'
            }
          ],
          value: ''
        },
        {
          key: 'shuru4',
          label: '输入方式4',
          placeholder: '请选择',
          options: [
            {
              key: '1',
              name: '选项1'
            },
            {
              key: '2',
              name: '选项2'
            }
          ],
          value: ''
        },
        {
          key: 'zhuanshu',
          label: '点击转速',
          placeholder: '请选择',
          options: [
            {
              key: '1',
              name: '选项1'
            },
            {
              key: '2',
              name: '选项2'
            }
          ],
          value: ''
        }
      ],
      step1Form: {
        shuru: ''
      },
      rules: {
        shuru:
        { required: true, message: '请选择活动区域', trigger: 'change' }
      }
    }
  },
  computed: {
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
.project{
	display: flex;
	justify-content: space-around;
  color: #1A202C;
	.project-step{
    padding: 10px;
		width: 300px;
		border-radius: 10px;
    background-color: #ffffff;
    .title{
      margin-top: 10px;
      margin-bottom: 20px;
      font-size: 16px;
      color: #1A202C;
    }
    .step{
      height: 56px;
      border-radius: 10px;
      background: #F2F6FC;
      color: #90A3BF;
      display: flex;
      align-items: center;
      cursor: pointer;
      &.cur{
        background: linear-gradient(270deg, #005BAC 5%, #56A2E4 100%);
        color: #ffffff;
        .step-number{
          color: #005BAC;
        }
      }
      &.detail{
        flex-wrap: wrap;
        height: auto;
        padding: 14px 0;
        .step-number{
          background: #005BAC;
          color: #ffffff;
        }
        .step-name{
          color: #005BAC;
        }
      }
      .step-detail{
        width: 100%;
        padding: 10px 20px;
        .detail-item{
          display: flex;
          background-color: #ffffff;
          color: #666666;
          font-size: 16px;
          height: 40px;
          line-height: 40px;
          .label{
            padding: 0 10px;
            flex: 1;
            border-top: 2px solid #c7d1df;
            border-left: 2px solid #c7d1df;
          }
          .vaule{
            padding: 0 10px;
            flex: 1;
            text-align: right;
            border: 2px solid #c7d1df;
            border-bottom: none;
          }
          &:last-child{
            .label{
              border-bottom: 2px solid #c7d1df;
            }
            .vaule{
              border-bottom: 2px solid #c7d1df;
            }
          }
        }
      }
      .step-number{
        width: 28px;
        height: 28px;
        border-radius: 14px;
        background: #ffffff;
        line-height: 28px;
        text-align: center;
        display: inline-block;
        margin: 0 20px;
      }
    }
    .line{
      height: 24px;
      width: 2px;
      background: #90A3BF;
      position: relative;
      left: 30px;
      margin: 5px 0;
    }
	}
	.project-form{
		width: 875px;
		border-radius: 10px;
    background-color: #ffffff;
    padding: 10px;
    padding-left: 45px;
    .el-form-item{
      width: 50%;
      display: inline-block;
    }

    .el-select{
      width: 100%;
    }

    .el-form-item__content{
      width: 90%;
    }

    .step1-result{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .line{
        flex: 1;
        height: 1px;
        background-color: #D8D8D8;
      }
    }
	}
}

</style>
