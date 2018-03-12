import * as SETTING from '../../setting.js'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

import {storeTopWebsite} from './top/index'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        storeTopWebsite,
    }
})
