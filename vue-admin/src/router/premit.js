import router from "./index";
import store from "../store/index";
import app from "@/utils/app";

const whiteRouter = ['/login'];//indexOf方法，判断数组中是否有某个对象
//全局路由守卫
export default router.beforeEach((to, from, next) => {
    //to and from are Route Object,next() must be called to resolve the hook}
    if(app.getToken()){
        console.log("存在");
        if(to.path === '/login'){
            app.removeToken();
            app.removeUserName();
            store.commit("appStore/SET_TOKEN", '');
            store.commit("appStore/SET_USERNAME", '');
        }
        next()
    }else{
        console.log(whiteRouter.indexOf(to.path))
        if(whiteRouter.indexOf(to.path) !== -1){
            console.log("不存在1");
            next();
        }else{
            console.log("不存在2");
            next('/login');
        }
    }
})