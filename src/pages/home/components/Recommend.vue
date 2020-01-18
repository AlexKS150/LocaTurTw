<template>
  <div>
    <div class="title">推薦地點</div>
    <ul>
      <li class="li-item" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看詳情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
        title: '上海迪士尼乐园',
        desc: '全球最大的迪士尼城堡'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1812/66/664b5e8f234743dda3.water.jpg_200x200_b7e57d57.jpg',
        title: '三亚千古情景区',
        desc: '置身传统黎村，领略黎族风情'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top:.2rem
  line-height:.8rem
  background:#ccc
  text-align:.2rem
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
      font-size:.32rem
      ellipsis()
    .item-desc
      line-height:.4rem
      color:#aaa
      ellipsis()
    .item-button
      line-height:.44rem
      margin-top:.16rem
      background:#ff9300
      padding:0.1rem
      border-radius:.06rem
</style>
