<template>
  <div id="app">
    <div v-show="!overlay_Loader" class="app-wrapper">
      <Navbar class="side-bar" />
      <div class="main-view">
        <transition name="fade" mode="out-in">
          <router-view class="container"></router-view>
        </transition>
      </div>
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
.app-wrapper {
  display: grid;
  min-height: 100vh;
  grid-template-columns: auto 1fr;
}
.main-view {
  padding-top: 50px;
}
@media (max-width: 900px) {
  .app-wrapper {
    min-height: 100%;
    grid-template-columns: 1fr;
  }
}
</style>
