<template>
  <div>
    <div v-show="hideDetails">
      <AddProject />
      <hr />
      <TableDataProject @toggleDetails="hideDetails=false" />
    </div>
    <hr />
    <DetailsProject @toggleDetails="hideDetails=true" v-show="!hideDetails" />
  </div>
</template>

<script>
import AddProject from "../components/AddProject";
import TableDataProject from "../components/TableDataProject";
import DetailsProject from "../components/DetailsProject";
export default {
  name: "projects",
  components: {
    TableDataProject,
    AddProject,
    DetailsProject
  },
  data() {
    return {
      hideDetails: true
    };
  }
};
</script>

<style></style>
