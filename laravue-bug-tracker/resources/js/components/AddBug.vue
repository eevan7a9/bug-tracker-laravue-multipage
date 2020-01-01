<template>
  <div>
    <p class="text-danger mb-0" v-if="restriction">*Admin & Tester only</p>
    <b-button
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-1"
      @click="visibleForm"
      :variant="!user.admin && !user.tester ? 'secondary' : 'success'"
    >
      New Bug
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

    <b-collapse id="collapse-1" v-model="visible">
      <hr />
      <div class="row justify-content-center">
        <div class="col-md-10">
          <form @submit.prevent="submit" enctype="multipart/form-data">
            <b-card
              header="Adding a new Bug..."
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
                      required
                    />
                    <small id="helpId" class="form-text text-muted">name that describe the bug</small>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="project" class="font-weight-bold">Project Name</label>
                    <select
                      class="form-control"
                      v-model="bug.project"
                      name="project"
                      id="project"
                      required
                    >
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
                  required
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
                      required
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
                    <select class="form-control" v-model="bug.type" name="type" id="type" required>
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
  computed: mapGetters(["projects", "developers", "user"]),
  methods: {
    ...mapActions(["newBug"]),
    visibleForm() {
      if (this.user.admin || this.user.tester) {
        this.visible = !this.visible;
      } else {
        this.restriction = true;
        this.$swal.fire("Not Allowed", "Only Admin & Testers", "info");
      }
    },
    onImageChange(e) {
      //   console.log(e.target.files[0]);
      this.bug.image = e.target.files[0];
    },
    submit() {
      // submit new bug
      this.newBug(this.bug)
        .then(() => {
          this.$swal.fire("New Bug", "Success new Bug is added", "success");
          //   clear and close form
          this.bug = {};
          this.bug.image = null;
          this.bug.developer = 0;
          this.$refs["imageUpload"].reset();
          // this.$refs.imageUpload.value = null; // we clear the value of upload image
          this.visible = false;
        })
        .catch(() => {
          this.$swal.fire("Not Allowed", "Only Admin and Tester", "error");
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
