import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        feature: ""
    },
    getters: {

    },
    mutations: {
        updateFeature(state, new_feature) {
            state.feature = new_feature
        }
    },
    actions: {
        updateFeature(context, new_feature) {
            context.commit('updateFeature', new_feature)
        }
    }
})