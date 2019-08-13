<template>
  <div class="aboutMe">
    <h1 @click="clickFunc">{{ msg }}--{{ name }}</h1>
  </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator'

/* @Component
export default class HelloWorld extends Vue {
  @Prop() private msg: String;
} */
/* 组件选项都可以放在Component里, 也以放在Class里, 书写方式不同 */
@Component({
  props: {
    msg: {
      type: String
    }
  },
  data: function () {
    return {
      name: 'vue-ts-AboutMe'
    }
  },
  methods: {
    makeH: function () {
      alert('click - makeH - 2')
    }
  }
})
export default class HelloWorld extends Vue {
  clickFunc () : void {
    alert('click - HelloWorld - 2')
  }
}
</script>

<style scoped lang="less">
.aboutMe {
  padding: 30px;
}
</style>
