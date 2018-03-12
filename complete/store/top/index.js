import * as SETTING from '../../../setting.js'
import Vue from 'vue'
import Vuex from 'vuex'
import request from 'superagent'
import router from '../../router'

Vue.use(Vuex)

const storeTopWebsite = {
    namespaced: true,
    state: {
        sites: []
    },
    mutations: {
        getSitesMutation(state, response){
            state.sites = response.body.sites
        }
    },
    actions: {
       getSitesAction ({ commit }) {
         request
          .get(SETTING.API_URL + '/sites')
          .set('Content-Type', 'application/json;charset=UTF-8')
          .accept('application/json;charset=UTF-8')
          .then(response => {
            //console.log(response)
            if (response.status === 200) {
              commit('getSitesMutation', response)
            }
          })
       }
    },
    getters: {
        getSitesGetter (state, getters,rootState) {
            return state.sites
        }
    }
}

export {
    storeTopWebsite
}
