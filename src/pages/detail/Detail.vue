<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content">
          <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '一般票',
        children: [{
          title: '第三方案票',
          children: [{
            title: '第三方案-無購物點票'
          }]
        }, {
          title: '第五方案票'
        }]
      }, {
        title: '優惠票'
      }, {
        title: '學生票'
      }, {
        title: '兒童票'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
    .content
        height: 50rem
</style>
