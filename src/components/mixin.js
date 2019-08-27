import Vue from 'vue'
import Component from 'vue-class-component'

// You can declare a mixin as the same style as components.
@Component
export class MyMixin extends Vue {
  mixinValue = 'I am MyMixin'

  created () {
    console.log('MyMixin -- created')
  }

  makeH () {
    alert('click - makeH - in - YourMixin')
  }

  makeMyMixin () {
    alert('click - makeMyMixin - in - MyMixin')
  }
}

@Component
export class YourMixin extends Vue {
  mixinValue = 'I am YourMixin'
  mixinMsg = 'love your Mixin !'

  created () {
    console.log('YourMixin -- created')
  }

  makeH () {
    alert('click - makeH - in - YourMixin')
  }

  makeMyMixin () {
    alert('click - makeMyMixin - in - YourMixin')
  }

  makeYourMixin () {
    alert('click - makeYourMixin - in - YourMixin')
  }
}
