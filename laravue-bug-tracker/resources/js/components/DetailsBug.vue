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
              <div class="text-center w-100">
                <img
                  :src="bug_details.image_src ?  bug_details.image_src : 'https://via.placeholder.com/750'"
                  alt="Screenshot"
                />
              </div>
            </b-card>
          </b-collapse>
          <h4 class="card-title py-2 mt-5 text-left font-weight-bold">{{ bug_details.title }}</h4>
          <label class="font-weight-bold">Description :</label>
          <div class="card p-3 bg-light mb-1">
            <p class="card-text bg-light">{{ bug_details.description }}</p>
          </div>
          <h6 class="py-1 text-right">
            <span class="font-weight-bold">Issued at :</span>
            {{ bug_details.created_at }}
          </h6>
          <div class="row">
            <div class="col-md-8">
              <label class="font-weight-bold">Project Name :</label>
              <div class="card bg-light p-2">{{ bug_details.project.name }}</div>
            </div>
            <div class="col-md-4">
              <label class="font-weight-bold">Version :</label>
              <div class="card bg-light p-2">{{ bug_details.project.version }}</div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-4">
              <label class="font-weight-bold">Browser :</label>
              <div class="card bg-light p-2">{{ bug_details.browser }}</div>
            </div>
            <div class="col-md-4">
              <label class="font-weight-bold">Operating System :</label>
              <div class="card bg-light p-2">{{ bug_details.os }}</div>
            </div>
            <div class="col-md-4">
              <label class="font-weight-bold">Bug Type :</label>
              <div class="card bg-light p-2">{{ bug_details.bug_type }}</div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-4 text-center">
              <b-card
                bg-variant="light"
                border-variant="primary"
                header-bg-variant="primary"
                header-text-variant="white"
                text-variant="dark"
                header="Severity"
                class="text-center"
              >
                <b-card-text>
                  <span class="font-weight-bold text-capitalize">{{ bug_details.severity }}</span>
                </b-card-text>
              </b-card>
            </div>
            <div class="col-md-4 text-center">
              <b-card
                bg-variant="light"
                border-variant="primary"
                header-bg-variant="primary"
                header-text-variant="white"
                text-variant="dark"
                header="Priority"
                class="text-center"
              >
                <b-card-text>
                  <span class="font-weight-bold text-capitalize">{{ bug_details.priority }}</span>
                </b-card-text>
              </b-card>
            </div>
            <div class="col-md-4 text-center">
              <b-card
                bg-variant="light"
                border-variant="primary"
                header-bg-variant="primary"
                header-text-variant="white"
                text-variant="dark"
                header="Assigned To"
                class="text-center"
              >
                <b-card-text>
                  <span
                    class="font-weight-bold"
                  >{{ bug_details.assigned_to ? bug_details.assigned_to.email : "Unassigned" }}</span>
                </b-card-text>
              </b-card>
            </div>
          </div>
        </div>
        <div class="card-footer border-primary d-flex justify-content-between align-items-center">
          <div>Added By: {{ bug_details.added_by.email }}</div>
          <div>options</div>
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
  computed: mapGetters(["bug_details"]),
  methods: {
    ...mapActions(["clearBugDetails"]),
    hideDetails() {
      this.clearBugDetails();
      this.$emit("toggleDetails");
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100%;
  height: 100%;
}
</style>
