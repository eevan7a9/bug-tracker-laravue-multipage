<template>
  <div class="row justify-content-center">
    <div class="col-md-10">
      <div class="card border-primary">
        <div class="card-header border-primary d-flex justify-content-between align-items-center">
          <button class="btn btn-outline-primary" @click="hideDetails">Back</button>
          <button
            class="btn"
            :class="!user.admin && !user.developer ? 'btn-secondary': 'btn-danger'"
            @click="removeProject(project_details.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="3 6 5 6 21 6" />
              <path
                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
              />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
        </div>
        <div class="card-body">
          <div class="text-center">
            <b-button
              :class="visible_screenshot ? null : 'collapsed'"
              :aria-expanded="visible_screenshot ? 'true' : 'false'"
              aria-controls="collapse-4"
              variant="outline-primary"
              @click="visible_screenshot = !visible_screenshot"
            >
              Show Screenshot
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
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </b-button>
          </div>
          <b-collapse id="collapse-4" v-model="visible_screenshot" class="mt-2">
            <b-card>
              <div class="image-container text-center w-100">
                <img
                  :src="project_details.image_src ?  project_details.image_src : 'https://via.placeholder.com/950x450'"
                  alt="Cover image"
                />
              </div>
            </b-card>
          </b-collapse>
          <h5 class="font-weight-bold mt-5">
            {{ project_details.name }}
            <small>version : {{ project_details.version }}</small>
          </h5>
          <label class="mt-3 font-weight-bold">Description :</label>
          <div class="card p-3 bg-light">
            <p class="card-text bg-light">{{ project_details.description }}</p>
          </div>
          <div class="row mt-3">
            <div class="col-md-6">
              <label class="font-weight-bold">Development Started</label>
              <div class="card bg-light p-2">{{ project_details.development_start }}</div>
            </div>
            <div class="col-md-6">
              <label class="font-weight-bold">Released At</label>
              <div class="card bg-light p-2">{{ project_details.release_date }}</div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6">
              <label class="font-weight-bold">Environment</label>
              <div class="card bg-light p-2">{{ project_details.environment }}</div>
            </div>
            <div class="col-md-6">
              <label class="font-weight-bold">Operating System</label>
              <div class="card bg-light p-2">{{ project_details.os }}</div>
            </div>
            <div class="col-md-4 mt-3">
              <b-card
                bg-variant="light"
                border-variant="primary"
                header-bg-variant="primary"
                header-text-variant="white"
                text-variant="dark"
                header="Total Reported Bugs"
                class="text-center"
              >
                <b-card-text>
                  <span class="font-weight-bold">{{ project_details.bugs.length }}</span>
                </b-card-text>
              </b-card>
            </div>
            <div class="col-md-4 mt-3">
              <b-card
                bg-variant="light"
                border-variant="success"
                header-bg-variant="success"
                header-text-variant="white"
                text-variant="dark"
                header="Total Fixed Bugs"
                class="text-center"
              >
                <b-card-text>
                  <span class="font-weight-bold">{{ project_details.bugs | getFixedBugs }}</span>
                </b-card-text>
              </b-card>
            </div>
            <div class="col-md-4 mt-3">
              <b-card
                bg-variant="light"
                border-variant="danger"
                header-bg-variant="danger"
                header-text-variant="white"
                text-variant="dark"
                header="Total Pending Bugs"
                class="text-center"
              >
                <b-card-text>
                  <span class="font-weight-bold">{{ project_details.bugs | getPendingBugs }}</span>
                </b-card-text>
              </b-card>
            </div>
          </div>
        </div>
        <div class="card-footer border-primary text-left">
          <div>Added at: {{ project_details.created_at }}</div>
        </div>
      </div>
      <hr />
      <h1 class="mt-5 font-weight-bold">Bug Reports :</h1>
    </div>
    <BugsCardLists :bugs="project_details.bugs" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BugsCardLists from "../bugs/BugsCardLists";
export default {
  components: {
    BugsCardLists
  },
  data() {
    return {
      visible_screenshot: false
    };
  },
  computed: mapGetters(["project_details", "user"]),
  filters: {
    getFixedBugs: function(bugs) {
      if (bugs.length < 1) {
        return 0;
      }
      const fixed = bugs.filter(bug => bug.is_fixed == 1);
      return fixed.length;
    },
    getPendingBugs: function(bugs) {
      if (bugs.length < 1) {
        return 0;
      }
      const fixed = bugs.filter(bug => bug.is_fixed != 1);
      return fixed.length;
    }
  },
  methods: {
    ...mapActions(["clearProjectDetails", "deleteProject", "toggleLoader"]),
    hideDetails() {
      this.clearProjectDetails();
      this.$emit("toggleDetails");
    },
    removeProject(id) {
      if (this.user.admin || this.user.developer) {
        this.$swal
          .fire({
            title: "Remove this Project?",
            text: "You won't be able to revert this!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Delete"
          })
          .then(result => {
            if (result.value) {
              this.toggleLoader();
              this.deleteProject(id)
                .then(() => {
                  this.$swal.fire(
                    "Success!",
                    "The Project is now Deleted.",
                    "success"
                  );
                  this.$emit("toggleDetails");
                  this.toggleLoader();
                })
                .catch(() => {
                  this.$swal.fire(
                    "Not allowed!",
                    "Only Admin and developer",
                    "error"
                  );
                  this.toggleLoader();
                });
            }
          });
      } else {
        this.$swal.fire("Not allowed!", "Only Admin and Developer", "info");
      }
    }
  }
};
</script>

<style scoped>
img {
  max-height: 100%;
  max-width: 100%;
}
button.btn-secondary {
  cursor: not-allowed;
}
</style>
