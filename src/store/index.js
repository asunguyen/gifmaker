import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        feature: '',
        img_src: ''
    },
    getters: {

    },
    mutations: {
        updateFeature(state, new_feature) {
            state.feature = new_feature
        },
        updateImgSrc(state, new_img_src) {
            state.file = new_img_src
        }
    },
    actions: {
        updateFeature(context, new_feature) {
            context.commit('updateFeature', new_feature)
        },
        updateImgSrc(context, new_img_src) {
            context.commit('updateImgSrc', new_img_src)
        }
    }
})