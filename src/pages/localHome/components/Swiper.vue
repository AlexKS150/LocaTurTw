<template>
<div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item of list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" >
    </swiper-slide>
  <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
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
        speed: 3000,
        pagination: '.swiper-pagination',
        loop: true,
        autoplayDisableOnInteraction: false
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper>>>.swiper-pagination-bullet-active
  background:#4F1AC8
.wrapper
  width: 100%
  height: 2rem
  padding-bottom:26.7%
  background:#fff
  .swiper-img
    width:100%
</style>
