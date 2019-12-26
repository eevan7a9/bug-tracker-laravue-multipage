<template>
  <div>
    <div class="card">
      <div class="card-header">
        <button class="btn btn-outline-secondary" @click="hideDetails">Back</button>
      </div>
      <div class="card-body">
        <div class="row justify-content-center">
          <div class="col-md-10">
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
            <b-collapse id="collapse-4" v-model="visible_screenshot" class="mt-2">
              <b-card>
                <div class="image-container text-center w-100">
                  <img src="https://via.placeholder.com/750" alt />
                </div>
              </b-card>
            </b-collapse>
            <h4 class="card-title py-2 text-left">{{ bug_details.title }}</h4>
            <div class="d-flex justify-content-md-between align-content-center">
              <h5 class="py-2 font-weight-bold">
                <small>Project Name :</small>
                <span class="text-capitalize">{{ bug_details.project.name }}</span>
              </h5>
              <h5 class="py-2">
                <small>Issued at :</small>
                {{ bug_details.created_at }}
              </h5>
            </div>

            <div class="card p-3 bg-light mt-3">
              <p class="card-text bg-light">{{ bug_details.description }}</p>
            </div>
            <div class="row mt-3">
              <div class="col-md-4 text-center">
                <b-card
                  bg-variant="light"
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
                <!-- <p class="mt-3 mb-0 text-capitalize">{{ bug_details.severity }}</p>
                <small class="text-danger">Severity</small>-->
              </div>
              <div class="col-md-4 text-center">
                <b-card
                  bg-variant="light"
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
                <!-- <p class="mt-3 mb-0 text-capitalize">{{ bug_details.priority }}</p>
                <small class="text-success">Priority</small>-->
              </div>
              <div class="col-md-4 text-center">
                <b-card
                  bg-variant="light"
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
                <!-- <p
                  class="mt-3 mb-0 text-capitalize"
                >{{ bug_details.assigned_to ? bug_details.assigned_to.email : "Unassigned" }}</p>
                <small class="text-primary">Assigned To</small>-->
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-4 text-center">
                <b-card
                  bg-variant="light"
                  header-bg-variant="primary"
                  header-text-variant="white"
                  text-variant="dark"
                  header="Browser"
                  class="text-center"
                >
                  <b-card-text>
                    <span class="font-weight-bold text-capitalize">{{ bug_details.browser }}</span>
                  </b-card-text>
                </b-card>
                <!-- <h5 class="mt-3 mb-0 font-weight-bold">{{ bug_details.browser }}</h5>
                <small>Browser</small>-->
              </div>
              <div class="col-md-4 text-center">
                <b-card
                  bg-variant="light"
                  header-bg-variant="primary"
                  header-text-variant="white"
                  text-variant="dark"
                  header="Os"
                  class="text-center"
                >
                  <b-card-text>
                    <span class="font-weight-bold text-capitalize">{{ bug_details.os }}</span>
                  </b-card-text>
                </b-card>
                <!-- <h5 class="mt-3 mb-0 font-weight-bold">{{ bug_details.os }}</h5>
                <small>Operating System</small>-->
              </div>
              <div class="col-md-4 text-center">
                <b-card
                  bg-variant="light"
                  header-bg-variant="primary"
                  header-text-variant="white"
                  text-variant="dark"
                  header="Bug Type"
                  class="text-center"
                >
                  <b-card-text>
                    <span class="font-weight-bold text-capitalize">{{ bug_details.bug_type }}</span>
                  </b-card-text>
                </b-card>
                <!-- <h5 class="mt-3 mb-0 font-weight-bold">{{ bug_details.bug_type }}</h5>
                <small>Bug Type</small>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer text-muted text-right">Footer</div>
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
.image-container {
  height: 400px;
}
img {
  max-width: 100%;
  height: 100%;
}
</style>
