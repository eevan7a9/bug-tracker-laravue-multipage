<template>
  <div id="app">
    <div v-show="!overlay_Loader">
      <Navbar class="container mb-5" />
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
    ...mapGetters(["overlay_Loader"])
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
    await this.getUser();
    console.log("getting user..");
    await this.getBugs();
    console.log("getting bugs..");
    await this.getProjects();
    console.log("getting projects..");
    await this.getDevelopers();
    console.log("getting developers..");
    await this.getTesters();
    console.log("getting testers..");
    this.toggleLoader();
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
