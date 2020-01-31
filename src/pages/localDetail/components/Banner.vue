<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg">
            <div class="banner-info">
                <div class="banner-title">{{this.sightName}}</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe67b;</span>{{this.bannerImgs.length}}</div>
            </div>
        </div>
        <fade-animation>
          <common-gallery :imgs="galleryImgs" v-show="showGallery" @close="handelGalleryClose"></common-gallery>
        </fade-animation>
    </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array

  },
  data () {
    return {
      showGallery: false,
      galleryImgs: []
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
      this.galleryImgs = this.bannerImgs
    },
    handelGalleryClose () {
      this.showGallery = false
      this.galleryImgs = []
    }
  },
  components: {
    CommonGallery,
    FadeAnimation
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
            margin-left:.1rem
            font-size: 5vw
            flex: 1
            margin-bottom:.5vw
        .banner-number
            margin-top: .14rem
            padding:0 .4rem
            line-height: 5.5vw
            height: 5vw
            border-radius: .2rem
            background:rgba(0,0,0,0.8)
            font-size:5vw
            .banner-icon
                font-size:5vw
</style>
