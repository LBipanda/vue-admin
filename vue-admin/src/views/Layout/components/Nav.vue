<!-- 页面 -->
<template>
    <div id="nav-wrap">
        <el-menu 
        default-active="1-4-1" 
        class="el-menu-vertical-demo" 
        @open="handleOpen" 
        @close="handleClose" 
        :collapse="isCollapse" 
        background-color="transparent" 
        text-color="#fff"
        router>
            <template v-for="(item,index) in routers">
                <el-submenu v-if="!item.hidden" :key="index" :index="index + ''" >
                    <!-- 一级菜单 -->
                    <template slot="title">
                    <i :class="item.meta.icon"></i>
                    <span slot="title">{{item.meta.name}}</span>
                    </template>
                    <!-- 子菜单 -->
                    <el-menu-item v-for="(sonItem,index) in item.children" :key="index" :index="sonItem.path">{{sonItem.meta.name}}</el-menu-item>
                    
                    <!-- <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu> -->
                </el-submenu>
            </template>
        </el-menu>
        <svg-icon iconName="common" iconClass="common" />
    </div>
</template>

<script>
import {ref ,reactive} from '@vue/composition-api';
export default {
    name: 'navMenu',
    setup(props,{ refs , root }){
        /*****************************************
         * 声明数据
         */
        const isCollapse = ref(false);
        const routers = reactive(root.$router.options.routes)
        /******************************************
         * 声明函数
         */
        const handleOpen = (key, keyPath)=> {
            console.log(key, keyPath);
        };
        const handleClose = (key, keyPath)=> {
            console.log(key, keyPath);
        }
        return {
            // 数据
            isCollapse,
            routers,
            // 函数
            handleOpen,
            handleClose
        }
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
    .svg:{
        font-style: 20px;
        margin-right: 10px;
    }
}

</style>
