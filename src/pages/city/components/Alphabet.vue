<template>
  <ul
    class="list"
    @touchstart="touchstartFn"
    @touchmove="touchmoveFn"
    @touchend="touchendFn"
  >
    <li
      class="item"
      v-for="key of letters"
      :key="key"
      :ref="key"
      @click="handleLetterClick"
    >{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      hastouched: false,
      letterOffset: null,
      timer: 0
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let key in this.cities) {
        letters.push(key)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    touchstartFn () {
      this.hastouched = true
      this.letterOffset = this.$refs['A'][0].getBoundingClientRect()
    },
    touchmoveFn (e) {
      let index = 0
      if (this.hastouched) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          index = Math.floor((e.touches[0].clientY - this.letterOffset.top) / this.letterOffset.height)
          if (index > 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    touchendFn () {
      this.hastouched = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
