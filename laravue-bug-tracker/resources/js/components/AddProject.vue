<template>
  <form class="mt-5">
    <b-button
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click="visible = !visible"
      variant="success"
    >
      Toggle Collapse
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      </span>
    </b-button>
    <b-collapse id="collapse-4" v-model="visible" class="mt-2">
      <b-card>
        <form @submit.prevent="publish">
          <div class="row d-flex justify-content-center">
            <div class="col-md-8">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="project.name"
                  placeholder="Name Generator...justify-content-center"
                />
                <small id="helpId" class="form-text text-muted">Name of the Project</small>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="version">Version</label>
                    <input
                      type="text"
                      class="form-control"
                      name="version"
                      id="version"
                      v-model="project.version"
                      placeholder="1.0.0"
                    />
                    <small class="form-text text-muted">Version of the Project</small>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for>Type</label>
                    <select class="custom-select" v-model="project.type">
                      <option selected>Web</option>
                      <option value>Mobile</option>
                      <option value>Desktop</option>
                      <option value>Web and Mobile</option>
                      <option value>Desktop and Mobile</option>
                      <option value>All</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="os">Operating System</label>
                  <select class="custom-select" name="os" id="os">
                    <option>Cross Platform</option>
                    <option>Mac OS</option>
                    <option>Windows</option>
                    <option>Linux</option>
                    <option>Android</option>
                    <option>IOS</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <textarea class="form-control" name="description" id="description" rows="3"></textarea>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Development Date</label>
                    <input type="date" class="form-control" v-model="project.started" />
                    <small class="form-text text-muted">Date Development Started</small>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Released Dated</label>
                    <input type="date" class="form-control" v-model="project.released" />
                    <small class="form-text text-muted">Date Development Started</small>
                  </div>
                </div>
              </div>
              <div class="text-right">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </b-card>
    </b-collapse>
  </form>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      project: {}
    };
  },
  methods: {
    async publish() {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log(result);
    }
  }
};
</script>

<style lang="scss">
</style>
