<template>
  <div>
    <div class="table-container">
      <table class="table table-hover">
        <thead class="thead-light" id="tableHead">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Bugs Reported</th>
            <th scope="col">Joined</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tester, index) in testers" :key="index" @click="showDetails(tester.id)">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ tester.name }}</td>
            <td>{{ tester.email }}</td>
            <td>23</td>
            <td>{{ tester.created_at }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-muted">Click the tester to see more.</p>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: mapGetters(["testers"]),
  methods: {
    ...mapActions(["getTesters", "getTesterDetails"]),
    showDetails(id) {
      this.getTesterDetails(id).then(() => {
        this.$emit("toggleDetails");
      });
    }
  },
  created() {
    if (this.testers.length < 1) {
      this.getTesters();
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
</style>
