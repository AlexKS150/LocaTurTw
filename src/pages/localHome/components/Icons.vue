<template>
  <div>
    <div class="title">旅行社及飯店預定外部連結</div>
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <div
            class="icon"
            v-for="item of page"
            :key="item.id"
          >
            <div class="icon-img">
              <a :href="item.linkUrl">
                <img class='icon-img-content' :src="item.imgUrl">
              </a>
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default{
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false,
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 4)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variables.styl"
@import "~styles/mixins.styl"
  .title
    line-height:.8rem
    background:#ccc
    text-align:.2rem
    text-align: center
    font-size:5vw
  .icons >>> .swiper-container
    height:0
    padding-bottom:35%
  .icons
    margin-top:.1rem
    .icon
      position:relative
      overflow:hidden
      float:left
      width: 25%
      height:0
      padding-bottom: 25%
      .icon-img
        position:absolute
        top:0
        left:0
        right:0
        bottom:.44rem
        box-sizing:border-box
        padding:.1rem
        .icon-img-content
          display:block
          margin:0 auto
          height:100%
          width:100%
      .icon-desc
        position:absolute
        left:0
        right:0
        bottom:0
        height:.44rem
        line-height:.44rem
        color:$dartTextColor
        text-align:center
        font-size:4vw
        ellipsis()

</style>
