
import loginApi from '@/api/login';
import app from '@/utils/app';

export default {
    namespaced: true,
    state: {
        collapse: false,//侧边栏的缩放
        to_ken: '',
        username: '',
    },
    getters:{},
    mutations: {
        SET_COLLAPSE(state,value){ //改变侧边栏的状态
            state.collapse = !state.collapse
        },
        SET_TOKEN(state,value){
            state.to_ken = value
        },
        SET_USERNAME(state,value){ //
            state.username = value
        }
    },
    actions: {
        toLogin({commit},value){
            return new Promise((resolve,reject) => {
            loginApi.Login(value).then(res => {
                let tempRes = res.data.data;
                commit('SET_TOKEN',tempRes.token) 
                commit('SET_USERNAME',tempRes.username)
                app.setToken(tempRes.token)
                app.setUserName(tempRes.username) 
                resolve(res)
            }).catch(err =>{
                reject(err)
            })
            })
        },
        loginOut({ commit }, value){
            return new Promise((resolve,reject)=>{
                app.removeToken();
                app.removeUserName();
                commit("SET_TOKEN", '');
                commit("SET_USERNAME", '');
                resolve('true')
            })
        }
    },
}