<template>
  <div class="header">
    城市選擇
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default{
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header
  position:relative
  overflow:hidden
  height:$headerHeight
  line-height:$headerHeight
  text-align: center
  color: #fff
  background: $bgColor
  font-size: .32rem
  .header-back
    position:absolute
    top:0
    left:.1rem
    margin-left:-.04rem
    font-size:.5rem
    color:#fff
</style>
