<template>
  <div class="capLock">
    <h3>name: {{name}}, age: {{age}}, isMan: {{isMan}}, country: {{country}}</h3>
    <div>
      <button class="oper-butn" @click="changeCity">syncedCity</button>
      <button class="oper-butn" @click="changeWeight">changeWeight</button>
    </div>
    <h3>syncedCity: {{syncedCity}}; weight: {{weight}}kg</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, PropSync, Model, Watch, Emit } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'

@Component({
  props: {
    age: {
      type: Number,
      default: 20
    },
    country: {
      type: String,
      default: 'China'
    }
  }
})
export default class CapLock extends Vue {
  @Prop(String) readonly name: string | undefined
  @Prop({ type: Number, default: 18 }) readonly age: number | undefined
  @Prop([String, Boolean]) readonly isMan: string | boolean | undefined
  @PropSync('city', { type: String }) syncedCity!: string
  // use !: allow initializer and not definitely assign in the constructor
  @Model('change', { type: Number }) readonly weight!: number

  changeCity () {
    let citys = ['北京', '上海', '广州', '深圳', '成都', '杭州', '苏州', '西安', '天津']
    this.syncedCity = citys[Math.floor(Math.random() * 10)]
  }

  changeWeight () {
    // this.$emit('change', Math.round(Math.random() * 100))
    this.sendWeight(Math.round(Math.random() * 100)) // equire to above
  }

  @Emit('change')
  sendWeight (val: number) {
  }

  @Watch('city')
  onChildChanged (val: string, oldVal: string) {
    console.log('curCity: ' + val + '** oldCity: ' + oldVal)
  }

  @Watch('weight', { immediate: true })
  onPersonChanged1 (val: number, oldVal: number) {
    console.log('curWeight: ' + val + '** oldWeight: ' + oldVal)
  }
}
</script>

<style scoped lang="less">
.capLock {
  .oper-butn {
    margin-right: 10px;
  }
}
</style>
