<template>
  <div>
    <div class="title">推薦地點</div>
    <ul>
      <li class="li-item" v-for="item of list" :key="item.detailID">
          <img class="item-img" :src="item.imgUrl">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <router-link tag="button" class="item-button" :to=" '/localDetail/' + item.detailID">
              <div class="click-change" @click="handleDetailIDChange(item.detailID)">查看詳情</div>
            </router-link>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default{
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  methods: {
    handleDetailIDChange (detailID) {
      this.changeDetailID(detailID)
    },
    ...mapMutations(['changeDetailID'])
  },
  computed: {
    ...mapState(['detailID'])
  },
  deactivated () {
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  line-height:.8rem
  background:#ccc
  text-align:.2rem
  text-align: center
  font-size:5vw
.li-item
  overflow:hidden
  display:flex
  height:1.9rem
  .item-img
    width:1.7rem
    height:1.7rem
    padding:.1rem
  .item-info
    flex:1
    padding:.1rem
    min-width:0
    .item-title
      line-height:.54rem
      font-size:5vw
      ellipsis()
    .item-desc
      line-height:.4rem
      color:blue
      font-size:4vw
      ellipsis()
    .item-button
      line-height:4vw
      margin-top:.16rem
      background:#ff9300
      padding:0.1rem
      border-radius:.06rem
      font-size:4vw
</style>
