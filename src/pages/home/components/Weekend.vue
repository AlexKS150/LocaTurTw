<template>
  <div>
    <div class="title">週末計畫</div>
    <ul>
      <li class="li-item" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top:.2rem
  line-height:.8rem
  background:#ccc
  text-align:.2rem
.item-img-wrapper
  overflow: hidden
  height: 0
  padding-bottom:37.09%
  .item-img
    width:100%
.item-info
  padding:.1rem
  .item-title
    line-height:.54rem
    font-size:.32rem
    ellipsis()
  .item-desc
    line-height:.4rem
    color:#aaa
    ellipsis()
</style>
