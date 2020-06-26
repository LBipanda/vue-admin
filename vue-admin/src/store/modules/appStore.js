

const state = {
    collapse: false,
};
const getters = {};
const mutations = {
    SET_COLLAPSE(state,value){
        console.log('aaaaaaaa')
        state.collapse = !state.collapse
    }
};
const actions = {
    toLogin(){
        return new Promise((resolve,reject) => {
        
        })
    },
    aaa({commit},value){
        return new Promise((resolve,reject) => {
        loginApi[value.ApiNmae](value.params).then(res => {
            resolve(res)
        }).catch(err =>{
            reject(err)
        })
        })
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};