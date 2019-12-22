<template>
  <div class="container">
    <Navbar />
    <router-view class="mt-5"></router-view>
  </div>
</template>

<script>
import Navbar from "./Navbar";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
</style>
