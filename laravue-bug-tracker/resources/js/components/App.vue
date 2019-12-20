<template>
  <div class="container">
    <h1>this is app</h1>
    <router-link to="/about">about</router-link>
    <router-link to="/">home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style lang="scss">
</style>
