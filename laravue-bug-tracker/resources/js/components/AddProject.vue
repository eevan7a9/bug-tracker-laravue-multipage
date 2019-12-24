<template>
  <div>
    <b-button
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click="visible = !visible"
      variant="success"
    >
      New Project
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
        <form @submit.prevent="publish" enctype="multipart/form-data">
          <div class="row d-flex justify-content-center">
            <div class="col-md-8">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="project.name"
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
                      v-model.trim="project.version"
                      placeholder="1.0.0"
                    />
                    <small class="form-text text-muted">Version of the Project</small>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for>Environment</label>
                    <select class="custom-select" v-model="project.environment">
                      <option selected>Web</option>
                      <option value="mobile">Mobile</option>
                      <option value="desktop">Desktop</option>
                      <option value="web and mobile">Web and Mobile</option>
                      <option value="desktop and mobile">Desktop and Mobile</option>
                      <option value="all">All</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="os">Operating System</label>
                  <select class="custom-select" v-model="project.os" name="os" id="os">
                    <option value="cross platform">Cross Platform</option>
                    <option value="mac os">Mac OS</option>
                    <option value="windows">Windows</option>
                    <option value="linux">Linux</option>
                    <option value="android">Android</option>
                    <option value="ios">IOS</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <textarea
                  class="form-control"
                  v-model="project.description"
                  id="description"
                  rows="3"
                ></textarea>
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
              <div class="col-md-6 my-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="image-upload">Upload</span>
                  </div>
                  <div class="custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                      @change="onImageChange"
                      id="cover-image-upload"
                      aria-describedby="image-upload"
                    />
                    <label
                      class="custom-file-label"
                      for="cover-image-upload"
                    >{{ project.image ? project.image.name : "Cover Image" }}</label>
                  </div>
                </div>
              </div>
              <div class="text-right">
                <button type="submit" class="btn btn-primary btn-lg">
                  Submit
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
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      visible: false,
      project: {
        image: ""
      }
    };
  },
  methods: {
    ...mapActions(["addProject"]),
    onImageChange(e) {
      // we get the image
      //   console.log(e.target.files[0]);
      this.project.image = e.target.files[0];
    },
    async publish() {
      this.addProject(this.project).then(() => {
        this.project = {};
        this.project.image = "";
        this.visible = false;
      });
    }
  }
};
</script>

<style lang="scss">
</style>
