<!-- 页面 -->
<template>
    <div id="nav-wrap">
        菜单页面
    </div>
</template>

<script>
export default {
    setup(props,{ refs , root }){

    }
}
</script>

<style lang='scss' scoped>
#nav-wrap{
    position: fixed;
    top: 0;
    left: 0;
    width: $navMenu;
    height: 100vh;
    background-color: #344a5f;
}
</style>
