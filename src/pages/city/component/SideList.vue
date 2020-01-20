<template>
    <ul class="list">
        <li class="item" v-for="item of liItems" :key="item" :ref="item" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" @click="handleSideClick">
          {{item}}
        </li>
    </ul>
</template>

<script>
export default{
  name: 'CitySidelist',
  props: {
    cities: Object
  },
  computed: {
    liItems () {
      const liItems = []
      for (let i in this.cities) {
        liItems.push(i)
      }
      return liItems
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    // 為了優化city vue 加載空物件值
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleSideClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 避免滑動過快
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 22)
          if (index >= 0 && index < this.liItems.length) {
            this.$emit('change', this.liItems[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.list
    display:flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    .item
        line-height: .44rem
        text-align: center
        color:$bgColor
</style>
