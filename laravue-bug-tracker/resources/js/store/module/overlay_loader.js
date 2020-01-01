const state = {
    overlay_Loader: 0,
}
const getters = {
    overlay_Loader: state => state.overlay_Loader
}
const mutations = {
    setLoader: state => state.overlay_Loader = !state.overlay_Loader
}
const actions = {
    toggleLoader: ({ commit }) => commit('setLoader')
}

export default {
    state,
    getters,
    mutations,
    actions
}
