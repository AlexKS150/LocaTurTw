<template>
  <div>
    <div class='detail-page'>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="galleryImgs"></detail-banner>
        <detail-header :sightName="sightName"></detail-header>
        <div class="content">
          <detail-desc :detailDesc="detailDesc" :mapUrl="mapUrl" :itemClaim="itemClaim"></detail-desc>
        </div>
        <copyright></copyright>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailDesc from './components/DetailDesc'
import Copyright from 'common/copyright/Copyright'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailDesc,
    Copyright
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      galleryImgs: [],
      detailDesc: '',
      mapUrl: '',
      itemClaim: ''
    }
  },
  computed: {
    ...mapState(['detailID'])
  },
  methods: {
    getDetailInfo () {
      axios.get('./static/localMock/siteIntro_' + (this.detailID).toString() + '.json').then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.galleryImgs = data.galleryImgs
        this.detailDesc = data.detailDesc
        this.mapUrl = data.mapUrl
        this.itemClaim = data.itemClaim
      }
    }
  },
  activated () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
