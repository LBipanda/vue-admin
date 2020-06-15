<!-- 页面 -->
<template>
    <div id="main-wrap">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    setup(props,{ refs , root }){

    }
}
</script>

<style lang='scss' scoped>
#main-wrap{
    position: fixed;
    left: $navMenu;
    right: 0;
    top: 75px;
    bottom: 0;
    border: 30px solid #f7f7f7;
    border-bottom: none;
    -webkit-box-sizing: border;
}
</style>
