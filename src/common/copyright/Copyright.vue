<template>
    <div>
        <div class="copyright-group">
            <div class="data-use-claim text-group">
                轉載谷歌及維基資料，免費提供
            </div>
            <div class="copyright-claim text-group">
                作品版權所有
            </div>
            <div class="copyright-claim text-group">
                盜用必究
            </div>
            <div class="copyright-date text-group">
                2020 ©Copyright
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Copyright'
}
</script>

<style lang="stylus" scoped>
.copyright-group
    margin-top:1rem
    padding-top:.5rem
    width:100%
    height:3.5rem
    background:purple
    .data-use-claim
        margin-bottom:.5rem
    .text-group
        font-size:0.5rem
        color:#fff
        text-align:center
</style>
