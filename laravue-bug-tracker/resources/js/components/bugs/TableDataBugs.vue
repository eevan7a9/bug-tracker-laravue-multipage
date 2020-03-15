<template>
  <div>
    <div class="table-container">
      <table class="table table-hover">
        <thead class="thead-light" id="tableHead">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Project</th>
            <th scope="col">Assigned</th>
            <th scope="col">Priority</th>
            <th scope="col">Severity</th>
            <th scope="col">Status</th>
            <th scope="col">Reported at</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(bug, index) in bugs" :key="index" @click="showDetails(bug.id)">
            <td class="text-primary font-weight-bold">{{ bug.title }}</td>
            <td>{{ bug.project.name }}</td>
            <td>{{ bug.assigned_to ? bug.assigned_to.email: "Unassigned" }}</td>
            <td class="text-capitalize font-weight-bold">{{ bug.priority }}</td>
            <td class="text-capitalize font-weight-bold">{{ bug.severity }}</td>
            <td
              class="font-weight-bold"
              :class="bug.is_fixed ? 'text-success': 'text-danger'"
            >{{ bug.is_fixed ? "Fixed": "Active" }}</td>
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
    ...mapActions(["getBugDetails", "toggleLoader"]),
    showDetails(id) {
      this.toggleLoader();
      this.getBugDetails(id).then(() => {
        this.$emit("toggleDetails");
        this.toggleLoader();
      });
    }
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
table tr:hover {
  transition: 0.6s;
  -webkit-box-shadow: -4px 8px 14px 6px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: -4px 8px 14px 6px rgba(0, 0, 0, 0.58);
  box-shadow: -4px 8px 14px 6px rgba(0, 0, 0, 0.58);
  background: #fff;
}
</style>
