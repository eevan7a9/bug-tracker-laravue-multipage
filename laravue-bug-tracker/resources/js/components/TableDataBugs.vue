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
            <th scope="col">OS</th>
            <th scope="col">Severity</th>
            <th scope="col">Assigned</th>
            <th scope="col">Created at</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(bug, index) in bugs" :key="index" @click="showDetails(bug.id)">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ bug.title }}</td>
            <td>{{ bug.project.name }}</td>
            <td>{{ bug.browser }}</td>
            <td>{{ bug.os }}</td>
            <td>{{ bug.severity }}</td>
            <td>{{ bug.assigned_to ? bug.assigned_to.email: "Unassigned" }}</td>
            <td>{{ bug.created_at }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-muted">Click the Bug to see more.</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: mapGetters(["bugs"]),
  methods: {
    ...mapActions(["getBugs", "getBugDetails"]),
    showDetails(id) {
      this.getBugDetails(id).then(() => {
        this.$emit("toggleDetails");
      });
    }
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
table tr {
  cursor: pointer;
}
</style>
