const state = {
    developers: [],
    developer_details: {}
}
const getters = {
    developers: state => state.developers,
    developer_details: state => state.developer_details
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
            return `Developer ${result.data.email} is now added`;
        } catch (error) {
            // console.log(error.response);
            throw error
        }
    },
    getDeveloperDetails: async ({ commit }, id) => {
        try {
            const result = await axios.get(`api_web_session/v1/developers/${id}`);
            // console.log(result);
            commit("setDeveloperDetails", result.data);
        } catch (error) {
            alert(error);
            // console.log(error.response);
        }
    }
}
const mutations = {
    setDevelopers: (state, developers) => state.developers = developers,
    insertDeveloper: (state, developer) => state.developers.unshift(developer),
    setDeveloperDetails: (state, developer) => state.developer_details = developer
}

export default {
    state,
    getters,
    actions,
    mutations
}
