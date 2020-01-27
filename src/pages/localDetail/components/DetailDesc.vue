<template>
    <div>
        <div class="desc-group">
            <div class="site-content">{{this.detailDesc}}</div>
            <div class="wiki-claim">{{this.itemClaim}}</div>
            <div class="link-group">
                <a class="link-text" :href="mapUrl">點擊此處開地圖</a>
            </div>
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
        .wiki-claim
            margin-top:.5rem
            font-size:.5rem
            text-align:center
        .link-group
            margin 1rem auto 0
            padding: .5rem .2rem 0
            height: 1rem
            width: 3rem
            text-align:center
            background:purple
            .link-text
                color:#fff
                font-size:.4rem

</style>
