<template>
  <div>
    <div class="table-container">
      <table class="table table-hover">
        <thead class="thead-light" id="tableHead">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Version</th>
            <th scope="col">Environment</th>
            <th scope="col">Released at</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(project, index) in projects" :key="index" @click="showDetails(project.id)">
            <th scope="row">{{ index + 1 }}</th>
            <td class="text-primary font-weight-bold">{{ project.name }}</td>
            <td>{{ project.version }}</td>
            <td>{{ project.environment }}</td>
            <td>{{ project.release_date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-muted">Click the Project to see more.</p>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: mapGetters(["projects"]),
  methods: {
    ...mapActions(["getProjectDetails", "toggleLoader"]),
    showDetails(id) {
      this.toggleLoader();
      this.getProjectDetails(id).then(() => {
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
tr {
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
