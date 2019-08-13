<template>
  <div class="hello">
    <h2 @click="clickMsg" v-local-direc>msg: {{ msg }}</h2>
    <h3>name: {{myName}} {{myYear}}</h3>
    <div class="opers">
      <span @click="addYear">Add Year</span>
    </div>
    <h4>For-List</h4>
    <ul>
      <li v-for="num in numList" :key="num">{{num}}</li>
    </ul>
    <h4>Component-insert</h4>
    <div>
      <local-compt :num="500"></local-compt>
      <global-compt v-bind:num="1000"></global-compt>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

let localDirec = {
  inserted: function (el : any, binding : any) {
    el.style.backgroundColor = '#ccffff'
  }
}

Vue.component('global-compt', {
  props: ['num'],
  data () {
    return {
      name: 'global组件'
    }
  },
  template: '<h4>{{name}}: {{num}}</h4>'
})

@Component({
  template: '<div><h4>{{name}}: </h4><div>{{num}}</div></div>',
  props: ['num'],
  data () {
    return {
      name: '局部组件'
    }
  }
})
class localCompt extends Vue {}

@Component({
  props: {
    msg: {
      type: String
    }
  },
  directives: { localDirec },
  components: { 'local-compt': localCompt },
  data: function () {
    return {
      name: 'vue-ts-HelloWorld',
      city: 'shanghai',
      year: 50,
      date: new Date(),
      numList: [1, 2, 3],
      myYear: 1000
    }
  },
  methods: {
    clickMsg: function () {
      alert('click - msg - ' + (this as any).msg)
    },
    addYear: function () {
      (this as any).year = (this as any).year + 5
      this.$emit('yearChange', (this as any).year)
    }
  },
  computed: {
    myName: {
      get: function () {
        return this.name + 'haha!!'
      }
    }
  },
  watch: {
    year: function () {
      this.myYear += this.year
    }
  }
})
export default class HelloWorld extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  .opers {
    padding: 10px 0px;
    > span {
      display: inline-block;
      padding: 5px;
      border: solid 1px #ccc;
      border-radius: 3px;
      font-size: 16px;
      cursor: pointer;
      margin: 0 10px;
    }
  }
}
</style>
