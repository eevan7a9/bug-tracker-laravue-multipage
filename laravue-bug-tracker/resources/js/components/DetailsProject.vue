<template>
  <div class="row justify-content-center">
    <div class="col-md-10">
      <div class="card border-primary">
        <div class="card-header border-primary">
          <button class="btn btn-outline-primary" @click="hideDetails">Back</button>
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
                  :src="project_details.image_src ?  project_details.image_src : 'https://via.placeholder.com/750'"
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
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      visible_screenshot: false
    };
  },
  computed: mapGetters(["project_details"]),
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
    ...mapActions(["clearProjectDetails"]),
    hideDetails() {
      this.clearProjectDetails();
      this.$emit("toggleDetails");
    }
  }
};
</script>

<style scoped>
img {
  max-height: 100%;
  max-width: 100%;
}
</style>
