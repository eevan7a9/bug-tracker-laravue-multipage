<template>
  <div>
    <p class="text-danger mb-0" v-if="restriction">*Admin & Tester only</p>
    <b-button
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click="visibleForm"
      :variant="!user.admin && !user.tester ? 'secondary' : 'success'"
    >
      Update Bug
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
    <b-collapse id="collapse-4" class="mt-3" v-model="visible">
      <hr />
      <div class="row justify-content-center">
        <div class="col-md-10">
          <form @submit.prevent="update" enctype="multipart/form-data">
            <b-card
              header="Editing a Bug..."
              header-text-variant="white"
              header-tag="header"
              header-bg-variant="primary"
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="title" class="font-weight-bold">Bug Title</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="bug.title"
                      name="title"
                      aria-describedby="helpId"
                      placeholder="Navbar error"
                    />
                    <small id="helpId" class="form-text text-muted">name that describe the bug</small>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="project" class="font-weight-bold">Project Name</label>
                    <select class="form-control" v-model="bug.project" name="project" id="project">
                      <option
                        v-for="project in projects"
                        :key="project.id"
                        :value="project.id"
                      >{{ project.name }}</option>
                      <!-- <option value="1">Project X</option> -->
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="description" class="font-weight-bold">Bug Description</label>
                <textarea
                  class="form-control"
                  v-model="bug.description"
                  name="description"
                  id="description"
                  rows="3"
                ></textarea>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="browser" class="font-weight-bold">Browser</label>
                    <select class="form-control" v-model="bug.browser" name="browser" id="browser">
                      <option>Chrome</option>
                      <option>Firefox</option>
                      <option>Opera</option>
                      <option>Edge</option>
                      <option>Safari</option>
                      <option>Internet Explorer</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="operating_system" class="font-weight-bold">Operating System</label>
                    <select
                      class="form-control"
                      v-model="bug.os"
                      name="operating_system"
                      id="operating_system"
                    >
                      <option>Mac Os</option>
                      <option>Windows 10</option>
                      <option>Windows 8</option>
                      <option>Linux (Debian/Ubuntu)</option>
                      <option>Linux (Manjaro)</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="type" class="font-weight-bold">Bug Type</label>
                    <select class="form-control" v-model="bug.type" name="type" id="type">
                      <option>New Feature</option>
                      <option>Frontend/Design</option>
                      <option>Functional Bugs</option>
                      <option>Api</option>
                      <option>Handling Error</option>
                      <option>Control Flow</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="radio-container">
                    <label class="font-weight-bold">Priority</label>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          v-model="bug.priority"
                          name="priority"
                          value="high"
                        />
                        High
                      </label>
                    </div>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          v-model="bug.priority"
                          name="priority"
                          value="mid"
                        />
                        Mid
                      </label>
                    </div>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          v-model="bug.priority"
                          name="priority"
                          value="low"
                        />
                        Low
                      </label>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="radio-container">
                    <label class="font-weight-bold">Severity</label>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          v-model="bug.severity"
                          name="severity"
                          value="high"
                        />
                        High
                      </label>
                    </div>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          v-model="bug.severity"
                          name="severity"
                          value="mid"
                        />
                        Mid
                      </label>
                    </div>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          v-model="bug.severity"
                          name="severity"
                          value="low"
                        />
                        Low
                      </label>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="assigned" class="font-weight-bold">Assigned To :</label>
                    <select
                      class="form-control"
                      v-model="bug.developer"
                      name="assigned"
                      id="assigned"
                    >
                      <option
                        v-for="(developer, index) in developers"
                        :key="index"
                        :value="developer.id"
                      >{{ developer.email }}</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6 mt-5">
                  <b-form-file
                    v-model="bug.image"
                    ref="imageUpload"
                    placeholder="Choose a Image or drop it here..."
                    drop-placeholder="Drop file here..."
                  ></b-form-file>
                  <div class="mt-3">Screen Shot: {{ bug.image ? bug.image.name : '' }}</div>
                </div>
              </div>
              <div class="text-right my-2">
                <button class="btn btn-primary btn-lg">
                  Update
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
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </button>
              </div>
            </b-card>
          </form>
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      visible: false,
      restriction: false,
      bug: {
        developer: 0,
        image: null
      }
    };
  },
  computed: mapGetters(["projects", "developers", "bug_details", "user"]),
  methods: {
    ...mapActions(["editBugDetails", "getProjects", "getDevelopers"]),
    visibleForm() {
      if (this.user.admin || this.user.tester) {
        this.visible = !this.visible;
      } else {
        this.restriction = true;
        this.$swal.fire("Not Allowed", "Only Admin & Tester", "error");
      }
    },
    onImageChange(e) {
      //   console.log(e.target.files[0]);
      this.bug.image = e.target.files[0];
    },
    update() {
      // submit new bug
      this.editBugDetails(this.bug).then(() => {
        this.$swal.fire("Updated!", "Success, Bug is now updated", "success");
        //   clear and close form
        this.bug.image = null;
        this.$refs["imageUpload"].reset();
        this.visible = false;
      });
    }
  },
  mounted() {
    this.bug.id = this.bug_details.id;
    this.bug.title = this.bug_details.title;
    this.bug.project = this.bug_details.project.id;
    this.bug.description = this.bug_details.description;
    this.bug.browser = this.bug_details.browser;
    this.bug.os = this.bug_details.os;
    this.bug.type = this.bug_details.bug_type;
    this.bug.severity = this.bug_details.severity;
    this.bug.priority = this.bug_details.priority;
    this.bug_details.assigned_to
      ? (this.bug.developer = this.bug_details.assigned_to.id)
      : null;
  },
  created() {
    if (this.projects.length == 0 && this.developers.length == 0) {
      this.getProjects().then(() => {
        this.getDevelopers();
      });
    }
  }
};
</script>
<style scoped>
button.btn-secondary {
  cursor: not-allowed !important;
}
</style>
