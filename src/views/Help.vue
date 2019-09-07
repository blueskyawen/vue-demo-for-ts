<template>
  <div class="help">
    <CapLock :name="'Vivo'" :isMan="true" :city.sync="city" v-model="weight" />
    <p>********display in parent component**********</p>
    <p>city: {{city}}; weight: {{weight}}kg</p>
    <h2>vcCat组件库测试</h2>
    <vc-form-group class="vc-from-group">
      <vc-form-label class="vc-from-label">是否同意</vc-form-label>
      <vc-form-control class="vc-from-control">
        <vc-switch class="oper-item" v-model="aggres[0]"></vc-switch>
        <vc-switch class="oper-item" v-model="aggres[1]" :tip-labels="['是','否']"></vc-switch>
        <vc-switch class="oper-item" v-model="aggres[2]" :type="'min'" :disabled="true"></vc-switch>
      </vc-form-control>
    </vc-form-group>
    <div class="opers">
      <vc-loading :type="'clover'" :size="'max'"></vc-loading>
      <vc-loading :type="'clover'" :size="'medium'"></vc-loading>
      <vc-loading :type="'clover'" :size="'min'"></vc-loading>
    </div>
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
      weight: 55,
      aggres: [true, false, true]
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
  .opers {
    padding: 5px 0;
  }
  .oper-item {
    margin-right: 10px;
  }
  .vc-from-group {
    width: 600px !important;
  }
  .vc-from-group .vc-from-label {
    width: 20%;
  }
  .vc-from-group .vc-from-control {
    width: 80%;
    display: inline-flex;
  }
</style>
