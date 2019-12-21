<template>
  <div>
    <div class="row justify-content-start mt-2 w-100 px-3">
      <AddBug class="pt-4" />
    </div>
    <div class="add-form">
      <form></form>
    </div>
    <div>
      <h1>Table here</h1>
    </div>
  </div>
</template>

<script>
import AddBug from "../components/AddBug";
export default {
  name: "bugs",
  components: {
    AddBug
  }
};
</script>

<style>
</style>
