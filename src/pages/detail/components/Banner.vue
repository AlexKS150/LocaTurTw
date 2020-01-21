<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_600x330_1abc2773.jpg">
            <div class="banner-info">
                <div class="banner-title">北京野生动物园(AAAA景区)</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe67b;</span>34</div>
            </div>
        </div>
        <common-gallery :imgs="imgs" v-show="showGallery" @close="handelGalleryClose"></common-gallery>
    </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallery: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_r_800x800_6129f4dd.jpg', 'http://img1.qunarzz.com/sight/p0/1507/92/878bc1fd0e41d1eb1dd011b8cbdf60b7.water.jpg_r_800x800_d9c8595b.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handelGalleryClose () {
      this.showGallery = false
    }
  },
  components: {
    CommonGallery
  }
}
</script>

<style lang="stylus" scoped>
.banner
    position: relative
    overflow: hidden
    height:0
    padding-bottom: 55%
    .banner-img
        width:100%
    .banner-info
        display:flex
        position:absolute
        left:0
        right:0
        bottom:0
        line-height: .6rem
        color:#fff
        background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
        .banner-title
            font-size:.32rem
            flex: 1
        .banner-number
            margin-top: .14rem
            padding:0 .4rem
            line-height: .32rem
            height: .32rem
            border-radius: .2rem
            background:rgba(0,0,0,0.8)
            font-size:.24rem
            .banner-icon
                font-size:.24rem
</style>
