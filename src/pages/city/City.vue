<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-sidelist></city-sidelist>
</div>
</template>

<script>
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
  }
}
</script>

<style>

</style>
