<template>
  <div class="container">
    <div class="row justify-content-center">
      <AccountInfo />
    </div>
  </div>
</template>

<script>
import AccountInfo from "./account/AccountInfo";

export default {
  name: "Profile",
  components: {
    AccountInfo
  }
};
</script>

<style>
</style>
