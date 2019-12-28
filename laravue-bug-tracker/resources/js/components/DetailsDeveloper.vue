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
  computed: mapGetters(["developer_details"])
};
</script>

<style>
</style>
