<template>
  <div>
    <div class="table-container">
      <table class="table table-hover">
        <thead class="thead-light" id="tableHead">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Project</th>
            <th scope="col">Browser</th>
            <th scope="col">Operasting System</th>
            <th scope="col">Severity</th>
            <th scope="col">Priority</th>
            <th scope="col">Created at</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(bug, index) in bugs" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ bug.title }}</td>
            <td>{{ bug.project_id }}</td>
            <td>{{ bug.browser }}</td>
            <td>{{ bug.os }}</td>
            <td>{{ bug.severity }}</td>
            <td>{{ bug.priority }}</td>
            <td>{{ bug.created_at }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: mapGetters(["bugs"]),
  methods: {
    ...mapActions(["getBugs"])
  },
  created() {
    this.getBugs();
  }
};
</script>

<style scoped>
.table-container {
  max-height: 600px;
  overflow-y: scroll;
}
#tableHead {
  top: 0 !important;
  position: sticky !important;
}
</style>
