<template>
  <div class="container">
    <Navbar />
    <router-view class="mt-5"></router-view>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Navbar
  },
  methods: {
    ...mapActions(["getUser"])
  },
  async created() {
    this.getUser();
  }
};
</script>

<style lang="scss">
</style>
