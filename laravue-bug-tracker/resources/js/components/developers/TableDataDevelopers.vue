<template>
  <div>
    <div class="table-container">
      <table class="table table-hover">
        <thead class="thead-light" id="tableHead">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <!-- <th scope="col">Bugs Assigned</th> -->
            <th scope="col">Joined</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(developer, index) in developers"
            :key="index"
            @click="showDetails(developer.id)"
          >
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ developer.name }}</td>
            <td>{{ developer.email }}</td>
            <!-- <td>{{ developer.bugs_assigned.length }}</td> -->
            <td>{{ developer.created_at }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-muted">Click the Developer to see more.</p>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: mapGetters(["developers"]),
  methods: {
    ...mapActions(["getDeveloperDetails", "toggleLoader"]),
    showDetails(id) {
      this.toggleLoader();
      this.getDeveloperDetails(id).then(() => {
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
