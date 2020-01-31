<template>
    <div>
        <div class="title">使用注意事項</div>
        <ol class="notice-group">
            <li>這是免費手機網站，如果要用桌機及筆電，改用Google旅遊景點查詢。</li>
            <li>個人免費網站請勿盜用，轉載註明出處。</li>
            <li>改變縣市在首頁頁面左上角觸碰即可。</li>
            <li>下面有每個縣市的推薦景點。</li>
            <li>要看詳情頁面則觸碰查看詳情橘色框即可。</li>
            <li>每頁詳情頁面都有附Google內嵌地圖。</li>
            <li>此網站無飯店及旅行社贊助。</li>
            <li>任何資訊上的錯誤請在Github上面留言。</li>
            <li>個人製作網站，有勞力心力上限制，請勿小人犯賤。如有違法則依法律途徑。</li>
        </ol>
    </div>
</template>

<script>
export default {
  name: 'HomeNotice'
}
</script>

<style lang="stylus" scoped>
    .title
        line-height:.8rem
        background:#ccc
        text-align:.2rem
        text-align: center
        font-size:5vw
    .notice-group
        list-style-position:inside
        list-style:square
        margin:.5rem .5rem .5rem 1rem
        li
            font-size:5vw
            line-height:6vw
</style>
