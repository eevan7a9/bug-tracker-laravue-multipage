const state = {
    developers: []
}
const getters = {
    developers: state => state.developers
}
const actions = {
    getDevelopers: async ({ commit }) => {
        try {
            const result = await axios.get("api_web_session/v1/developers");
            // console.log(result);
            commit("setDevelopers", result.data);
        } catch (error) {
            alert(error);
            // console.log(error.response)
        }
    },
    addDeveloper: async ({ commit }, email) => {
        try {
            const result = await axios.post("api_web_session/v1/developer", {
                email: email
            });
            commit("insertDeveloper", result.data);
            alert(`Success, Developer ${result.data.email} is now added`);
        } catch (error) {
            alert(error.response.data);
            // console.log(error.response);
        }
    }
}
const mutations = {
    setDevelopers: (state, developers) => state.developers = developers,
    insertDeveloper: (state, developer) => state.developers.unshift(developer)
}

export default {
    state,
    getters,
    actions,
    mutations
}
