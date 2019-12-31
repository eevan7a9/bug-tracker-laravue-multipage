<template>
  <div class="row justify-content-center">
    <div class="col-md-10">
      <div class="card border-primary">
        <div class="card-header border-primary d-flex justify-content-between align-items-center">
          <button class="btn btn-outline-primary" @click="hideDetails">Back</button>
          <button
            class="btn"
            :class="!user.admin && !user.tester ? 'btn-secondary': 'btn-danger'"
            @click="removeBug(bug_details.id)"
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
              <div class="text-center w-100">
                <img
                  :src="bug_details.image_src ?  bug_details.image_src : 'https://via.placeholder.com/950x450'"
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
            <div class="col-md-4 mt-3">
              <label class="font-weight-bold mt-2">Status</label>
              <div
                class="card bg-light font-weight-bold d-flex flex-row justify-content-between align-items-center"
                :class="bug_details.is_fixed ? 'text-success  p-2' : 'text-danger pl-2'"
              >
                {{ bug_details.is_fixed != 1 ? 'Active' : 'Fixed' }}
                <button
                  class="btn btn-primary"
                  @click="changeStatus"
                  v-if="!bug_details.is_fixed"
                >
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
                    <circle cx="12" cy="12" r="3" />
                    <path
                      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                    />
                  </svg>
                </button>
              </div>
              <small v-if="bug_details.is_fixed">{{ bug_details.fixed_at }}</small>
              <!-- <div class="text-primary font-weight-bold text-right text-uppercase" v-else></div> -->
            </div>
          </div>
        </div>
        <div class="card-footer border-primary d-flex justify-content-between align-items-center">
          <div>Added By: {{ bug_details.added_by.email }}</div>
          <!-- <div>options</div> -->
        </div>
      </div>
      <hr />
    </div>
    <CommentsBug :comments="bug_details.comments" :bug_id="bug_details.id" class="w-100" />
  </div>
</template>

<script>
import CommentsBug from "./CommentsBug";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    CommentsBug
  },
  data() {
    return {
      visible_screenshot: false
    };
  },
  computed: mapGetters(["bug_details", "user"]),
  methods: {
    ...mapActions(["clearBugDetails", "changeBugStatus", "deleteBug"]),
    hideDetails() {
      this.clearBugDetails();
      this.$emit("toggleDetails");
    },
    changeStatus() {
      if (this.user.admin || this.user.developer) {
        this.$swal
          .fire({
            title: "The bug is fixed?",
            text: "You won't be able to revert this!",
            type: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Bug is Fixed"
          })
          .then(result => {
            if (result.value) {
              this.changeBugStatus(this.bug_details.id).then(() => {
                this.$swal.fire(
                  "Fixed!",
                  'This Bug is now set as "Fixed"',
                  "success"
                );
              });
            }
          });
      } else {
        this.$swal.fire("Not Allowed", "Only Admin and Developer", "error");
      }
    },
    removeBug(id) {
      if (this.user.admin || this.user.tester) {
        this.$swal
          .fire({
            title: "Remove this Bug?",
            text: "You won't be able to revert this!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Delete"
          })
          .then(result => {
            if (result.value) {
              this.deleteBug(id)
                .then(() => {
                  this.$swal.fire(
                    "Success!",
                    "The Bug is now Deleted.",
                    "success"
                  );
                  this.$emit("toggleDetails");
                })
                .catch(() => {
                  this.$swal.fire(
                    "Not allowed!",
                    "Only Admin and Tester",
                    "error"
                  );
                });
            }
          });
      } else {
        this.$swal.fire("Not allowed!", "Only Admin and Tester", "info");
      }
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100%;
  height: 100%;
}
button.btn-secondary {
  cursor: not-allowed;
}
</style>
