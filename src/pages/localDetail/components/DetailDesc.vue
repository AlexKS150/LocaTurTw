<template>
    <div>
        <div class="desc-group">
            <div class="site-content">{{this.detailDesc}}</div>
            <div class="wiki-claim" v-html="this.itemClaim"></div>
            <div><iframe class="google-map" :src="mapUrl" width="370" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    detailDesc: String,
    mapUrl: String,
    itemClaim: String
  }
}
</script>

<style lang="stylus" scoped>
    .desc-group
        padding: .3rem
        .site-content
            text-indent: .8rem
            font-size:.4rem
            line-height:.6rem
        .wiki-claim
            margin-top:.5rem
            font-size:.5rem
            text-align:center
        .google-map
            margin-top:1rem

</style>
