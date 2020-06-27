<!-- 页面 -->
<template>
    <div id="header-wrap">
        <div @click="changeNavState()"><svg-icon iconName="menu" iconClass="menu" /></div>
        <div class="flex aic h100pc">
            <div class="flex aic h100pc bdr mt-10 mb-10 pr-10">
                <img src="aa" />
                <p class="lh100pc ml-15">管理员</p>
            </div>
            <svg-icon iconName="main" iconClass="main" class="pl-10" />
        </div>
    </div>
</template>

<script>
export default {
    setup(props,{ refs , root }){
        const changeNavState = (() => {
            // root.$store.commit('SET_COLLAPSE','')
                root.$store.commit('appStore/SET_COLLAPSE','')

        })

        return {
            changeNavState
        }
    }
}
</script>

<style lang='scss' scoped>
#header-wrap{
    position: fixed;
    // left: $navMenu;
    top: 0;
    right: 0;
    height: 75px;
    background-color: #fff;
    -webkit-box-shadow: 0 3px 16px 0 rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    @include webkit(transition,all .3s ease);
    svg{
        font-size: 35px;
    }
}
.open{
    #header-wrap{
        left: $navMenu;
    }
}
.close{
    #header-wrap{
        left: $navMenuMin;
    }
}
</style>
