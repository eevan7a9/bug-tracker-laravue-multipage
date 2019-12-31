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
            <div class="card bg-light p-2">{{ tester_details.name }}</div>
          </div>
          <div class="mb-2">
            <label class="font-weight-bold">Email</label>
            <div class="card bg-light p-2">{{ tester_details.email }}</div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label class="font-weight-bold">Role</label>
              <div
                class="card bg-light p-2"
                v-for="role in tester_details.roles"
                :key="role.id"
              >{{ role.name }}</div>
            </div>
            <div class="col-md-6">
              <label class="font-weight-bold">Joined</label>
              <div class="card bg-light p-2">{{ tester_details.created_at }}</div>
            </div>
            <div class="col-md-6 mt-3">
              <b-card
                bg-variant="light"
                border-variant="primary"
                header-bg-variant="primary"
                header-text-variant="white"
                text-variant="dark"
                header="Total Bugs Reported"
                class="text-center"
              >
                <b-card-text>
                  <span class="font-weight-bold">{{ tester_details.bugs_added.length }}</span>
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
  computed: mapGetters(["tester_details"])
};
</script>

<style>
</style>
