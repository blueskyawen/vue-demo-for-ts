<template>
  <div class="aboutMe">
    <h2 @click="clickFunc">msg = {{ msg }}</h2>
    <h2 @click="makeH">name = {{ name }}</h2>
    <h2 @click="setNameNum">msg2 = {{msg2}}</h2>
    <h2 @click="makeClassVar">get msgNameNum = {{msgNameNum}}</h2>
    <h2 @click="makeMyMixin">get nameNum = {{nameNum}}</h2>
    <p @click="makeYourMixin">getData: {{getData}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { MyMixin, YourMixin } from './mixin.js'

@Component({
  props: {
    msg: {
      type: String
    }
  },
  data: function () {
    return {
      name: 'name-in-component',
      num: 10
    }
  },
  created () {
    console.log('AboutMe -- created in-component')
  },
  mounted () {
    console.log('AboutMe -- mounted in-component')
  },
  methods: {
    makeH: function () {
      alert('click - makeH - 2')
    },
    makeClassVar: function () {
      alert('click - makeClassVar - ' + (this as any).msg2)
    }
  },
  computed: {
    getData () {
      return this.$data
    }
  }
})
export default class AboutMe extends mixins(YourMixin, MyMixin) {
  name: string = 'name-in-class'
  msg2: string = (this as any).msg + '**' + this.name

  created () {
    console.log('AboutMe -- created')
  }

  clickFunc (): void {
    // this.xx优先使用装饰器函数里声明的属性
    alert('clickFunc--' + this.name)
  }

  makeH () {
    alert('click - makeH - in - class')
  }

  get msgNameNum () {
    // this.xx优先使用装饰器函数里声明的属性
    return (this as any).msg + '@' + this.name + '@' + (this as any).num + '@' +
      this.msg2 + '@' + (this as any).me
  }

  get nameNum () {
    return this.name + '@@@' + (this as any).num
  }

  set nameNum (str: string) {
    let stes = str.split('@@@')
    this.name = stes[0];
    (this as any).num = +stes[1]
  }

  setNameNum () {
    this.nameNum = 'new Name set@@@20'
  }
}
</script>

<style scoped lang="less">
.aboutMe {
  padding: 30px;
}
</style>
