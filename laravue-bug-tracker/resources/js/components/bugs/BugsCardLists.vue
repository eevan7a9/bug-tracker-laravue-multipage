<template>
  <div class="wrapper-bugs mt-3 pb-3">
    <div class="card bug-card mt-4" v-for="bug in bugs" :key="bug.id" @click="showBug(bug.id)">
      <div class="card-header p-2" :class="bug.is_fixed ? 'bg-success' : 'bg-danger'">
        <h6 class="text-light mb-0 font-weight-bold">{{ bug.is_fixed ? "Fixed" : "Active" }}</h6>
      </div>
      <div class="card-body pb-0">
        <h5 class="font-weight-bold">{{ bug.title }}</h5>
        <hr />
        <small>{{ bug.bug_type }}</small>
        <p class="text-right">{{ bug.created_at }}</p>
      </div>
    </div>
    <div class="card mt-3" v-if="bugs.length < 1">
      <div class="card-header bg-secondary"></div>
      <div class="card-body">
        <h3 class="font-weight-bold">Empty :)</h3>
        <p>Bugs associated to this, they’ll appear here</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    bugs: Array
  },
  methods: {
    ...mapActions(["getBugDetails", "toggleLoader"]),
    showBug(id) {
      this.toggleLoader();
      this.getBugDetails(id).then(() => {
        this.$router.push({ name: "bugs", params: { ShowDetails: true } });
        this.toggleLoader();
      });
    }
  }
};
</script>

<style scoped>
.bug-card {
  cursor: pointer;
}
.bug-card:hover {
  background: aliceblue;
  transition: 0.5s;
  -webkit-box-shadow: -1px 13px 16px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 13px 16px -10px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 13px 16px -10px rgba(0, 0, 0, 0.75);
}
</style>
