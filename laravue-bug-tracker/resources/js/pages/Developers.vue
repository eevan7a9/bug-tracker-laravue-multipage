<template>
  <div>
    <AddDeveloper />
    <hr />
    <TableDataDevelopers />
  </div>
</template>

<script>
import AddDeveloper from "../components/AddDeveloper";
import TableDataDevelopers from "../components/TableDataDevelopers";
export default {
  name: "projects",
  components: {
    AddDeveloper,
    TableDataDevelopers
  }
};
</script>

<style></style>
