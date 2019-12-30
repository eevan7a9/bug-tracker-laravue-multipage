const state = {
    user: {},
}

const getters = {
    user: state => state.user,

}

const actions = {
    getUser: async ({ commit }) => {
        const user = {}
        try {
            const result = await axios.get("api_web_session/v1/user");
            user.name = result.data.name;
            user.email = result.data.email;
            result.data.roles.forEach(role => {
                user[`${role.name}`] = true;
            });
            console.log(user)
            commit("setUser", user);
        } catch (error) {
            alert(error);
            // console.log(error.response)
        }
    },
}

const mutations = {
    setUser: (state, user) => state.user = user,
}

export default {
    state,
    getters,
    actions,
    mutations
}
