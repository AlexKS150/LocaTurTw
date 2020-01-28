<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">當前地區</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              {{this.currentCity}}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">熱門縣市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name); handleCityIDClick(item.id)">
            <div class="button">
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name); handleCityIDClick(innerItem.id)">
            <div class="button">
              {{innerItem.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// npm install @better-scroll/core@next
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default{
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city) 被下一行代碼替代
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity']),
    handleCityIDClick (id) {
      this.changeCityID(id)
    },
    ...mapMutations(['changeCityID'])
  },
  computed: {
    ...mapState({
      // 改變映射變數名稱
      currentCity: 'city',
      currentCityID: 'cityID'
    })
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {click: true})
  },
  // 看看是否刪除watch區域
  watch: {
    liItem () {
      if (this.liItem) {
        const element = this.$refs[this.liItem][0]
        // 數組資料
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.border-topbottom
  &:before
    border-color:#ccc
  &:after
    border-color:#ccc
.border-bottom
  &:before
    border-color:#ccc
.list
  overflow:hidden
  position: absolute
  top: 1.58rem
  left: 0
  right:0
  bottom: 0
  .title
    background: .4rem
    background:#9AA0FF
    color:#414141
    font-size:.35rem
    text-align:center
  .button-list
    overflow:hidden
    padding:.1rem
    .button-wrapper
      float:left
      width:33.33%
      .button
        margin:.1rem
        padding:.1rem 0
        text-align:center
        border:.02rem solid #ccc
        border-radius: .06rem
        font-size: .4rem
  .item-list
    .item
      line-height:.54rem
      padding-left:.2rem
      font-size: .4rem
      text-align: center
</style>
