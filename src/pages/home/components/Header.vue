<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>輸入縣市及旅遊景點
    </div>
    <router-link to="/city">
      <div class="header-right">
      <!-- 被vuex優化 -->
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe636;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default{
  name: 'HomeHeader',
  computed: {
    // 優化this.$store.state.city到this.city
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header
  display:flex
  line-height:$headerHeight
  background:$bgColor
  color:#fff
  .header-left
    width: .64rem
    float:left
    .back-icon
      text-align:center
      font-size:.4rem
  .header-input
    flex: 1
    height:.64rem
    line-height:0.64rem
    margin-top:.12rem
    margin-left:.2rem
    padding-left:.2rem
    background:#fff
    border-radius:.1rem
    color:#ccc
  .header-right
    min-width: 1.04rem
    padding:0 .1rem
    float: right
    text-align:center
    color:#fff
    .arrow-icon
      margin-left:-0.04rem
      font-size:.24rem

</style>
