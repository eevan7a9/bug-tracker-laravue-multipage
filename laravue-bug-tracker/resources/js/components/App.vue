<template>
  <div id="app">
    <div v-show="!overlay_Loader" class="app-wrapper">
      <Navbar class="side-bar" />
      <transition name="fade" mode="out-in">
        <router-view class="container"></router-view>
      </transition>
    </div>
    <div v-show="overlay_Loader">
      <AppLoader class="loader-overlay" />
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import AppLoader from "./AppLoader";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Navbar,
    AppLoader
  },
  computed: {
    ...mapGetters(["overlay_Loader", "user"])
  },
  methods: {
    ...mapActions([
      "getUser",
      "getBugs",
      "getProjects",
      "getDevelopers",
      "getTesters",
      "toggleLoader"
    ])
  },
  async created() {
    this.toggleLoader();
    console.log("getting user..");
    await this.getUser();
    console.log("getting bugs..");
    await this.getBugs();
    console.log("getting projects..");
    await this.getProjects();
    console.log("getting developers..");
    await this.getDevelopers();
    console.log("getting testers..");
    await this.getTesters();
    this.toggleLoader();
    // Notify if user is unassigned
    if (!this.user.admin && !this.user.developer && !this.user.tester) {
      setTimeout(() => {
        this.$swal.fire(
          "You are Unassigned!",
          "Admin haven't assigned you a role.",
          "info"
        );
      }, 2000);
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
