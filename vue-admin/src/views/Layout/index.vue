<!-- 页面 -->
<template>
    <div id="layout">
        <LayoutHeader />
        <LayoutNav />
        <LayoutMain />
    </div>
</template>

<script>
import LayoutHeader from './components/Header';
import LayoutNav from './components/Nav';
import LayoutMain from './components/Main';
export default {
    name:'layout',
    components:{
        LayoutHeader,
        LayoutNav,
        LayoutMain
    },
    setup(props,{ refs , root }){

    }
}
</script>

<style lang='scss' scoped>
#layout{
}
</style>
