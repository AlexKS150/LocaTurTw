<template>
  <div>
    <home-header ></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
// axios package
import axios from 'axios'
import { mapState } from 'vuex'
export default{
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getLocalHomeCommon () {
      axios.get('./static/localMock/commonIndex.json')
        .then(this.doneLocalHomeCommon)
    },
    getLocalHomeInfo () {
      axios.get('./static/mock/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    doneLocalHomeCommon (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
      }
    },
    doneLocalHomeInfo (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.recommendList = data.recommendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getLocalHomeCommon()
    this.getLocalHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getLocalHomeInfo()
    }
    // console.log(this.city)
  }
}
</script>

<style>

</style>
