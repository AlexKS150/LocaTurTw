<template>
  <div>
    <div class="search">
      <input v-model='keyword' class="search-input" type="text" placeholder="輸入縣市名稱">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">沒有找到相關數據</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default{
  name: 'HomeSearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city) 被下一行城市替代
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {click: true})
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.search
  height:.72rem
  padding:.03rem 0.2rem
  background:$bgColor
  .search-input
    box-sizing:border-sizing
    width:100%
    height:.62rem
    padding:0 0.05rem
    line-height:.62rem
    text-align:center
    border-radius:.06rem
    color:#666
    font-size:5vw
.search-content
  z-index:1
  overflow:hidden
  position:absolute
  top:1.56rem
  left:0
  right 0
  bottom:0
  background:#eee
  .search-item
    line-height:.62rem
    padding-left:.2rem
    background:#fff
    color:#666
    font-size:5vw
</style>
