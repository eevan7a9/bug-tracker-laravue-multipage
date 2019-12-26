// axios is already imported at app.js
const state = {
    projects: [],
    project_details: {}
}
const getters = {
    projects: state => state.projects
}
const actions = {
    getProjects: async ({ commit }) => {
        const result = await axios.get("api_web_session/v1/projects");
        commit("setProjects", result.data);
    },
    addProject: async ({ commit }, project) => {
        // we append our data
        let formData = new FormData();

        formData.append("name", project.name);
        formData.append("version", project.version);
        formData.append("environment", project.environment);
        formData.append("os", project.os);
        formData.append("description", project.description);
        formData.append("started", project.started);
        formData.append("released", project.released);
        if (project.image) {
            formData.append("image", project.image);
        }

        try {
            const result = await axios.post(
                "api_web_session/v1/projects",
                formData,
                {
                    headers: {
                        Accept: "application/json",
                        "content-type": "multipart/form-data"
                    }
                }
            );
            commit("insertProject", result.data);
            alert(`${result.statusText}, A project is successfuly added.`);
            // console.log(result);
        } catch (error) {
            alert(error);
            // console.log(error.response);
        }
    },
    getProjectDetails: async ({ commit }, id) => {
        try {
            const result = await axios.get(`api_web_session/v1/projects/${id}`);
            console.log(result);
            commit("setProjectDetails", id);
        } catch (error) {

        }
    }
}
const mutations = {
    setProjects: (state, projects) => state.projects = projects,
    insertProject: (state, project) => state.projects.unshift(project),
    setProjectDetails: (state, project) => state.project_details = project
}

export default {
    state,
    getters,
    actions,
    mutations
}
