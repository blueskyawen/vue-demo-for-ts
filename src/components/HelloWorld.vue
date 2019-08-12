<template>
  <div class="hello">
    <h1 @click="clickFunc">{{ msg }}--{{ name }}</h1>
    <p>
      <p>For a guide and recipes on how to configure / customize this project,</p>
      <p @click="makeH">check out the</p>
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  </div>
</template>

<script lang="ts">
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
      name: 'ts-HelloWorld'
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
