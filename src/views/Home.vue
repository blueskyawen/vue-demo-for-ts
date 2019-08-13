<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" @yearChange="handleYearChange($event)"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  handleYearChange (value : number) {
    alert('handleYearChange: ' + value)
  }
}
</script>

<style scoped lang="less">
.home {
  padding: 20px 100px;
}
</style>
