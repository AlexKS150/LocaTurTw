<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="輸入縣市名稱">
  </div>
</template>

<script>
export default{
  name: 'HomeSearch',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.search
  height:.72rem
  padding:0 0.2rem
  background:$bgColor
  .search-input
    box-sizing:border-sizing
    width:100%
    height:.62rem
    padding:0 0.05rem
    line-height:.62rem
    text-align:center
    border-radius:.06rem
    color:#666

</style>
