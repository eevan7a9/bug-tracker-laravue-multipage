<template>
  <div>
    <transition name="fade" mode="out-in">
      <div v-if="hideDetails" key="1">
        <AddProject />
        <hr />
        <TableDataProject @toggleDetails="hideDetails=false" />
      </div>
      <div v-if="!hideDetails" key="2">
        <EditProject />
        <hr />
        <DetailsProject @toggleDetails="hideDetails=true" />
      </div>
    </transition>
  </div>
</template>

<script>
import AddProject from "../components/AddProject";
import TableDataProject from "../components/TableDataProject";
import DetailsProject from "../components/DetailsProject";
import EditProject from "../components/EditProject";
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
