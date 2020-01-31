<template>
    <div>
        <div class="copyright-group">
            <div class="data-use-claim text-group">
                轉載谷歌、維基及其他線上資料資料<br>免費提供
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
    margin-top:.5rem
    padding-top:.5rem
    width:100%
    height:35vw
    background:purple
    .data-use-claim
        margin-bottom:.1rem
    .text-group
        font-size:5vw
        color:#fff
        text-align:center
        line-height:6vw
</style>
