<template>
  <div>
    <div class="row justify-content-start w-100 px-3">
      <AddBug />
    </div>
    <hr />
    <TableDataBugs />
  </div>
</template>

<script>
import AddBug from "../components/AddBug";
import TableDataBugs from "../components/TableDataBugs";
export default {
  name: "bugs",
  components: {
    AddBug,
    TableDataBugs
  }
};
</script>

<style>
</style>
