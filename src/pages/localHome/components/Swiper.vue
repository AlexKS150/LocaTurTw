<template>
  <div class="wrapper-container">
    <div class="wrapper">
      <swiper :options="swiperOption" v-if="showSwiper && isKeep" ref="swiper">
        <swiper-slide v-for="item of list" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" >
        </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    </div>
</template>

<script>
export default{
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      notNextTick: true,
      swiperOption: {
        autoplay: true,
        speed: 2000,
        pagination: '.swiper-pagination',
        loop: true,
        autoplayDisableOnInteraction: false
      },
      isKeep: false
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  },
  // 阻止幻燈片幻夜停止自動播放
  activated () {
    this.isKeep = true
  },
  deactivated () {
    this.isKeep = false
  }
}
</script>

<style lang="stylus" scoped>
.wrapper>>>.swiper-pagination-bullet-active
  background:#4F1AC8
.wrapper-container
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  .wrapper
    width: 100%
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    padding-bottom:26.7%
    background:#fff
    .swiper-img
      width:100%
</style>
