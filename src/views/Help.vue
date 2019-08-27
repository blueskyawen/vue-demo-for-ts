<template>
  <div class="help">
    <CapLock :name="'Vivo'" :isMan="true" :city.sync="city" v-model="weight" />
    <p>********display in parent component**********</p>
    <p>city: {{city}}; weight: {{weight}}kg</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CapLock from '@/components/CapLock.vue' // @ is an alias to /src

@Component({
  components: {
    CapLock
  },
  data () {
    return {
      city: '上海',
      weight: 55
    }
  }
})
export default class Help extends Vue {
}
</script>

<style scoped lang="less">
  .help {
    padding: 20px 100px;
  }
</style>
