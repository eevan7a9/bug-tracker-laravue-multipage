<template>
  <div>
    <div class="card">
      <div class="card-header">
        <button class="btn btn-primary" @click="hideDetails">Back</button>
      </div>
      <div class="card-body">
        <div class="image-container text-center w-100">
          <img src="https://via.placeholder.com/450" alt />
        </div>
        <div class="row justify-content-center">
          <div class="col-md-10">
            <h4 class="card-title py-2 text-center">{{ bug_details.title }}</h4>
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
                  <b-card-text>{{ bug_details.severity }}</b-card-text>
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
                  <b-card-text>{{ bug_details.priority }}</b-card-text>
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
                  <b-card-text>{{ bug_details.assigned_to ? bug_details.assigned_to.email : "Unassigned" }}</b-card-text>
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
                  <b-card-text>{{ bug_details.browser }}</b-card-text>
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
                  <b-card-text>{{ bug_details.os }}</b-card-text>
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
                  <b-card-text>{{ bug_details.bug_type }}</b-card-text>
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
