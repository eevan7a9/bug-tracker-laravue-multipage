<template>
  <div>
    <AddProject />
    <hr />
    <TableDataProject />
  </div>
</template>

<script>
import AddProject from "../components/AddProject";
import TableDataProject from "../components/TableDataProject";
export default {
  name: "projects",
  components: {
    TableDataProject,
    AddProject
  }
};
</script>

<style></style>
