import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        data1:{},
        user:false
    },
    mutations:{
        somemutation(state,data){
            state.data1=data
            let shuju=JSON.stringify(data) 
            sessionStorage.setItem("key",shuju)
        }
    },
    actions:{
        getbox(context,s){
            return context.commit('somemutation')
        }
    },
    getters:{
        data1:state=>state.data1
    }
})