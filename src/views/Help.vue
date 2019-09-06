<template>
  <div class="help">
    <CapLock :name="'Vivo'" :isMan="true" :city.sync="city" v-model="weight" />
    <p>********display in parent component**********</p>
    <p>city: {{city}}; weight: {{weight}}kg</p>
    <h2>组件库测试</h2>
    <vl-form-group class="vc-from-group">
      <vl-form-label class="vc-from-label">是否同意</vl-form-label>
      <vl-form-control class="vc-from-control">
        <vl-switch class="oper-item" v-model="aggres[0]"></vl-switch>
        <vl-switch class="oper-item" v-model="aggres[1]" :tip-labels="['是','否']"></vl-switch>
        <vl-switch class="oper-item" v-model="aggres[2]" :type="'min'" :disabled="true"></vl-switch>
      </vl-form-control>
    </vl-form-group>
    <div class="opers">
      <vl-loading :type="'clover'" :size="'max'"></vl-loading>
      <vl-loading :type="'clover'" :size="'medium'"></vl-loading>
      <vl-loading :type="'clover'" :size="'min'"></vl-loading>
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
