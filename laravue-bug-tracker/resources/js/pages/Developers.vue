<template>
  <div>
    <div v-if="hideDetails">
      <AddDeveloper />
      <hr />
      <TableDataDevelopers @toggleDetails="hideDetails=false" />
    </div>
    <DetailsDeveloper v-if="!hideDetails" @toggleDetails="hideDetails=true" />
  </div>
</template>

<script>
import AddDeveloper from "../components/AddDeveloper";
import TableDataDevelopers from "../components/TableDataDevelopers";
import DetailsDeveloper from "../components/DetailsDeveloper";
export default {
  name: "projects",
  components: {
    AddDeveloper,
    TableDataDevelopers,
    DetailsDeveloper
  },
  data() {
    return {
      hideDetails: true
    };
  }
};
</script>

<style></style>
