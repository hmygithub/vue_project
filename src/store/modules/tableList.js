import axios from 'axios';
import { request } from '@/custom.js'
const server='http://192.168.0.82:9011/caseApi';

const state = {
    listData: [],
    regionData: [],
    categoryData: []
}

const getters={

}

const actions={
    getRegionData({commit,state}, params){
        axios.get(server+'/sys/region/getTreeData')
            .then(function(response){
                commit('saveRegionData',response.data.data)
                console.log(response.data.data)
            })
            .catch(function(){
                console.log(error)
            })
    },
    getCategory({commit,state},params){
        axios.get(server+'/sysPoliceMap/category/listData').then(function(response){
            commit('saveCategoey', response.data.data)
        })
        .catch(function(){
            console.log(error)
        })
    },
    getListData({commit,state}, params){
        let url=server+'/sysPoliceMap/listData';
        if(params){
            let str='?';
            Object.keys(params).forEach(item=>{
                str+=`${item}=${params[item]}&`
            })
            url+=str;
        }
        axios.get(url, params)
            .then(function(response){
                commit('saveList', response.data.data)
            })
            .catch(function(){
                console.log(error)
            }) 
            /* const data=request({url: '/caseApi/sysPoliceMap/listData', method: 'GET'})
            console.log(data)*/
    },

    add({commit,state},values){
        axios.post(server+'/sysPoliceMap/save',{dept: '派出所',...values}).then(function(response){ })
    },

    delete({ commit, state }, id){
        axios.post(server+`/sysPoliceMap/${id}/delete`).then(function(response){
            //this.$store.dispatch('tableList/getListData')
        })
    },

    edit({ commit, state }, values){
        console.log(values);
        //axios.post(server+`/sysPoliceMap/update`, values)
        axios({
            method: 'post',
            url: server+'/sysPoliceMap/update',
            data: values
        })
    }
}

const mutations={
    saveList(state, data){
        state.listData=data;
    },
    saveRegionData(state, data){
        state.regionData=data;
    },
    saveCategoey(state, data){
        state.categoryData=data;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}