<template>
    <ul class="list">
        <li class="item">北</li>
        <li class="item">中</li>
        <li class="item">南</li>
        <li class="item">東</li>
        <li class="item">島</li>
    </ul>
</template>

<script>
export default{
  name: 'CitySidelist'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.list
    display:flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    .item
        line-height: .44rem
        text-align: center
        color:$bgColor
</style>
