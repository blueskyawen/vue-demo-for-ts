<template>
  <div class="hello">
    <h2 @click="clickMsg" v-local-direc>msg: {{ msg }}</h2>
    <h3>name: {{myName}} {{myYear | transY}}</h3>
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
      <local-compt02 :num="100"></local-compt02>
      <vue-compt :num="66"></vue-compt>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import vueCompt from './compt.vue'

let localDirec = {
  inserted: function (el : any, binding : any) {
    el.style.backgroundColor = '#ccffff'
  }
}

Vue.component('global-compt', {
  template: '<div><h4>{{name}}: {{num}}</h4></div>',
  props: ['num'],
  data () {
    return {
      name: '全局组件'
    }
  }
})

@Component({
  template: '<div><h4>{{name}}: {{num}}</h4></div>',
  props: ['num'],
  data () {
    return {
      name: '局部组件'
    }
  }
})
class localCompt extends Vue {}

let localCompt02 = {
  props: ['num'],
  data () {
    return {
      name: '局部组件02'
    }
  },
  template: '<div><h3>{{name}}: ##{{num}}</h3></div>'
}

// 全局混入
Vue.mixin({
  data () {
    return {
      msg2: '全局混入',
      numList: [2, 3],
      site: {
        name: '腾讯'
      }
    }
  },
  created: function () {
    console.log('全局混入 --- created')
  },
  methods: {
    startMix2: function () {
      console.log('全局混入 --- startMix')
    }
  }
})
var localMix2 = {
  data () {
    return {
      msg2: 'localMix2',
      msg3: 'localMix2-msg3',
      msg4: 'localMix2-msg4',
      msg5: 'localMix2-msg5',
      numList: [4, 5, 9],
      site: {
        name: '阿里巴巴',
        url: 'www.alibaba.com',
        title: '我是阿里巴巴',
        haha: 'haha localMix2'
      }
    }
  },
  created: function () {
    console.log('实例混入: localMix2 --- created')
  },
  methods: {
    startMix: function () {
      console.log('实例混入: localMix2 --- startMix')
    },
    hello: function () {
      console.log('实例混入: localMix2 --- hello')
    }
  }
}

@Component({
  props: {
    msg: {
      type: String
    }
  },
  directives: { localDirec },
  components: { 'local-compt': localCompt, localCompt02, vueCompt },
  mixins: [localMix2],
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
      this.$emit('yearChange', (this as any).year);
      (this as any).startMix();
      (this as any).startMix2()
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
  },
  filters: {
    transY: function (value: string) {
      return value + ' Coco'
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
