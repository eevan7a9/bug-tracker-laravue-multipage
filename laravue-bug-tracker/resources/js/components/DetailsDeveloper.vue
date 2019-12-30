<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card border-primary">
        <div class="card-header bg-light border-primary">
          <button class="btn btn-outline-primary" @click="$emit('toggleDetails')">Back</button>
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
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["developer_details"]),
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
  }
};
</script>

<style>
</style>
