// axios is already imported at app.js
const state = {
    projects: [],
    project_details: {
        bugs: []
    }
}
const getters = {
    projects: state => state.projects,
    project_details: state => state.project_details
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
            // alert(`${result.statusText}, A project is successfuly added.`);
            // console.log(result);
        } catch (error) {
            throw error
            // console.log(error.response);
        }
    },
    getProjectDetails: async ({ commit }, id) => {
        try {
            const result = await axios.get(`api_web_session/v1/projects/${id}`);
            // console.log(result);
            commit("setProjectDetails", result.data);
        } catch (error) {
            alert(error);
            // console.log(error.response);
        }
    },
    clearProjectDetails: ({ commit }) => {
        commit("removeProjectDetails");
    },
    editProjectDetails: async ({ commit }, { project, id }) => {
        try {
            const result = await axios.post(
                `api_web_session/v1/projects/${id}`,
                project,
                {
                    headers: {
                        Accept: "application/json",
                        "content-type": "multipart/form-data"
                    }
                }
            );
            commit("setProjectDetails", result.data);
            // alert(`A project is successfuly Edited.`);
            // console.log(result);
        } catch (error) {
            throw error
            // console.log(error.response);
        }
    }
}
const mutations = {
    setProjects: (state, projects) => state.projects = projects,
    insertProject: (state, project) => state.projects.unshift(project),
    setProjectDetails: (state, project) => state.project_details = project,
    removeProjectDetails: state => state.project_details = { bugs: [] }
}

export default {
    state,
    getters,
    actions,
    mutations
}
