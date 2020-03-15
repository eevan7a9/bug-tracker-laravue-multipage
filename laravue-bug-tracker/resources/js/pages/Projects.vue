<template>
  <div>
    <div v-if="hideDetails">
      <AddProject />
      <hr />
      <TableDataProject @toggleDetails="hideDetails=false" />
    </div>
    <div v-if="!hideDetails">
      <EditProject />
      <hr />
      <DetailsProject @toggleDetails="hideDetails=true" />
    </div>
  </div>
</template>

<script>
import AddProject from "../components/projects/AddProject";
import TableDataProject from "../components/projects/TableDataProject";
import DetailsProject from "../components/projects/DetailsProject";
import EditProject from "../components/projects/EditProject";
export default {
  name: "projects",
  components: {
    TableDataProject,
    AddProject,
    DetailsProject,
    EditProject
  },
  data() {
    return {
      hideDetails: true
    };
  }
};
</script>

<style></style>
