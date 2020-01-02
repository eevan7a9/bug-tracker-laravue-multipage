<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <hr />
      <div class="card border-primary mt-3">
        <div
          class="card-header bg-light border-primary d-flex justify-content-between align-items-center"
        >
          <button class="btn btn-outline-primary" @click="$emit('toggleDetails')">Back</button>
          <button
            class="btn"
            :class="!user.admin ? 'btn-secondary': 'btn-danger'"
            @click="removeDeveloper(developer_details.id)"
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
          <div class="mb-2">
            <label class="font-weight-bold">Name</label>
            <div class="card bg-light p-2">{{ developer_details.name }}</div>
          </div>
          <div class="mb-2">
            <label class="font-weight-bold">Email</label>
            <div class="card bg-light p-2">{{ developer_details.email }}</div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label class="font-weight-bold">Role</label>
              <div
                class="card bg-light p-2"
                v-for="role in developer_details.roles"
                :key="role.id"
              >{{ role.name }}</div>
            </div>
            <div class="col-md-6">
              <label class="font-weight-bold">Joined</label>
              <div class="card bg-light p-2">{{ developer_details.created_at }}</div>
            </div>
            <div class="col-md-4 mt-3">
              <b-card
                bg-variant="light"
                border-variant="primary"
                header-bg-variant="primary"
                header-text-variant="white"
                text-variant="dark"
                header="Total Bugs Assigned"
                class="text-center"
              >
                <b-card-text>
                  <span class="font-weight-bold">{{ developer_details.bugs_assigned.length }}</span>
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
                header="Total Bugs Fixed"
                class="text-center"
              >
                <b-card-text>
                  <span
                    class="font-weight-bold"
                  >{{ developer_details.bugs_assigned | getFixedBugs }}</span>
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
                header="Total Bugs Pending"
                class="text-center"
              >
                <b-card-text>
                  <span
                    class="font-weight-bold"
                  >{{ developer_details.bugs_assigned | getPendingBugs }}</span>
                </b-card-text>
              </b-card>
            </div>
          </div>
        </div>
        <div class="card-footer border-primary">
          <!-- <p>Footer</p> -->
        </div>
      </div>
      <hr />
      <h3 class="mt-4 font-weight-bold">Assigned Bugs :</h3>
    </div>
    <BugsCardLists :bugs="developer_details.bugs_assigned" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BugsCardLists from "./BugsCardLists";
export default {
  components: {
    BugsCardLists
  },
  computed: mapGetters(["developer_details", "user"]),
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
    ...mapActions(["deleteDeveloper", "toggleLoader"]),
    removeDeveloper(id) {
      if (this.user.admin) {
        this.$swal
          .fire({
            title: "Remove this Developer?",
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
              this.deleteDeveloper(id)
                .then(() => {
                  this.$swal.fire(
                    "Success!",
                    "The Developer is now Deleted.",
                    "success"
                  );
                  this.$emit("toggleDetails");
                  this.toggleLoader();
                })
                .catch(() => {
                  this.$swal.fire("Not allowed!", "Only Admin", "error");
                });
            }
          });
      } else {
        this.$swal.fire(
          "Not allowed!",
          "Only Admin can perform this action",
          "info"
        );
      }
    }
  }
};
</script>

<style scoped>
button.btn-secondary {
  cursor: not-allowed;
}
</style>
