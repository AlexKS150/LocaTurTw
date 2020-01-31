<template>
    <div>
        <div class="desc-group">
            <div class="site-content">{{this.detailDesc}}</div>
            <div class="wiki-claim" v-html="this.itemClaim"></div>
            <div class="iframe-container"><iframe class="google-map" :src="mapUrl" frameborder="0" style="border:0;" allowfullscreen=""></iframe></div>
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
            font-size:5vw
            line-height:6.5vw
        .wiki-claim
            margin-top:.5rem
            font-size:7vw
            text-align:center
        .iframe-container
            margin-top:3vw
            overflow: hidden;
            padding-top: 56.25%;
            position: relative;
            height:7rem
            .google-map
                border: 0;
                height: 100%;
                left: 0;
                position: absolute;
                top: 0;
                width: 100%;

</style>
