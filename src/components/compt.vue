<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  template: '<div><h4>{{name}}: {{num}}</h4></div>',
  props: ['num'],
  data () {
    return {
      name: '局部组件-ts-vue'
    }
  }
})
export default class localCompt extends Vue {}
</script>

<style scoped lang="less">
  .about {
    padding: 20px 100px;
  }
</style>
