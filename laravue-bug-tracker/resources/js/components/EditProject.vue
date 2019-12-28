<template>
  <div>
    <b-button
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click="visible = !visible"
      variant="primary"
    >
      Edit Project
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    </b-button>
    <b-collapse id="collapse-4" v-model="visible" class="mt-2">
      <hr />
      <form @submit.prevent="update" enctype="multipart/form-data">
        <div class="row d-flex justify-content-center">
          <div class="col-md-10">
            <b-card
              header="Editing a Project..."
              header-text-variant="white"
              header-tag="header"
              header-bg-variant="primary"
            >
              <div class="form-group">
                <label for="name" class="font-weight-bold">Name</label>
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
                    <label for="version" class="font-weight-bold">Version</label>
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
                    <label class="font-weight-bold">Environment</label>
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
                  <label for="os" class="font-weight-bold">Operating System</label>
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
                <label for="description" class="font-weight-bold">Description</label>
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
                    <label class="font-weight-bold">Development Date</label>
                    <input type="date" class="form-control" v-model="project.development_start" />
                    <small class="form-text text-muted">Date Development Started</small>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="font-weight-bold">Released Dated</label>
                    <input type="date" class="form-control" v-model="project.release_date" />
                    <small class="form-text text-muted">Date Development Started</small>
                  </div>
                </div>
              </div>
              <div class="col-md-6 my-3">
                <b-form-file
                  v-model="project.cover_image"
                  ref="imageUpload"
                  placeholder="Choose a Image or drop it here..."
                  drop-placeholder="Drop file here..."
                ></b-form-file>
                <div
                  class="mt-3"
                >Screen Shot: {{ project.cover_image ? project.cover_image.name : '' }}</div>
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
            </b-card>
          </div>
        </div>
      </form>
    </b-collapse>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      visible: false,
      project: {
        image: null
      }
    };
  },
  computed: mapGetters(["project_details"]),
  methods: {
    ...mapActions(["editProjectDetails"]),
    onImageChange(e) {
      //   console.log(e.target.files[0]);
      this.project.cover_image = e.target.files[0];
    },
    update() {
      let formData = new FormData();

      formData.append("id", this.project.id);
      formData.append("name", this.project.name);
      formData.append("version", this.project.version);
      formData.append("environment", this.project.environment);
      formData.append("os", this.project.os);
      formData.append("description", this.project.description);
      formData.append("started", this.project.development_start);
      formData.append("released", this.project.release_date);
      if (this.project.cover_image) {
        formData.append("image", this.project.cover_image);
      }
      this.editProjectDetails({ project: formData, id: this.project.id }).then(
        () => {
          this.$swal.fire(
            "Project Edited!",
            "A project is successfuly Edited",
            "success"
          );
          this.visible = false;
        }
      );
    }
  },
  mounted() {
    this.project = { ...this.project_details };
  }
};
</script>
<style>
</style>
