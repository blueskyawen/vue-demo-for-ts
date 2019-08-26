<template>
  <div class="about">
    <div>
      <AboutMe :msg="'hello about'"></AboutMe>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AboutMe from '@/components/AboutMe.vue' // @ is an alias to /src

@Component({
  components: {
    AboutMe
  }
})
export default class About extends Vue {
}
</script>

<style scoped lang="less">
  .about {
    padding: 20px 100px;
  }
</style>
