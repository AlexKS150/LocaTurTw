<template>
  <div>
    <home-header ></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <copyright></copyright>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import Copyright from 'common/copyright/Copyright'
// axios package
import axios from 'axios'
import { mapState } from 'vuex'
export default{
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    Copyright
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      lastCityID: null
    }
  },
  computed: {
    ...mapState(['city', 'cityID'])
  },
  methods: {
    getLocalHomeCommon () {
      axios.get('./static/localMock/commonIndex.json')
        .then(this.doneLocalHomeCommon)
    },
    doneLocalHomeCommon (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
      }
    },
    getLocalHomeInfo () {
      axios.get('./static/localMock/localIntro.json')
        .then(this.doneLocalHomeInfo)
    },
    doneLocalHomeInfo (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data[this.cityID]
        this.recommendList = data.recommendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.lastCityID = this.cityID
    this.getLocalHomeCommon()
    this.getLocalHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.lastCityID = this.cityID
      this.getLocalHomeInfo()
    }
  }
}
</script>

<style>

</style>
