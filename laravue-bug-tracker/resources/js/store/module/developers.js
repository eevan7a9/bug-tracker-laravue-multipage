const state = {
    developers: []
}
const getters = {
    developers: state => state.developers
}
const actions = {
    addDeveloper: async ({ commit }, email) => {
        try {
            const result = await axios.post("api_web_session/v1/developer", {
                email: email
            });
            commit("insertDeveloper", email);
            alert(result.data);
        } catch (error) {
            alert(error.response.data);
            // console.log(error.response);
        }
    }
}
const mutations = {
    insertDeveloper: (state, developer) => state.developers.unshift(developer)
}

export default {
    state,
    getters,
    actions,
    mutations
}
