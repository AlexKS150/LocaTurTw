<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :liItem="liItem"></city-list>
    <city-sidelist :cities="cities" @change="handleSideChange"></city-sidelist>
</div>
</template>

<script>
import axios from 'axios'
import CityHeader from './component/Header'
import CitySearch from './component/Search'
import CityList from './component/List'
import CitySidelist from './component/SideList'

export default{
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CitySidelist
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      liItem: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleSideChange (liItem) {
      this.liItem = liItem
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style>

</style>
