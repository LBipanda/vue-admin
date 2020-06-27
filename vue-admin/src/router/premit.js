import router from "./router";
import cookie from "js-cookie";
import token from "@/utils/app";

const whiteRouter = ['/login'];//indexOf方法，判断数组中是否有某个对象
//全局路由守卫
router.beforeEach((to, from, next) => {
    //to and from are Route Object,next() must be called to resolve the hook}
    if(token.getToken()){
        console.log("存在");
    }else{
        console.log("不存在");
        if(whiteRouter.indexOf(to.path) !== -1){
            next();
        }else{
            next('/login');
        }
    }
})