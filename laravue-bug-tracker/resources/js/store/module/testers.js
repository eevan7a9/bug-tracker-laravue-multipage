const state = {
    testers: [],
    tester_details: {}
}

const getters = {
    testers: state => state.testers,
    tester_details: state => state.tester_details
}

const actions = {
    getTesters: async ({ commit }) => {
        try {
            const result = await axios.get("api_web_session/v1/testers");
            // console.log(result);
            commit("setTesters", result.data);
        } catch (error) {
            alert(error);
            // console.log(error.response)
        }
    },
    addTester: async ({ commit }, email) => {
        try {
            const result = await axios.post("api_web_session/v1/testers", {
                email: email
            });
            commit("insertTester", result.data);
            return `Tester ${result.data.email} is now added`;
        } catch (error) {
            // console.log(error.response);
            throw error
        }
    },
    getTesterDetails: async ({ commit }, id) => {
        try {
            const result = await axios.get(`api_web_session/v1/testers/${id}`);
            // console.log(result);
            commit("setTesterDetails", result.data);
        } catch (error) {
            alert(error);
            // console.log(error.response);
        }
    }
}

const mutations = {
    setTesters: (state, testers) => state.testers = testers,
    insertTester: (state, tester) => state.testers.unshift(tester),
    setTesterDetails: (state, tester) => state.tester_details = tester
}

export default {
    state,
    getters,
    actions,
    mutations
}
