<template>
  <div class="container">
    <Navbar />
    <transition name="fade" mode="out-in">
        <router-view class="mt-3"></router-view>
    </transition>
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

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
