
import loginApi from '@/api/login';

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
        toIndex({commit},value){
            console.log(value.ApiNmae)
            let tempName = value.ApiNmae
            return new Promise((resolve,reject) => {
            loginApi[value.ApiNmae](value.params).then(res => {
                console.log(tempName)
                resolve(res)
            }).catch(err =>{
                reject(err)
            })
            })
        }
    },
}