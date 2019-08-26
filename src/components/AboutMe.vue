<template>
  <div class="aboutMe">
    <h2 @click="clickFunc">msg: {{ msg }}</h2>
    <h2 @click="makeH">name: {{ name }}</h2>
    <h2 @click="setNameNum">msg2: {{msg2}}</h2>
    <h2>getter msgNameNum: {{msgNameNum}}</h2>
    <h2>gettter nameNum: {{nameNum}}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

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
  methods: {
    makeH: function () {
      alert('click - makeH - 2')
    }
  }
})
export default class AboutMe extends Vue {
  name: string = 'name-in-class'
  msg2: string = (this as any).msg + '**' + this.name

  created () {
    console.log('AboutMe -- created')
  }

  clickFunc (): void {
    alert('clickFunc--' + this.name)
  }

  makeH () {
    alert('click - makeH - in - class')
  }

  get msgNameNum () {
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
