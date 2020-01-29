<template>
    <div>
        <div class="header-abs" v-show="showAbs" @click="handleGoBack">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </div>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <div @click="handleGoBack">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </div>
            {{this.sightName}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  props: {
    sightName: String
  },
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // 這裡要注意keep-alive跟實機使用
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    },
    handleGoBack () {
      this.$router.go(-1)
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
    this.$nextTick(() => { document.body.scrollTop = 0 })
  },
  deactivated () {
    // 避免全局變數影響其他頁面
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
    .header-abs
        position: absolute
        left: .2rem
        top: .2rem
        width: .8rem
        height: .8rem
        line-height: .8rem
        border-radius: .4rem
        background: rgba(0,0,0,.8)
        .header-abs-back
            position: absolute
            color:#fff
            font-size: .4rem
            left: .1rem
    .header-fixed
        z-index:2
        position:fixed
        top:0
        left:0
        right:0
        height:$headerHeight
        line-height:$headerHeight
        text-align: center
        color: #fff
        background: $bgColor
        font-size: .32rem
        .header-fixed-back
            position:absolute
            top:0
            left:.1rem
            margin-left:-.04rem
            font-size:.5rem
            color:#fff
</style>
